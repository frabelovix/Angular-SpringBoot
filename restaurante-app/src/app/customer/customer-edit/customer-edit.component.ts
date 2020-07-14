import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/shared/customer.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Customer } from 'src/app/shared/customer.model';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  customer: Customer = new Customer();

  constructor(private service: CustomerService,
    private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.getCustomerByID(parseInt(id)).then(res => {
      this.customer = res;
    });


  }

  updateCustomer(){
    this.service.updateCustomer(this.customer).subscribe(() => {
      //this.service.showMessage('Criar produto');
      this.router.navigate(['/customers']);
    });
  }


  cancel(): void {
    this.router.navigate(['/customers']);
  }
  

}
