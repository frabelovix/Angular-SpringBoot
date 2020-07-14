import { CustomerService } from './../../shared/customer.service';
import { OrderService } from './../../shared/order.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { OrderItemsComponent } from '../order-items/order-items.component';
import { Customer } from 'src/app/shared/customer.model';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { OrderDto } from 'src/app/shared/order-dto.model';
import { PrinterService } from 'src/app/shared/printer.service';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styles: []
})
export class OrderComponent implements OnInit {
  customerList: Customer[];
  isValid = true;
  orderDto: OrderDto;

  constructor(private service: OrderService,
    private dialog: MatDialog,
    private customerService: CustomerService,
    private toastr: ToastrService,
    private router: Router,
    private currentRoute: ActivatedRoute,
    private printerService: PrinterService) { }

  ngOnInit() {
    const orderID = this.currentRoute.snapshot.paramMap.get('id');
    if (orderID == null) {
      this.resetForm();
    } else {

      this.service.getOrderByID(parseInt(orderID)).then(res => {
        this.orderDto = res;

        this.service.formData = this.orderDto;
        this.service.formData.deletedOrderItemIDs = '';
        this.service.orderItems = this.orderDto.orderItems;

      });
    }

    this.customerService.getCustomerList().then(res => {
      this.customerList = res as Customer[];
    });
  }

  resetForm(form?: NgForm) {
    if (form = null) {
      form.resetForm();
    }
    this.service.formData = {
      orderId: null,
      orderNo: Math.floor(100000 + Math.random() * 900000).toString(),
      customerid: 0,
      pMethod: '',
      gTotal: 0,
      deletedOrderItemIDs: ''
    };
    this.service.orderItems = [];
  }

  AddOrEditOrderItem(orderItemIndex, OrderID) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = '50%';
    dialogConfig.data = { orderItemIndex, OrderID };
    this.dialog.open(OrderItemsComponent, dialogConfig).afterClosed().subscribe(res => {
      this.updateGrandTotal();
    });
  }


  onDeleteOrderItem(orderItemID: number, i: number) {
    if (orderItemID != null) {
      /*exclusão baseada num array montado no servidor após submit
      this.service.formData.deletedOrderItemIDs += orderItemID + ",";
      */
      // exclusão direta
      if (confirm('Confirma exclusão do item?')) {
        this.service.deleteOrderItem(orderItemID).then(res => {
          this.toastr.warning('Item excluído com sucesso!', 'Restaurente App.');
        });
      }

      this.service.orderItems.splice(i, 1);
    }
    this.updateGrandTotal();
  }

  updateGrandTotal() {
    this.service.formData.gTotal = this.service.orderItems.reduce((prev, curr) => {
      return prev + curr.total;
    }, 0);
    this.service.formData.gTotal = parseFloat(this.service.formData.gTotal.toFixed(2));
  }

  validateForm() {
    this.isValid = true;
    if (this.service.formData.customerid === 0) {
      this.isValid = false;
    } else if (this.service.orderItems.length === 0) {
      this.isValid = false;
    }
    return this.isValid;
  }


  onSubmit(form: NgForm) {
    if (this.validateForm()) {
      this.service.saveOrUpdateOrder().subscribe(res => {
        this.resetForm();
        this.toastr.success('Registro gravad com Sucesso!', 'Restaurente App.');
        this.router.navigate(['/orders']);
      });
    }
  }

  onExportar(OrderID) {
    this.printerService.getOrderExport('order-' + OrderID,
       '/order/relatorio/' + OrderID);
  }

}
