package com.example.demo.mapper;

import com.example.demo.model.Test;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class TestMapper implements RowMapper<Test>{
    public static final String BASE_SQL //
            = "Select ba.Id, ba.Full_Name, ba.Balance From Bank_Account ba ";

    @Override
    public Test mapRow(ResultSet rs, int rowNum) throws SQLException {

        int Id = rs.getInt("Id");
        String QuestionId = rs.getString("QuestionId");
        String Content = rs.getString("Content");
        boolean IsCorrect = rs.getBoolean("IsCorrect");

        return new Test(Id, QuestionId, Content, IsCorrect);
    }
}
