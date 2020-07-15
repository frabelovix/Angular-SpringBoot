import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

import { OrdersComponent } from './orders/orders.component';
import { OrderComponent } from './orders/order/order.component';
import { OrderItemsComponent } from './orders/order-items/order-items.component';
import { OrderService } from './shared/order.service';
import { ProductHomeComponent } from './product/product-home/product-home.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { CustomerHomeComponent } from './customer/customer-home/customer-home.component';
import { CustomerCreateComponent } from './customer/customer-create/customer-create.component';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { CustomerEditComponent } from './customer/customer-edit/customer-edit.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { NavComponent } from './nav/nav.component';
import { MatSidenavModule, MatListModule, MatCardModule, MatButtonModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
  declarations: [
    AppComponent,
    OrdersComponent,
    OrderComponent,
    OrderItemsComponent,
    ProductHomeComponent,
    ProductCreateComponent,
    ProductListComponent,
    CustomerHomeComponent,
    CustomerCreateComponent,
    CustomerListComponent,
    CustomerEditComponent,
    ProductEditComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule
  ],
  entryComponents:[OrderItemsComponent],
  providers: [OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
