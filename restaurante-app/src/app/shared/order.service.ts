import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from './order.model';
import { OrderItem } from './order-item.model';
import { environment } from 'src/environments/environment';
import { OrderDto } from './order-dto.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  formData: Order;
  orderItems: OrderItem[];
  orderDto: OrderDto;

  constructor(private http: HttpClient) { }

  saveOrUpdateOrder() {
      this.orderDto = this.formData;
      this.orderDto.orderItems = this.orderItems;

    var body = {
      ...this.orderDto
      //...this.formData,
      //OrderItems: this.orderItems
    };
     if (this.orderDto.orderId != null) {
      return this.http.put(environment.apiURL + '/order/' + this.orderDto.orderId, body);
     } else {
      return this.http.post(environment.apiURL + '/order', body);
     }
    
  }

  getOrderList() {
    return this.http.get(environment.apiURL + '/order').toPromise();
  }

  getOrderByID(id:number):any {
    return this.http.get(environment.apiURL + '/order/' + id).toPromise();
  }

  deleteOrder(id: number) {
    return this.http.delete(environment.apiURL + '/order/' + id).toPromise();
  }

  deleteOrderItem(id: number) {
    console.log(id);
    return this.http.delete(environment.apiURL + '/order/item/' + id).toPromise();
  }

}
