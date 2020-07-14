package com.cursos.restauranteapi.model;

import java.math.BigDecimal;
import java.util.Set;

import javax.persistence.*;

@Entity
@Table(name="orders")
public class Orders {

    @Id
    @Column(name="orderid")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int orderId;

    @Column(name="orderno")
    private String orderNo;

    @ManyToOne
    @JoinColumn(name = "customerid", nullable = false)
    private Customer customer;

    @Column(name="pmethod")
    private String pMethod;

    @Column(name="gtotal")
    private BigDecimal gTotal;

	@OneToMany(mappedBy = "orders", cascade = CascadeType.ALL)
    private Set<OrderItems> ItemsSet;
    
	@Transient
	private String deletedOrderItemIDs;    

    public int getOrderId() {
        return orderId;
    }

    public void setOrderId(int orderId) {
        this.orderId = orderId;
    }

    public String getOrderNo() {
        return orderNo;
    }

    public void setOrderNo(String orderNo) {
        this.orderNo = orderNo;
    }

    

    public String getpMethod() {
        return pMethod;
    }

    public void setpMethod(String pMethod) {
        this.pMethod = pMethod;
    }

    public BigDecimal getgTotal() {
        return gTotal;
    }

    public void setgTotal(BigDecimal gTotal) {
        this.gTotal = gTotal;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public Set<OrderItems> getItemsSet() {
        return ItemsSet;
    }

    public void setItemsSet(Set<OrderItems> itemsSet) {
        ItemsSet = itemsSet;
    }

    public String getDeletedOrderItemIDs() {
        return deletedOrderItemIDs;
    }

    public void setDeletedOrderItemIDs(String deletedOrderItemIDs) {
        this.deletedOrderItemIDs = deletedOrderItemIDs;
    }



    
}