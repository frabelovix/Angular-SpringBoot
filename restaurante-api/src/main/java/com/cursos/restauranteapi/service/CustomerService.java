package com.cursos.restauranteapi.service;

import java.util.List;

import com.cursos.restauranteapi.model.Customer;

public interface CustomerService {
    List <Customer> lista();
    Customer listarId(int id);
    Customer add(Customer p);
    Customer edit(Customer p);
    Customer delete(int id);
}