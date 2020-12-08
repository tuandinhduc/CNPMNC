package com.example.demo.service;

import com.example.demo.convertor.AccountConvertor;
import com.example.demo.dto.AccountDto;
import com.example.demo.dto.LoginAccountDto;
import com.example.demo.entity.AccountEntity;
import com.example.demo.repository.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class AccountService implements IAccountService {

    @Autowired
    private AccountRepository accountRepository;

    @Autowired
    private AccountConvertor convertor;

    @Override
    public List<AccountDto> getAllAccount() {
        return convertor.listToDto(accountRepository.findAll());
    }

    @Override
    public Boolean saveAccount(AccountDto account) {
        AccountEntity accountEntity = new AccountEntity();

        if (account.getId() != null) {
            AccountEntity oldAccount = accountRepository.getOne(account.getId());
            accountEntity = convertor.toEntity(account, oldAccount);
        } else {
            accountEntity = convertor.toEntity(account);
        }
        accountEntity = accountRepository.save(accountEntity);
        return true;
    }

    @Override
    public Boolean loginAccount(LoginAccountDto loginAccount) {
        AccountEntity accountEntity = new AccountEntity();
        accountEntity = accountRepository.findOneByEmail(loginAccount.getEmail());
        if (accountEntity != null) return accountEntity.getPassword().equals(loginAccount.getPassword());
        return false;
    }

}
