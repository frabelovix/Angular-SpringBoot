package com.cursos.restauranteapi.model;

import java.math.BigDecimal;

import javax.persistence.*;


@Entity
@Table(name = "item")
public class Item {

    @Id
    @Column(name="itemid")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int itemId;

    @Column
    private String name;

    @Column
    private BigDecimal price;

    public int getItemId() {
        return itemId;
    }

    public void setItemId(int itemId) {
        this.itemId = itemId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    
    
}