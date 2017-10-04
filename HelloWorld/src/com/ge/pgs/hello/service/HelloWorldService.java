package com.ge.pgs.hello.service;



import java.util.Map;

import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;

@Path("webservice/")
public interface HelloWorldService {
	@GET
	@Path("getHelloWorld")
	@Produces("text/plain")
	public  String helloworld();
	
	@GET
	@Path("dataTable")
	@Produces("application/json")
	Map dataTable(@QueryParam("jsonInput") String jsonStr, @QueryParam("ssoId") String ssoId);
	
	
}
