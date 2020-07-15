package com.cursos.restauranteapi.controller;

import java.util.List;

import com.cursos.restauranteapi.model.Customer;
import com.cursos.restauranteapi.service.CustomerService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping({ "customer" })
public class CustomerController {
    @Autowired
    CustomerService service;

    // http://localhost:8080/restaurante/customer/6

    @GetMapping("/all" )
    public List<Customer> listar() {
        return service.lista();
    }

    @GetMapping
    public Page<Customer> listaPaginada(Pageable p) {
        return service.listaPaginada(p);
    }

    @GetMapping(path = { "/{id}" })
    public Customer listarId(@PathVariable("id") int id) {
        return service.listarId(id);
    }

    @PostMapping
    public Customer novo(@RequestBody Customer c) {

        return service.add(c);
    }

    @PutMapping(path = { "/{id}" })
    public Customer editar(@RequestBody Customer c, @PathVariable("id") int id) {

        c.setCustomerId(id);
        return service.edit(c);
    }

    @DeleteMapping(path = { "/{id}" })
    public void delete(@PathVariable("id") int id) {
        service.delete(id);
    }

}