package com.cursos.restauranteapi.serviceimpl;

import java.util.List;

import com.cursos.restauranteapi.model.Customer;
import com.cursos.restauranteapi.repository.CustomerRepositorio;
import com.cursos.restauranteapi.service.CustomerService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class CustomerServiceImpl implements CustomerService {
    @Autowired
    private CustomerRepositorio repositorio;

    @Override
    public Customer add(Customer p) {
        return repositorio.save(p);
    }

    @Override
    public Customer delete(int id) {
        Customer p = repositorio.findById(id);
        repositorio.deleteById(id);

        return p;
    }

    @Override
    public Customer edit(Customer p) {
        return repositorio.save(p);
    }

    @Override
    public List<Customer> lista() {
        return repositorio.findAll();
    }

    @Override
    public Customer listarId(int id) {
        return repositorio.findById(id);
    }

    @Override
    public Page<Customer> listaPaginada(Pageable p) {

        return repositorio.findAll(p);
    }


    
}