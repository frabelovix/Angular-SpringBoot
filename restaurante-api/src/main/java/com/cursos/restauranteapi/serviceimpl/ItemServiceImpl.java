package com.cursos.restauranteapi.serviceimpl;

import java.math.BigDecimal;
import java.util.List;

import com.cursos.restauranteapi.dto.ItemDto;
import com.cursos.restauranteapi.model.Item;
import com.cursos.restauranteapi.repository.ItemRepositorio;
import com.cursos.restauranteapi.service.ItemService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class ItemServiceImpl implements ItemService {
    @Autowired
    ItemRepositorio repositorio;

    @Override
    public Item add(ItemDto i) {
        Item item = new Item();
        item.setName(i.getName());
        item.setPrice(new BigDecimal(i.getPrice().toString()));

        return repositorio.save(item);
    }

    @Override
    public Item delete(int id) {
        Item item = repositorio.findById(id);
        repositorio.deleteById(id);

        return item;
    }

    @Override
    public Item edit(ItemDto i) {
        Item item = new Item();
        item.setItemId(i.getItemId());
        item.setName(i.getName());
        item.setPrice(new BigDecimal(i.getPrice().toString()));

        return repositorio.save(item);
    }

    @Override
    public List<Item> lista() {
        return repositorio.findAll();
    }

    @Override
    public Item listarId(int id) {
        return repositorio.findById(id);
    }

    @Override
    public Page<Item> listaPaginada(Pageable p) {
        return repositorio.findAll(p);
    }
    

    
}