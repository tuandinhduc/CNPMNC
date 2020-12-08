package com.example.demo.api;

import com.example.demo.dto.ItemDto;
import com.example.demo.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
public class ItemApi {

    @Autowired
    private ItemService itemService;

    @GetMapping(value = "/api/all-item")
    public List<ItemDto> getAllItems() {
        return itemService.getAllItems();
    }

    @PostMapping(value = "/api/modify-item")
    public Boolean modifyItem(@RequestBody ItemDto item) {
        return itemService.saveItem(item);
    }

    @PostMapping(value = "/api/delete-item")
    public Boolean deleteItem(@RequestBody Map<String, Integer[]> ids){
        return itemService.deleteItem(ids.get("ids"));
    }
}
