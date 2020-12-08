package com.example.demo.convertor;

import com.example.demo.dto.ItemDto;
import com.example.demo.entity.ItemEntity;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class ItemConvertor {

    public ItemDto toDto(ItemEntity itemEntity) {
        ItemDto itemDto = new ItemDto();
        itemDto.setName(itemEntity.getName());
        itemDto.setPrice(itemEntity.getPrice());
        itemDto.setImage(itemEntity.getImage());
        itemDto.setContent(itemEntity.getContent());
        if (itemEntity.getId() != null) itemDto.setId(itemEntity.getId());
        return itemDto;
    }

    public ItemEntity toEntity(ItemDto itemDto) {
        ItemEntity itemEntity = new ItemEntity();
        itemEntity.setName(itemDto.getName());
        itemEntity.setPrice(itemDto.getPrice());
        itemEntity.setImage(itemDto.getImage());
        itemEntity.setContent(itemDto.getContent());
        return itemEntity;
    }

    public ItemEntity toEntity(ItemDto itemDto, ItemEntity itemEntity) {
        itemEntity.setName(itemDto.getName());
        itemEntity.setPrice(itemDto.getPrice());
        itemEntity.setImage(itemDto.getImage());
        itemEntity.setContent(itemDto.getContent());
        return itemEntity;
    }

    public List<ItemDto> listToDto(List<ItemEntity> itemEntities) {
        List<ItemDto> itemDtos = new ArrayList<>();
        for (ItemEntity itemEntity : itemEntities) {
            itemDtos.add(toDto(itemEntity));
        }
        return itemDtos;
    }
}
