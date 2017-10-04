package com.ge.pgs.hello.util;

/**
* Project : Configurator
* Date Written : Aug 22, 2014
* Security : GE Confidential
* Restrictions : GE PROPRIETARY INFORMATION, FOR GE USE ONLY
*
* Copyright(C) 2012 GE
* All rights reserved
*
* Description : DBWrappedConnectionBean 
*
* Revision Log Aug 22, 2014 | v1.0.
* --------------------------------------------------------------
*/

import org.apache.log4j.Logger;
import org.springframework.jdbc.core.JdbcTemplate;

public class DBWrappedConnectionBean {

	private static final Logger LOGGER = Logger.getLogger(DBWrappedConnectionBean.class);
	private java.sql.Connection con;
	private org.jboss.jca.adapters.jdbc.jdk6.WrappedConnectionJDK6 jbconn;
	
	public java.sql.Connection getWrappedConnection(JdbcTemplate jdbcTemplate)throws java.sql.SQLException{
		con = jdbcTemplate.getDataSource().getConnection();
		jbconn = (org.jboss.jca.adapters.jdbc.jdk6.WrappedConnectionJDK6) con;
		return (java.sql.Connection) jbconn.getUnderlyingConnection();
	}
	
	
	public boolean closeConnection() {
		boolean status = true;
		try {
			jbconn.close();
			jbconn=null;
			LOGGER.info("Wrapped Connection closed....");
    	} catch (Exception e) {
    		LOGGER.error("Error in closing Wrapped Connection......",e);
    		status = false;
    	}
		try {
			con.close();
			con=null;
			LOGGER.info("Original Connection closed....");
    	} catch (Exception e) {
    		LOGGER.error("Error in closing Original Connection......",e);
    		status = false;
    	}
		return status;
	}
}
