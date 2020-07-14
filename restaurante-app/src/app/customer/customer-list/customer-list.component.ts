import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/shared/customer.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customerList;

  constructor(private service: CustomerService,
    private router: Router,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.refreshList();
  }
  refreshList() {
    this.service.getCustomerList().then(res => this.customerList = res);
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

}
