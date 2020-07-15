package com.cursos.restauranteapi.service;

import java.util.List;

import com.cursos.restauranteapi.dto.ItemDto;
import com.cursos.restauranteapi.model.Item;


import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface ItemService {

    List<Item> lista();
    Page<Item> listaPaginada(Pageable p);
    Item listarId(int id);
    Item add(ItemDto item);
    Item edit(ItemDto item);
    Item delete(int id);
    
}