import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Customer } from './customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  getCustomerList() {
    return this.http.get(environment.apiURL + '/customer').toPromise();
  }

  getCustomerByID(id: number): any {
    return this.http.get(environment.apiURL + '/customer/' + id).toPromise();
  }


  saveOrUpdateCustomer(c: Customer) {

    return this.http.post(environment.apiURL + '/customer', c);

  }

  updateCustomer(c: Customer) {    
    return this.http.put(environment.apiURL + '/customer/' + c.customerId, c);
  }


  deleteCustomer(id: number) {
    return this.http.delete(environment.apiURL + '/customer/' + id).toPromise();
  }


}
