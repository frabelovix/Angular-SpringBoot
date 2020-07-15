import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/shared/item.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PageEvent } from '@angular/material';
import { Page } from 'src/app/shared/page.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList;

  // MatPaginator Inputs
  pageIndex = 0;
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  // MatPaginator Output
  pageEvent: PageEvent;

  page: Page;


  constructor(private service: ItemService,
    private router: Router,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.refreshList();
  }

  refreshList() {
    this.service.getProductListPaginated(this.pageIndex, this.pageSize)
      .then(res => {
        this.page = res,
        this.productList = this.page.content;
        this.length = this.page.totalElements;
      });
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

  getServerData(event?: PageEvent) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.refreshList();

  }

}
