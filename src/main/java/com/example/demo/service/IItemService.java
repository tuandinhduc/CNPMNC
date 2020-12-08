package com.example.demo.service;

import com.example.demo.dto.ItemDto;

import java.util.List;

public interface IItemService {

    List<ItemDto> getAllItems();
    Boolean saveItem(ItemDto item);
    Boolean deleteItem(Integer[] ids);
}
