package com.cursos.restauranteapi.repository;

import java.util.List;
import com.cursos.restauranteapi.model.OrderItems;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface OrderItemRepositorio extends JpaRepository<OrderItems, Integer> {

    List<OrderItems> findAll();

    OrderItems save(OrderItems order);

    OrderItems findById(int id);
 
    void delete(OrderItems order);

    void deleteById(int id);  

    
}