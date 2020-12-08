package com.example.demo.entity;

import javax.persistence.*;

@Entity
@Table(name = "account")
public class AccountEntity extends BaseAccountDto{

    @Column(name = "name")
    private String name;

    @Column(name = "password")
    private String password;

    @Column(name = "email")
    private String email;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    @Override
    public String toString() {
        return "{" +
                ", name='" + name + '\'' +
                ", password='" + password + '\'' +
                ", email='" + email + '\'' +
                '}';
    }
}
