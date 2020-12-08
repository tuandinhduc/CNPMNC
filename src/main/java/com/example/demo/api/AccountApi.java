package com.example.demo.api;

import com.example.demo.dto.AccountDto;
import com.example.demo.dto.LoginAccountDto;
import com.example.demo.service.IAccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class AccountApi {

    @Autowired
    private IAccountService accountService;

    @GetMapping(value = "/api/all-account")
    public List<AccountDto> getAllAccount(){
        return accountService.getAllAccount();
    }

    @PostMapping(value = "/api/modify-account")
    public Boolean createAccount(@RequestBody AccountDto accountDto){
        return  accountService.saveAccount(accountDto);
    }

    @PostMapping(value = "/api/login")
    public String loginAccount(@RequestBody LoginAccountDto login){
        return accountService.loginAccount(login).toString();
    }
}
