package com.example.demo.service;

import com.example.demo.convertor.ItemConvertor;
import com.example.demo.dto.ItemDto;
import com.example.demo.entity.AccountEntity;
import com.example.demo.entity.ItemEntity;
import com.example.demo.repository.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ItemService implements IItemService {

    @Autowired
    private ItemRepository itemRepository;

    @Autowired
    private ItemConvertor itemConvertor;

    @Override
    public List<ItemDto> getAllItems() {
        return itemConvertor.listToDto(itemRepository.findAll());
    }

    @Override
    public Boolean saveItem(ItemDto item) {
        ItemEntity itemEntity = new ItemEntity();

        if (item.getId() != null) {
            ItemEntity oldItem = itemRepository.getOne(item.getId());
            itemEntity = itemConvertor.toEntity(item, oldItem);
        } else {
            itemEntity = itemConvertor.toEntity(item);
        }
        itemEntity = itemRepository.save(itemEntity);
        return true;
    }

    @Override
    public Boolean deleteItem(Integer[] ids) {
        for (Integer id : ids) itemRepository.deleteById(id);
        return true;
    }
}
