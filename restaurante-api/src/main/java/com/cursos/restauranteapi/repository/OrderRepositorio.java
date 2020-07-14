package com.cursos.restauranteapi.repository;

import java.util.List;

import com.cursos.restauranteapi.model.Orders;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface OrderRepositorio extends JpaRepository<Orders, Integer> {

    List<Orders> findAll();

    Orders save(Orders order);

    Orders findById(int id);
 
    void delete(Orders order);

    void deleteById(int id);  
    
}