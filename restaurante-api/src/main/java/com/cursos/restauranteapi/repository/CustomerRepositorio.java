package com.cursos.restauranteapi.repository;

import java.util.List;

import com.cursos.restauranteapi.model.Customer;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CustomerRepositorio extends JpaRepository  <Customer, Integer>{
    List<Customer> findAll();

    Customer save(Customer p);

    Customer findById(int id);
 
    void delete(Customer p);

    void deleteById(int id);

    
}