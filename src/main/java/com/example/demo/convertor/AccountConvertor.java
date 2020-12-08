package com.example.demo.convertor;

import com.example.demo.dto.AccountDto;
import com.example.demo.entity.AccountEntity;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class AccountConvertor {

    public AccountDto toDto(AccountEntity accountEntity){
        AccountDto accountDto = new AccountDto();
        accountDto.setName(accountEntity.getName());
        accountDto.setPassword(accountEntity.getPassword());
        accountDto.setEmail(accountEntity.getEmail());
        if(accountEntity.getId() != null) accountDto.setId( accountEntity.getId());
        return accountDto;
    }

    public AccountEntity toEntity(AccountDto accountDto){
        AccountEntity accountEntity = new AccountEntity();
        accountEntity.setName(accountDto.getName());
        accountEntity.setPassword(accountDto.getPassword());
        accountEntity.setEmail(accountDto.getEmail());
        return accountEntity;
    }

    public AccountEntity toEntity(AccountDto accountDto, AccountEntity accountEntity){
        accountEntity.setName(accountDto.getName());
        accountEntity.setPassword(accountEntity.getPassword());
        accountEntity.setEmail(accountDto.getEmail());
        return accountEntity;
    }

    public List<AccountDto> listToDto(List<AccountEntity> accountEntities){
        List<AccountDto> accountDtos = new ArrayList<AccountDto>();
        for(AccountEntity accountEntity: accountEntities){
            accountDtos.add(toDto(accountEntity));
        }
        return accountDtos;
    }

}
