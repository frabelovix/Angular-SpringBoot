package com.cursos.restauranteapi.service;

import java.util.List;

import com.cursos.restauranteapi.dto.ItemDto;
import com.cursos.restauranteapi.model.Item;

public interface ItemService {

    List<Item> lista();
    Item listarId(int id);
    Item add(ItemDto item);
    Item edit(ItemDto item);
    Item delete(int id);
    
}