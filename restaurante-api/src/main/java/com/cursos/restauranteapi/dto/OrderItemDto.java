package com.cursos.restauranteapi.dto;

public class OrderItemDto {
  
    private Integer orderItemId;
    private Integer orderId;
    private Integer itemId;
    private Number quantity;
    private String itemName;
    private Number price;
    private Number total;

    public OrderItemDto(){}

    public OrderItemDto(Integer orderItemId, Integer orderId, Integer itemId, Number quantity, String itemName,
            Number price, Number total) {
        this.orderItemId = orderItemId;
        this.orderId = orderId;
        this.itemId = itemId;
        this.quantity = quantity;
        this.itemName = itemName;
        this.price = price;
        this.total = total;
    }

    public Integer getOrderItemId() {
        return orderItemId;
    }

    public void setOrderItemId(Integer orderItemId) {
        this.orderItemId = orderItemId;
    }

    public Integer getOrderId() {
        return orderId;
    }

    public void setOrderId(Integer orderId) {
        this.orderId = orderId;
    }

    public Integer getItemId() {
        return itemId;
    }

    public void setItemId(Integer itemId) {
        this.itemId = itemId;
    }

    public Number getQuantity() {
        return quantity;
    }

    public void setQuantity(Number quantity) {
        this.quantity = quantity;
    }

    public String getItemName() {
        return itemName;
    }

    public void setItemName(String itemName) {
        this.itemName = itemName;
    }

    public Number getPrice() {
        return price;
    }

    public void setPrice(Number price) {
        this.price = price;
    }

    public Number getTotal() {
        return total;
    }

    public void setTotal(Number total) {
        this.total = total;
    }

  

    
}