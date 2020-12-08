package com.example.demo.service;

import com.example.demo.dto.AccountDto;
import com.example.demo.dto.LoginAccountDto;
import com.example.demo.entity.AccountEntity;

import java.util.List;

public interface IAccountService {

    List<AccountDto> getAllAccount();
    Boolean saveAccount(AccountDto account);
    Boolean loginAccount(LoginAccountDto loginAccount);
}
