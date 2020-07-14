import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/shared/item.model';
import { ItemService } from 'src/app/shared/item.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  product: Item = {
    name: '', price: null
  }

  constructor(private service: ItemService,
    private router: Router) { }

  ngOnInit() {
  }


  createProduct(): void {
    this.service.saveOrUpdateProduct(this.product).subscribe(() => {
      //this.service.showMessage('Criar produto');
      this.router.navigate(['/products']);
    })
  }

  cancel(): void{
    this.router.navigate(['/products']);
  }

}
