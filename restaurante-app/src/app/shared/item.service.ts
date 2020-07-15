import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Item } from './item.model';
import Big from 'big.js';
import { Observable } from 'rxjs';
import { Page } from './page.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) { }

  getProductList(): any {
    return this.http.get(environment.apiURL + '/product/all').toPromise();
  }

  getProductListPaginated(index: number, size: number): any {
    return this.http.get(environment.apiURL + '/product?page=' + index + '&size=' + size).toPromise();
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
