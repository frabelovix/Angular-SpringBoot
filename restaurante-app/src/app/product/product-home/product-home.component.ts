import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ItemService } from 'src/app/shared/item.service';

@Component({
  selector: 'app-product-home',
  templateUrl: './product-home.component.html',
  styleUrls: ['./product-home.component.css']
})
export class ProductHomeComponent implements OnInit {


  constructor(private service: ItemService,
    private router: Router,
    private toastr: ToastrService) { }

  ngOnInit() {
    
  }

  

}
