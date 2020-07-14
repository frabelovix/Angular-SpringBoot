import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrdersComponent } from './orders/orders.component';
import { OrderComponent } from './orders/order/order.component';
import { CustomerHomeComponent } from './customer/customer-home/customer-home.component';
import { ProductHomeComponent } from './product/product-home/product-home.component';
import { CustomerCreateComponent } from './customer/customer-create/customer-create.component';
import { CustomerEditComponent } from './customer/customer-edit/customer-edit.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';

const routes: Routes = [
  {path: '', redirectTo: 'orders', pathMatch: 'full'},
  {path: 'orders', component: OrdersComponent},
  {path: 'order', children: [
    {path: '', component: OrderComponent},
    {path: 'edit/:id', component: OrderComponent}
  ]},
  {path: 'customers', component: CustomerHomeComponent},
  {path: 'customer', children: [
    {path: '', component: CustomerCreateComponent},
    {path: 'edit/:id', component: CustomerEditComponent}
  ]},
  {path: 'products', component: ProductHomeComponent},
  {path: 'product', children: [
    {path: '', component: ProductCreateComponent},
    {path: 'edit/:id', component: ProductEditComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
