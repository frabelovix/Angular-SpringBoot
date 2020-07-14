package com.cursos.restauranteapi.serviceimpl;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import com.cursos.restauranteapi.dto.OrderDto;
import com.cursos.restauranteapi.dto.OrderItemDto;
import com.cursos.restauranteapi.model.Customer;
import com.cursos.restauranteapi.model.Item;
import com.cursos.restauranteapi.model.OrderItems;
import com.cursos.restauranteapi.model.Orders;
import com.cursos.restauranteapi.repository.ItemRepositorio;
import com.cursos.restauranteapi.repository.OrderItemRepositorio;
import com.cursos.restauranteapi.repository.OrderRepositorio;
import com.cursos.restauranteapi.service.CustomerService;
import com.cursos.restauranteapi.service.ItemService;
import com.cursos.restauranteapi.service.OrdersService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrdersServiceImpl implements OrdersService {
    @Autowired
    OrderRepositorio repositorio;
    @Autowired
    CustomerService customerService;
    @Autowired
    ItemService itemService;
    @Autowired
    OrderItemRepositorio itemRepositorio;

    @Override
    public Orders add(OrderDto dto) {

        Orders order = DtoToEntity(dto);

        return repositorio.save(order);
    }

    @Override
    public Orders delete(int id) {
        Orders order = repositorio.findById(id);
        repositorio.deleteById(id);

        return order;
    }

    @Override
    public Orders edit(OrderDto dto) {
        Orders order = DtoToEntity(dto);

        return repositorio.save(order);
    }

    @Override
    public List<Orders> lista() {
        return repositorio.findAll();
    }

    @Override
    public OrderDto listarId(int id) {
        Orders order = repositorio.findById(id);
        return EntityToDto(order);
    }

    private Orders DtoToEntity(OrderDto dto) {
        Orders order = new Orders();

        if (dto.getOrderId() != null) {
            order.setOrderId(dto.getOrderId());
        }

        order.setOrderNo(dto.getOrderNo());
        order.setpMethod(dto.getpMethod());

        Number val = dto.getgTotal();
        BigDecimal total = new BigDecimal(val.toString());

        order.setgTotal(total);
        order.setDeletedOrderItemIDs(dto.getDeletedOrderItemIDs());

        Customer customer = customerService.listarId(dto.getCustomerid());
        order.setCustomer(customer);

        montaListaItens(dto, order);

        return order;
    }

    private void montaListaItens(OrderDto dto, Orders order) {
        Set<OrderItems> itens = new HashSet<>();
        for (OrderItemDto itemdto : dto.getOrderItems()) {

            OrderItems item = new OrderItems();
            if (itemdto.getOrderItemId() != null) {
                item.setOrderItemId(itemdto.getOrderItemId());
            }
            item.setOrders(order);
            item.setQuantity((int) itemdto.getQuantity());
            item.setItem(itemService.listarId(itemdto.getItemId()));

            itens.add(item);
        }
        order.setItemsSet(itens);

    }

    private OrderDto EntityToDto(Orders o) {
        OrderDto dto = new OrderDto(o.getOrderId(), o.getOrderNo(), o.getCustomer().getCustomerId(),
                o.getCustomer().getName(), o.getpMethod(), o.getgTotal(), o.getDeletedOrderItemIDs());

        List<OrderItemDto> itens = new ArrayList<>();
        for (OrderItems itemOrder : o.getItemsSet()) {

            OrderItemDto item = new OrderItemDto();
            item.setItemId(itemOrder.getItem().getItemId());
            item.setItemName(itemOrder.getItem().getName());
            item.setOrderId(o.getOrderId());
            item.setOrderItemId(itemOrder.getOrderItemId());
            item.setPrice(itemOrder.getItem().getPrice());
            item.setQuantity(itemOrder.getQuantity());

            Number val = itemOrder.getItem().getPrice().multiply(new BigDecimal(item.getQuantity().toString()));
            // BigDecimal total = new BigDecimal(val.toString());

            item.setTotal(val);

            itens.add(item);
        }
        dto.setOrderItems(itens);

        return dto;

    }

    @Override
    public void deleteItem(int id) {
        itemRepositorio.deleteById(id);
    }

}