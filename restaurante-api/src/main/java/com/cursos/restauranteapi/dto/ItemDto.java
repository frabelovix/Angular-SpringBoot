package com.cursos.restauranteapi.dto;

public class ItemDto {
    private Integer itemId;
    private String name;
    private Number price;

    public ItemDto(){}

    public ItemDto(Integer itemId, String name,
            Number price) {
        this.itemId = itemId;
        this.name = name;
        this.price = price;

    }

    public Integer getItemId() {
        return itemId;
    }

    public void setItemId(Integer itemId) {
        this.itemId = itemId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Number getPrice() {
        return price;
    }

    public void setPrice(Number price) {
        this.price = price;
    }

  
    
}