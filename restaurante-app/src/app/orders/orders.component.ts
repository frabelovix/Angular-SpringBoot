import { Component, OnInit } from '@angular/core';
import { OrderService } from '../shared/order.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PageEvent } from '@angular/material';
import { Page } from '../shared/page.model';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styles: []
})
export class OrdersComponent implements OnInit {
  orderList;

  // MatPaginator Inputs
  pageIndex = 0;
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  // MatPaginator Output
  pageEvent: PageEvent;

  page: Page;

  constructor(private service: OrderService,
    private router: Router,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.refreshList();
  }

  refreshList() {
    this.service.getOrderListPaginated(this.pageIndex, this.pageSize)
    .then(res => {
      this.page = res,
      this.orderList = this.page.content;
      this.length = this.page.totalElements;
    });
  }

  openForEdit(orderID: number) {
    this.router.navigate(['/order/edit/' + orderID]);
  }

  onOrderDelete(id: number) {
    if (confirm('Confirma exclusão desse registro?')) {
      this.service.deleteOrder(id).then(res => {
        this.refreshList();
        this.toastr.warning('Registro excluído com sucesso!', 'Restaurente App.');
      });
    }
  }

  getServerData(event?: PageEvent) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.refreshList();

  }

}
