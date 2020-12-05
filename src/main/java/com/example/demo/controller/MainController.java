package com.example.demo.controller;

import com.example.demo.dao.TestDao;
import com.example.demo.model.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class MainController {

    @Autowired
    private TestDao testDao;

    @GetMapping("/abc")
    public List<Test> allTest() {
        List<Test> list = testDao.getTest();
//        model.addAttribute("accountInfos", list);

        return list;
    }


}
