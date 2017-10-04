package com.ge.pgs.hello.rm;

import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import com.ge.pgs.hello.dto.projectDTO;



public class ProjectRM implements RowMapper<projectDTO> {

	@Override
	public projectDTO mapRow(ResultSet rs, int arg1) throws SQLException {
		// TODO Auto-generated method stub
		rs.setFetchSize(2000);
		projectDTO projectDto = new projectDTO();
		ResultSetMetaData metadata = rs.getMetaData();
		 int columnCount = metadata.getColumnCount();
		projectDto.setProjectId(rs.getString(1));
		projectDto.setName(rs.getString(2));
		projectDto.setDescription(rs.getString(3));
		projectDto.setCustomer(rs.getString(4));
		projectDto.setOwner(rs.getString(5));
		
		return projectDto;
	}

		
	
}
