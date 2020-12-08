package com.example.demo.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "dorm_info")
public class ItemEntity extends BaseItemEntity {

    @Column(name = "name")
    private String name;

    @Column(name = "price")
    private Integer price;

    @Column(name = "image")
    private String image;

    @Column(name = "content")
    private String content;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getPrice() {
        return price;
    }

    public void setPrice(Integer price) {
        this.price = price;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    @Override
    public String toString() {
        return "ItemEntity{" +
                "name='" + name + '\'' +
                ", price=" + price +
                ", image='" + image + '\'' +
                ", content='" + content + '\'' +
                '}';
    }
}
