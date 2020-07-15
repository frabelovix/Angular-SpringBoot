package com.cursos.restauranteapi.repository;

import java.util.List;
import java.util.Optional;

import com.cursos.restauranteapi.model.Item;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ItemRepositorio extends JpaRepository<Item, Integer> {

    List<Item> findAll();

    Item save(Item item);

    Item findById(int id);
 
    void delete(Item item);

    void deleteById(int id);  
    

    
}