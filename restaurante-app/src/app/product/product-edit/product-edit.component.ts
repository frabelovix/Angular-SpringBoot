import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/shared/item.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Item } from 'src/app/shared/item.model';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  product: Item = new Item();

  constructor(private service: ItemService,
    private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    this.service.getProductByID(parseInt(id)).then(res => {
      this.product = res;
    });

  }


  updateProduct(): void{
    this.service.saveOrUpdateProduct(this.product).subscribe(() => {
      //this.service.showMessage('Criar produto');
      this.router.navigate(['/products']);
    });
  }

  cancel(): void {
    this.router.navigate(['/products']);
  }

}
