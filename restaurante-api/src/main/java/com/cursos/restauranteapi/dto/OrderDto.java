package com.cursos.restauranteapi.dto;

import java.util.List;

public class OrderDto {
    private Integer orderId;
    private String orderNo;
    private Integer customerid;
    private String customerName;
    private String pMethod;
    private Number gTotal;
    private String deletedOrderItemIDs;
    private List<OrderItemDto> orderItems;
  
    public OrderDto(){}

    public OrderDto(Integer orderId, String orderNo, Integer customerid, 
        String customerName, String pMethod, Number gTotal,
            String deletedOrderItemIDs) {
        this.orderId = orderId;
        this.orderNo = orderNo;
        this.customerid = customerid;
        this.customerName = customerName;                   
        this.pMethod = pMethod;
        this.gTotal = gTotal;
        this.deletedOrderItemIDs = deletedOrderItemIDs;
    }

    public Integer getOrderId() {
        return orderId;
    }

    public void setOrderId(Integer orderId) {
        this.orderId = orderId;
    }

    public String getOrderNo() {
        return orderNo;
    }

    public void setOrderNo(String orderNo) {
        this.orderNo = orderNo;
    }

    public Integer getCustomerid() {
        return customerid;
    }

    public void setCustomerid(Integer customerid) {
        this.customerid = customerid;
    }
    
    public String getpMethod() {
        return pMethod;
    }

    public void setpMethod(String pMethod) {
        this.pMethod = pMethod;
    }

    public Number getgTotal() {
        return gTotal;
    }

    public void setgTotal(Number gTotal) {
        this.gTotal = gTotal;
    }

    public String getDeletedOrderItemIDs() {
        return deletedOrderItemIDs;
    }

    public void setDeletedOrderItemIDs(String deletedOrderItemIDs) {
        this.deletedOrderItemIDs = deletedOrderItemIDs;
    }

    public List<OrderItemDto> getOrderItems() {
        return orderItems;
    }

    public void setOrderItems(List<OrderItemDto> orderItems) {
        this.orderItems = orderItems;
    }

    public String getCustomerName() {
        return customerName;
    }

    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }

   


    
    
}