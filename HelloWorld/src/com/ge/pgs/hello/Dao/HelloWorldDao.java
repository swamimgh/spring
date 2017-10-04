package com.ge.pgs.hello.Dao;

import java.util.Map;

public interface HelloWorldDao {
	public  String helloworld();
	
	@SuppressWarnings("rawtypes")
	Map dataTable(String ssoId, String projType,String projectId);
}
