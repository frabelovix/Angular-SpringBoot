import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Item } from './item.model';
import Big from 'big.js';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) { }

  getProductList() {
    return this.http.get(environment.apiURL + '/product').toPromise();
  }


  getProductByID(id: number): any {
    return this.http.get(environment.apiURL + '/product/' + id).toPromise();
  }


  saveOrUpdateProduct(p: Item) {

    if (p.itemId != null) {
      return this.http.put(environment.apiURL + '/product/' + p.itemId, p);
    } else {
     return this.http.post(environment.apiURL + '/product', p);
    }

  }


  deleteProduct(id: number) {
    return this.http.delete(environment.apiURL + '/product/' + id).toPromise();
  }


}
