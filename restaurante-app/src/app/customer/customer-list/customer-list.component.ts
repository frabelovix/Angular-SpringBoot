import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/shared/customer.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PageEvent } from '@angular/material';
import { Page } from 'src/app/shared/page.model';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customerList;

  // MatPaginator Inputs
  pageIndex = 0;
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  // MatPaginator Output
  pageEvent: PageEvent;

  page: Page;


  constructor(private service: CustomerService,
    private router: Router,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.refreshList();
  }

  refreshList() {
    this.service.getCustomerListPaginated(this.pageIndex, this.pageSize).then(res => {
      this.page = res,
      this.customerList = this.page.content;
      this.length = this.page.totalElements;
    });
  }

  openForEdit(id: number) {
     this.router.navigate(['/customer/edit/' + id]);

  }

  onCustomerDelete(id: number) {
    if (confirm('Confirma exclusão desse registro?')) {
      this.service.deleteCustomer(id).then(res => {
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
