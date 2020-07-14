package com.cursos.restauranteapi.service;

import java.util.List;

import com.cursos.restauranteapi.dto.OrderDto;
import com.cursos.restauranteapi.model.Orders;

public interface OrdersService {
    List<Orders> lista();
    OrderDto listarId(int id);
    Orders add(OrderDto order);
    Orders edit(OrderDto order);
    Orders delete(int id);
    void deleteItem(int id);
    
}