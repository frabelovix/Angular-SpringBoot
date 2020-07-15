package com.cursos.restauranteapi.service;

import java.util.List;

import com.cursos.restauranteapi.dto.OrderDto;
import com.cursos.restauranteapi.model.Orders;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface OrdersService {
    List<Orders> lista();
    Page<Orders> listaPaginada(Pageable p);
    OrderDto listarId(int id);
    Orders add(OrderDto order);
    Orders edit(OrderDto order);
    Orders delete(int id);
    void deleteItem(int id);
    
}