import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/shared/customer.model';
import { CustomerService } from 'src/app/shared/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
  customer: Customer = {
    name: ''
  }


  constructor(private service: CustomerService,
    private router: Router) { }

  ngOnInit() {
  }

  createCustomer(): void {
    this.service.saveOrUpdateCustomer(this.customer).subscribe(() => {
      //this.service.showMessage('Criar produto');
      this.router.navigate(['/customers']);
    });
  }

  cancel(): void{
    this.router.navigate(['/customers']);
  }

}
