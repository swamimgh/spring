package com.ge.pgs.hello.serviceImpl;

import java.util.HashMap;
import java.util.Map;

import org.json.JSONObject;

import com.ge.pgs.hello.Dao.HelloWorldDao;
import com.ge.pgs.hello.framework.SpringApplicationContext;
import com.ge.pgs.hello.service.HelloWorldService;

public class HelloWorldServiceImpl implements HelloWorldService{

HelloWorldDao helloObj = (HelloWorldDao) SpringApplicationContext.getBean("helloDao");

	public String helloworld() {
	
		return helloObj.helloworld();
	}

	@Override
	public Map dataTable(String jsonStr, String ssoId) {
		// TODO Auto-generated method stub
		Map resultMap = new HashMap();
		try{
			JSONObject jsonObj = new JSONObject(jsonStr);
			String projType = jsonObj.getString("projType");
			if(projType == ""||projType.equalsIgnoreCase("")){
				projType = null;
			}
			String projectId = jsonObj.getString("projectId");
			if(projectId == ""||projectId.equalsIgnoreCase("")){
				projectId = null;
			}else{
				ssoId=null;
			}
			resultMap =  helloObj.dataTable(ssoId,projType,projectId);
		}catch(Exception exception){
			System.out.println("exception");
		}
		return resultMap;
	}

	
}
