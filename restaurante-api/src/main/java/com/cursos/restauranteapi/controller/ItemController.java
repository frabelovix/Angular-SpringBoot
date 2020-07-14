package com.cursos.restauranteapi.controller;

import java.math.BigDecimal;
import java.util.List;

import com.cursos.restauranteapi.dto.ItemDto;
import com.cursos.restauranteapi.dto.OrderItemDto;
import com.cursos.restauranteapi.model.Item;
import com.cursos.restauranteapi.service.ItemService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping({"product"})
public class ItemController {
    @Autowired
    ItemService service;

    @GetMapping
    public List<Item> listar() {
        return service.lista();
    }

    @GetMapping(path = { "/{id}" })
    public Item listarId(@PathVariable("id") int id) {
        return service.listarId(id);
    }

    @PostMapping
    public Item novo(@RequestBody ItemDto item) {
    
        return service.add(item);
    }

    @PutMapping(path = { "/{id}" })
    public Item editar(@RequestBody ItemDto item, @PathVariable("id") int id) {
        item.setItemId(id);               
        
        return service.edit(item);
    }

    @DeleteMapping(path = { "/{id}" })
    public void delete(@PathVariable("id") int id) {
        service.delete(id);
    }    


    
}