package com.ge.pgs.hello.DaoImpl;



import java.util.HashMap;
import java.util.Map;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;

import com.ge.pgs.hello.Dao.HelloWorldDao;
import com.ge.pgs.hello.helloworldsp.helloWorldSP;


public class HelloWorldDaoImpl implements HelloWorldDao{
	private JdbcTemplate jdbcTemplate;
	
	@Override
	public String helloworld() {
	
		return "Hello World";
	}


	@Autowired
	public void init(DataSource dataSourceMINI) {
		this.jdbcTemplate = new JdbcTemplate(dataSourceMINI);
		
	}
	@Override
	public Map dataTable(String ssoId, String projType, String projectId) {
		// TODO Auto-generated method stub
		Map projectsMap = new HashMap();
		try {
			helloWorldSP projectSP= new helloWorldSP(this.jdbcTemplate.getDataSource(),"RDM_CASE_CRUD_WEB_PKG.VIEW_PROJECTS_PRC");	
		 projectsMap = projectSP.getProjects(ssoId, projType, projectId);
			
		} catch (Exception e) {
			
		}
	return projectsMap;
 
	}

	}


