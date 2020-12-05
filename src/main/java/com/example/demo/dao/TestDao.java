package com.example.demo.dao;

import com.example.demo.mapper.TestMapper;
import com.example.demo.model.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.support.JdbcDaoSupport;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.sql.DataSource;
import java.util.List;

@Repository
@Transactional
public class TestDao extends JdbcDaoSupport {

    @Autowired
    public TestDao(DataSource dataSource){
        this.setDataSource(dataSource);
    }

    public List<Test> getTest() {
        // Select ba.Id, ba.Full_Name, ba.Balance From Bank_Account ba
        String sql = TestMapper.BASE_SQL;

        Object[] params = new Object[] {};
        TestMapper mapper = new TestMapper();

        List<Test> list = this.getJdbcTemplate().query(sql, params, mapper);
//        System.out.print(list.get(0));

        return list;
    }
}
