package com.ge.pgs.hello.helloworldsp;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.sql.DataSource;

import oracle.jdbc.OracleTypes;

import org.springframework.jdbc.core.SqlOutParameter;
import org.springframework.jdbc.core.SqlParameter;
import org.springframework.jdbc.object.StoredProcedure;

import com.ge.pgs.hello.dto.projectDTO;
import com.ge.pgs.hello.rm.ProjectRM;




public class helloWorldSP extends StoredProcedure{
	public helloWorldSP(DataSource ds, String procName) {
		super(ds, procName);
	}


	public void getProjectsCompile() {

		declareParameter(new SqlParameter("PI_CREATED_BY", OracleTypes.VARCHAR));
		declareParameter(new SqlParameter("PI_PROJECT_TYPE", OracleTypes.VARCHAR));
		declareParameter(new SqlParameter("PI_PROJECT_ID", OracleTypes.NUMBER));
		declareParameter(new SqlOutParameter("PO_PROJECT_CURSOR", OracleTypes.CURSOR, new ProjectRM()));
		declareParameter(new SqlOutParameter("PO_STATUS", OracleTypes.VARCHAR));
		declareParameter(new SqlOutParameter("PO_ERRCODE", OracleTypes.VARCHAR));
		declareParameter(new SqlOutParameter("PO_ERRMESSAGE", OracleTypes.VARCHAR));
		compile();
	}
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public Map getProjects(String ssoId, String projType,String projectId) {
		String msg = "";
		String status ="";
		Map projectsMap =  new HashMap();
		getProjectsCompile();
		try {
			Map<String, String> inputParam = new HashMap<String, String>();
			inputParam.put("PI_CREATED_BY", ssoId);
			inputParam.put("PI_PROJECT_TYPE", projType);
			inputParam.put("PI_PROJECT_ID", projectId);
			Map<String, Object> opParam = (Map<String, Object>) super.execute(inputParam);
			List<projectDTO> projectsList = (List<projectDTO>) opParam.get("PO_PROJECT_CURSOR");
			status = (String) opParam.get("PO_STATUS");
			msg = (String) opParam.get("PO_ERRMESSAGE");
			projectsMap.put("projects", projectsList);
			projectsMap.put("status", status);
			projectsMap.put("msg", msg);

		} catch (Exception e) {
			System.out.println("Exception");
		}
		return projectsMap;

}}
