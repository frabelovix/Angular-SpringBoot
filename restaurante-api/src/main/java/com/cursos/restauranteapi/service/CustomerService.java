package com.cursos.restauranteapi.service;

import java.util.List;

import com.cursos.restauranteapi.model.Customer;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface CustomerService {
    List <Customer> lista();
    Page<Customer> listaPaginada(Pageable p);
    Customer listarId(int id);
    Customer add(Customer p);
    Customer edit(Customer p);
    Customer delete(int id);
}