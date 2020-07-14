package com.cursos.restauranteapi.controller;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletResponse;

import com.cursos.restauranteapi.dto.OrderDto;
import com.cursos.restauranteapi.dto.OrderItemDto;
import com.cursos.restauranteapi.model.OrderItems;
import com.cursos.restauranteapi.model.Orders;
import com.cursos.restauranteapi.service.OrdersService;
import com.fasterxml.jackson.databind.ObjectMapper;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.util.ResourceUtils;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import net.sf.jasperreports.engine.JRException;
import net.sf.jasperreports.engine.JasperExportManager;
import net.sf.jasperreports.engine.JasperFillManager;
import net.sf.jasperreports.engine.JasperPrint;
import net.sf.jasperreports.engine.data.JRBeanCollectionDataSource;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping({"order"})
public class OrderController {
    @Autowired
    OrdersService service;

    @GetMapping
    public List<Orders> listar() {
        return service.lista();
    }

    @GetMapping(path = { "/{id}" })
    public OrderDto listarId(@PathVariable("id") int id) {
        return service.listarId(id);
    }

    @PostMapping
    public Orders novo(@RequestBody OrderDto order) {

        return service.add(order);
    }

    @PutMapping(path = { "/{id}" })
    public Orders editar(@RequestBody OrderDto o, @PathVariable("id") int id) {
        //o.setOrderId(id);
        if (! o.getDeletedOrderItemIDs().isEmpty() ){
            String[] array = o.getDeletedOrderItemIDs().split("\\,", -1);
            System.out.println(array);
        }
        
        
        return service.edit(o);
    }

    @DeleteMapping(path = { "/{id}" })
    public Orders delete(@PathVariable("id") int id) {
        return service.delete(id);
    }

    
    @DeleteMapping(path = { "item/{id}" })
    public void  deleteOrderItem(@PathVariable("id") int id) {
         service.deleteItem(id);
    }


  @GetMapping(path = { "relatorio/{id}" })
    public void getOrder(@PathVariable("id") int id,
        HttpServletResponse response)
            throws IOException, JRException {    
                
        String sourceFileName = ResourceUtils
                .getFile(ResourceUtils.CLASSPATH_URL_PREFIX + "relatorios/Order.jasper").getAbsolutePath();
        // creating our list of beans
        OrderDto order =  service.listarId(id);
        //criando um arrauy de um elemento para passar como datasource
        List<OrderDto> lista = new ArrayList<OrderDto>();
        lista.add(order);

        // creating datasource from bean list
        JRBeanCollectionDataSource beanColDataSource = new JRBeanCollectionDataSource(lista);
        Map parameters = new HashMap();
        
        String localOrderItems = ResourceUtils
        .getFile(ResourceUtils.CLASSPATH_URL_PREFIX + "relatorios/OrderItems.jasper").getAbsolutePath();

        //linha no relatorio jasper responsavel por converter o datasource:
        //new net.sf.jasperreports.engine.data.JRBeanCollectionDataSource({$PlistaItems})

        parameters.put("localOrderItems", localOrderItems);
        parameters.put("listaItems", order.getOrderItems());
       
        JasperPrint jasperPrint = JasperFillManager.fillReport(sourceFileName, parameters, beanColDataSource);
        
        JasperExportManager.exportReportToPdfStream(jasperPrint, response.getOutputStream());

        response.setContentType("application/pdf");
        response.addHeader("Content-Disposition", "inline; filename=jasper.pdf;");
        
    }    
    

    
}