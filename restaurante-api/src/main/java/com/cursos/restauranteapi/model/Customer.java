package com.cursos.restauranteapi.model;

import javax.persistence.*;

@Entity
@Table(name = "customer")
public class Customer {

    @Id
    @Column(name="customerid")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int customerId;

    @Column
    private String name;

    public int getCustomerId() {
        return customerId;
    }

    public void setCustomerId(int customerId) {
        this.customerId = customerId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    

    
}