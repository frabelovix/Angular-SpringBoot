import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/shared/item.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList;

  constructor(private service: ItemService,
    private router: Router,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.refreshList();
  }

  refreshList() {
    this.service.getProductList().then(res => this.productList = res);
  }

  openForEdit(id: number) {
     this.router.navigate(['/product/edit/' + id]);
  }

  onProductDelete(id: number) {
    if (confirm('Confirma exclusão desse registro?')) {
      this.service.deleteProduct(id).then(res => {
        this.refreshList();
        this.toastr.warning('Registro excluído com sucesso!', 'Restaurente App.');
      });
    }
  }

}
