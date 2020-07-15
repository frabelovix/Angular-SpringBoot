(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _orders_orders_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./orders/orders.component */ "./src/app/orders/orders.component.ts");
/* harmony import */ var _orders_order_order_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./orders/order/order.component */ "./src/app/orders/order/order.component.ts");
/* harmony import */ var _customer_customer_home_customer_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./customer/customer-home/customer-home.component */ "./src/app/customer/customer-home/customer-home.component.ts");
/* harmony import */ var _product_product_home_product_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product/product-home/product-home.component */ "./src/app/product/product-home/product-home.component.ts");
/* harmony import */ var _customer_customer_create_customer_create_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./customer/customer-create/customer-create.component */ "./src/app/customer/customer-create/customer-create.component.ts");
/* harmony import */ var _customer_customer_edit_customer_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./customer/customer-edit/customer-edit.component */ "./src/app/customer/customer-edit/customer-edit.component.ts");
/* harmony import */ var _product_product_create_product_create_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./product/product-create/product-create.component */ "./src/app/product/product-create/product-create.component.ts");
/* harmony import */ var _product_product_edit_product_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./product/product-edit/product-edit.component */ "./src/app/product/product-edit/product-edit.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    { path: '', redirectTo: 'orders', pathMatch: 'full' },
    { path: 'orders', component: _orders_orders_component__WEBPACK_IMPORTED_MODULE_2__["OrdersComponent"] },
    { path: 'order', children: [
            { path: '', component: _orders_order_order_component__WEBPACK_IMPORTED_MODULE_3__["OrderComponent"] },
            { path: 'edit/:id', component: _orders_order_order_component__WEBPACK_IMPORTED_MODULE_3__["OrderComponent"] }
        ] },
    { path: 'customers', component: _customer_customer_home_customer_home_component__WEBPACK_IMPORTED_MODULE_4__["CustomerHomeComponent"] },
    { path: 'customer', children: [
            { path: '', component: _customer_customer_create_customer_create_component__WEBPACK_IMPORTED_MODULE_6__["CustomerCreateComponent"] },
            { path: 'edit/:id', component: _customer_customer_edit_customer_edit_component__WEBPACK_IMPORTED_MODULE_7__["CustomerEditComponent"] }
        ] },
    { path: 'products', component: _product_product_home_product_home_component__WEBPACK_IMPORTED_MODULE_5__["ProductHomeComponent"] },
    { path: 'product', children: [
            { path: '', component: _product_product_create_product_create_component__WEBPACK_IMPORTED_MODULE_8__["ProductCreateComponent"] },
            { path: 'edit/:id', component: _product_product_edit_product_edit_component__WEBPACK_IMPORTED_MODULE_9__["ProductEditComponent"] }
        ] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbtron-fluid\">\n  <h3 class=\"display-4 text-center\"><img src=\"/assets/img/food.png\"> Restaurant App.</h3>\n  <!--\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-10 offset-md-1\">\n        <app-nav></app-nav>\n      </div>\n    </div>\n  </div>\n  -->\n  <app-nav></app-nav>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Angular';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _orders_orders_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./orders/orders.component */ "./src/app/orders/orders.component.ts");
/* harmony import */ var _orders_order_order_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./orders/order/order.component */ "./src/app/orders/order/order.component.ts");
/* harmony import */ var _orders_order_items_order_items_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./orders/order-items/order-items.component */ "./src/app/orders/order-items/order-items.component.ts");
/* harmony import */ var _shared_order_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/order.service */ "./src/app/shared/order.service.ts");
/* harmony import */ var _product_product_home_product_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./product/product-home/product-home.component */ "./src/app/product/product-home/product-home.component.ts");
/* harmony import */ var _product_product_create_product_create_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./product/product-create/product-create.component */ "./src/app/product/product-create/product-create.component.ts");
/* harmony import */ var _product_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./product/product-list/product-list.component */ "./src/app/product/product-list/product-list.component.ts");
/* harmony import */ var _customer_customer_home_customer_home_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./customer/customer-home/customer-home.component */ "./src/app/customer/customer-home/customer-home.component.ts");
/* harmony import */ var _customer_customer_create_customer_create_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./customer/customer-create/customer-create.component */ "./src/app/customer/customer-create/customer-create.component.ts");
/* harmony import */ var _customer_customer_list_customer_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./customer/customer-list/customer-list.component */ "./src/app/customer/customer-list/customer-list.component.ts");
/* harmony import */ var _customer_customer_edit_customer_edit_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./customer/customer-edit/customer-edit.component */ "./src/app/customer/customer-edit/customer-edit.component.ts");
/* harmony import */ var _product_product_edit_product_edit_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./product/product-edit/product-edit.component */ "./src/app/product/product-edit/product-edit.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _orders_orders_component__WEBPACK_IMPORTED_MODULE_9__["OrdersComponent"],
                _orders_order_order_component__WEBPACK_IMPORTED_MODULE_10__["OrderComponent"],
                _orders_order_items_order_items_component__WEBPACK_IMPORTED_MODULE_11__["OrderItemsComponent"],
                _product_product_home_product_home_component__WEBPACK_IMPORTED_MODULE_13__["ProductHomeComponent"],
                _product_product_create_product_create_component__WEBPACK_IMPORTED_MODULE_14__["ProductCreateComponent"],
                _product_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_15__["ProductListComponent"],
                _customer_customer_home_customer_home_component__WEBPACK_IMPORTED_MODULE_16__["CustomerHomeComponent"],
                _customer_customer_create_customer_create_component__WEBPACK_IMPORTED_MODULE_17__["CustomerCreateComponent"],
                _customer_customer_list_customer_list_component__WEBPACK_IMPORTED_MODULE_18__["CustomerListComponent"],
                _customer_customer_edit_customer_edit_component__WEBPACK_IMPORTED_MODULE_19__["CustomerEditComponent"],
                _product_product_edit_product_edit_component__WEBPACK_IMPORTED_MODULE_20__["ProductEditComponent"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_21__["NavComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrModule"].forRoot(),
                _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatInputModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_23__["MatPaginatorModule"]
            ],
            entryComponents: [_orders_order_items_order_items_component__WEBPACK_IMPORTED_MODULE_11__["OrderItemsComponent"]],
            providers: [_shared_order_service__WEBPACK_IMPORTED_MODULE_12__["OrderService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/customer/customer-create/customer-create.component.css":
/*!************************************************************************!*\
  !*** ./src/app/customer/customer-create/customer-create.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form {\n    display: flex;\n    flex-direction: column;\n    margin-top: 20px;\n}\n\nbutton {\n    margin-top: 20px;\n    margin-right: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tZXIvY3VzdG9tZXItY3JlYXRlL2N1c3RvbWVyLWNyZWF0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLHVCQUF1QjtJQUN2QixpQkFBaUI7Q0FDcEI7O0FBRUQ7SUFDSSxpQkFBaUI7SUFDakIsbUJBQW1CO0NBQ3RCIiwiZmlsZSI6InNyYy9hcHAvY3VzdG9tZXIvY3VzdG9tZXItY3JlYXRlL2N1c3RvbWVyLWNyZWF0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9ybSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbmJ1dHRvbiB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/customer/customer-create/customer-create.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/customer/customer-create/customer-create.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-card-title>Novo Cliente</mat-card-title>\n  <form>\n      <mat-form-field>\n          <input matInput placeholder=\"Nome\" [(ngModel)]=\"customer.name\" name=\"name\">\n      </mat-form-field>\n\n  </form>\n\n  <button mat-raised-button (click)=\"createCustomer()\" color=\"primary\">\n      Salvar\n  </button>\n\n  <button mat-raised-button (click)=\"cancel()\" color=\"warnning\">\n      Cancelar\n  </button>\n</mat-card>"

/***/ }),

/***/ "./src/app/customer/customer-create/customer-create.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/customer/customer-create/customer-create.component.ts ***!
  \***********************************************************************/
/*! exports provided: CustomerCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerCreateComponent", function() { return CustomerCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_customer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/customer.service */ "./src/app/shared/customer.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CustomerCreateComponent = /** @class */ (function () {
    function CustomerCreateComponent(service, router) {
        this.service = service;
        this.router = router;
        this.customer = {
            name: ''
        };
    }
    CustomerCreateComponent.prototype.ngOnInit = function () {
    };
    CustomerCreateComponent.prototype.createCustomer = function () {
        var _this = this;
        this.service.saveOrUpdateCustomer(this.customer).subscribe(function () {
            //this.service.showMessage('Criar produto');
            _this.router.navigate(['/customers']);
        });
    };
    CustomerCreateComponent.prototype.cancel = function () {
        this.router.navigate(['/customers']);
    };
    CustomerCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customer-create',
            template: __webpack_require__(/*! ./customer-create.component.html */ "./src/app/customer/customer-create/customer-create.component.html"),
            styles: [__webpack_require__(/*! ./customer-create.component.css */ "./src/app/customer/customer-create/customer-create.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_shared_customer_service__WEBPACK_IMPORTED_MODULE_1__["CustomerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CustomerCreateComponent);
    return CustomerCreateComponent;
}());



/***/ }),

/***/ "./src/app/customer/customer-edit/customer-edit.component.css":
/*!********************************************************************!*\
  !*** ./src/app/customer/customer-edit/customer-edit.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form {\n    display: flex;\n    flex-direction: column;\n    margin-top: 20px;\n}\n\nbutton {\n    margin-top: 20px;\n    margin-right: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tZXIvY3VzdG9tZXItZWRpdC9jdXN0b21lci1lZGl0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtDQUNwQjs7QUFFRDtJQUNJLGlCQUFpQjtJQUNqQixtQkFBbUI7Q0FDdEIiLCJmaWxlIjoic3JjL2FwcC9jdXN0b21lci9jdXN0b21lci1lZGl0L2N1c3RvbWVyLWVkaXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImZvcm0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG5idXR0b24ge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/customer/customer-edit/customer-edit.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/customer/customer-edit/customer-edit.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-card-title>Editar Cliente</mat-card-title>\n  <form>\n      <mat-form-field>\n          <input matInput placeholder=\"Nome\" [(ngModel)]=\"customer.name\" name=\"name\">\n      </mat-form-field>\n\n  </form>\n\n  <button mat-raised-button (click)=\"updateCustomer()\" color=\"primary\">\n      Salvar\n  </button>\n\n  <button mat-raised-button (click)=\"cancel()\" color=\"warnning\">\n      Cancelar\n  </button>\n</mat-card>"

/***/ }),

/***/ "./src/app/customer/customer-edit/customer-edit.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/customer/customer-edit/customer-edit.component.ts ***!
  \*******************************************************************/
/*! exports provided: CustomerEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerEditComponent", function() { return CustomerEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_customer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/customer.service */ "./src/app/shared/customer.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_customer_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/customer.model */ "./src/app/shared/customer.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CustomerEditComponent = /** @class */ (function () {
    function CustomerEditComponent(service, router, route) {
        this.service = service;
        this.router = router;
        this.route = route;
        this.customer = new src_app_shared_customer_model__WEBPACK_IMPORTED_MODULE_3__["Customer"]();
    }
    CustomerEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.paramMap.get('id');
        this.service.getCustomerByID(parseInt(id)).then(function (res) {
            _this.customer = res;
        });
    };
    CustomerEditComponent.prototype.updateCustomer = function () {
        var _this = this;
        this.service.updateCustomer(this.customer).subscribe(function () {
            //this.service.showMessage('Criar produto');
            _this.router.navigate(['/customers']);
        });
    };
    CustomerEditComponent.prototype.cancel = function () {
        this.router.navigate(['/customers']);
    };
    CustomerEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customer-edit',
            template: __webpack_require__(/*! ./customer-edit.component.html */ "./src/app/customer/customer-edit/customer-edit.component.html"),
            styles: [__webpack_require__(/*! ./customer-edit.component.css */ "./src/app/customer/customer-edit/customer-edit.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_shared_customer_service__WEBPACK_IMPORTED_MODULE_1__["CustomerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], CustomerEditComponent);
    return CustomerEditComponent;
}());



/***/ }),

/***/ "./src/app/customer/customer-home/customer-home.component.css":
/*!********************************************************************!*\
  !*** ./src/app/customer/customer-home/customer-home.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVyL2N1c3RvbWVyLWhvbWUvY3VzdG9tZXItaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/customer/customer-home/customer-home.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/customer/customer-home/customer-home.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-customer-list></app-customer-list>"

/***/ }),

/***/ "./src/app/customer/customer-home/customer-home.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/customer/customer-home/customer-home.component.ts ***!
  \*******************************************************************/
/*! exports provided: CustomerHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerHomeComponent", function() { return CustomerHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CustomerHomeComponent = /** @class */ (function () {
    function CustomerHomeComponent() {
    }
    CustomerHomeComponent.prototype.ngOnInit = function () {
    };
    CustomerHomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customer-home',
            template: __webpack_require__(/*! ./customer-home.component.html */ "./src/app/customer/customer-home/customer-home.component.html"),
            styles: [__webpack_require__(/*! ./customer-home.component.css */ "./src/app/customer/customer-home/customer-home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CustomerHomeComponent);
    return CustomerHomeComponent;
}());



/***/ }),

/***/ "./src/app/customer/customer-list/customer-list.component.css":
/*!********************************************************************!*\
  !*** ./src/app/customer/customer-list/customer-list.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVyL2N1c3RvbWVyLWxpc3QvY3VzdG9tZXItbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/customer/customer-list/customer-list.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/customer/customer-list/customer-list.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-hover\">\n  <thead class=\"thead-light\">\n    <th>Id</th>\n    <th>Nome</th>\n    <th>\n      <a class=\"btn btn-outline-success\" routerLink=\"/customer\"><i class=\"fa fa-plus-square\"></i> Novo Cliente</a>\n    </th>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let item of customerList\">\n      <td (click)=\"openForEdit(item.customerId)\">{{item.customerId}}</td>\n      <td (click)=\"openForEdit(item.customerId)\">{{item.name}}</td>\n      <td>\n          <a class=\"btn text-danger\" (click)=\"onCustomerDelete(item.customerId)\"><i class=\"fa fa-trash fa-lg\"></i></a>\n      </td>\n    </tr>\n  </tbody>\n</table>\n\n<mat-paginator [length]=\"length\"\n               [pageSize]=\"pageSize\"\n               [pageSizeOptions]=\"pageSizeOptions\"\n               (page)=\"pageEvent = getServerData($event)\">\n</mat-paginator>"

/***/ }),

/***/ "./src/app/customer/customer-list/customer-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/customer/customer-list/customer-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: CustomerListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerListComponent", function() { return CustomerListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_customer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/customer.service */ "./src/app/shared/customer.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CustomerListComponent = /** @class */ (function () {
    function CustomerListComponent(service, router, toastr) {
        this.service = service;
        this.router = router;
        this.toastr = toastr;
        // MatPaginator Inputs
        this.pageIndex = 0;
        this.length = 100;
        this.pageSize = 10;
        this.pageSizeOptions = [5, 10, 25, 100];
    }
    CustomerListComponent.prototype.ngOnInit = function () {
        this.refreshList();
    };
    CustomerListComponent.prototype.refreshList = function () {
        var _this = this;
        this.service.getCustomerListPaginated(this.pageIndex, this.pageSize).then(function (res) {
            _this.page = res,
                _this.customerList = _this.page.content;
            _this.length = _this.page.totalElements;
        });
    };
    CustomerListComponent.prototype.openForEdit = function (id) {
        this.router.navigate(['/customer/edit/' + id]);
    };
    CustomerListComponent.prototype.onCustomerDelete = function (id) {
        var _this = this;
        if (confirm('Confirma exclusão desse registro?')) {
            this.service.deleteCustomer(id).then(function (res) {
                _this.refreshList();
                _this.toastr.warning('Registro excluído com sucesso!', 'Restaurente App.');
            });
        }
    };
    CustomerListComponent.prototype.getServerData = function (event) {
        this.pageIndex = event.pageIndex;
        this.pageSize = event.pageSize;
        this.refreshList();
    };
    CustomerListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customer-list',
            template: __webpack_require__(/*! ./customer-list.component.html */ "./src/app/customer/customer-list/customer-list.component.html"),
            styles: [__webpack_require__(/*! ./customer-list.component.css */ "./src/app/customer/customer-list/customer-list.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_shared_customer_service__WEBPACK_IMPORTED_MODULE_1__["CustomerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], CustomerListComponent);
    return CustomerListComponent;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.css":
/*!***************************************!*\
  !*** ./src/app/nav/nav.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenav {\n    background-color: #3f5185;\n    width: 200px;\n}\n\n.sidenav a {\n    color: #FFF;\n}\n\n.sidenav i {\n    padding-right: 10px;\n}\n\n.content {\n    padding: 16px;\n    background-color: #FFF;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2L25hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMEJBQTBCO0lBQzFCLGFBQWE7Q0FDaEI7O0FBRUQ7SUFDSSxZQUFZO0NBQ2Y7O0FBRUQ7SUFDSSxvQkFBb0I7Q0FDdkI7O0FBRUQ7SUFDSSxjQUFjO0lBQ2QsdUJBQXVCO0NBQzFCIiwiZmlsZSI6InNyYy9hcHAvbmF2L25hdi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGVuYXYge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzZjUxODU7XG4gICAgd2lkdGg6IDIwMHB4O1xufVxuXG4uc2lkZW5hdiBhIHtcbiAgICBjb2xvcjogI0ZGRjtcbn1cblxuLnNpZGVuYXYgaSB7XG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cblxuLmNvbnRlbnQge1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/nav/nav.component.html":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"container\">\n  <mat-sidenav class=\"sidenav\" mode=\"side\" opened fixedInViewport=\"true\" fixedTopGap=\"64\">\n      <mat-nav-list class=\"nav-list\">\n          <a mat-list-item routerLink=\"/orders\">\n            <i class=\"fa fa-home fa-lg\">  Home</i>\n          </a>\n\n          <a mat-list-item routerLink=\"/customers\">\n            <i class=\"fa fa-users fa-lg\">  Clientes</i>\n          </a>\n\n          <a mat-list-item routerLink=\"/products\">\n            <i class=\"fa fa-gift fa-lg\">  Produtos</i>\n          </a>\n\n          <a mat-list-item routerLink=\"/order\">\n            <i class=\"fa fa-cart-plus fa-lg\">  Pedido</i>\n          </a>\n\n\n      </mat-nav-list>\n\n  </mat-sidenav>\n  <mat-sidenav-content class=\"content\">\n      <router-outlet></router-outlet>\n\n  </mat-sidenav-content>\n</mat-sidenav-container>"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavComponent = /** @class */ (function () {
    function NavComponent() {
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/nav/nav.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/orders/order-items/order-items.component.html":
/*!***************************************************************!*\
  !*** ./src/app/orders/order-items/order-items.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4 class=\"dispaly-4\">Order Food Item</h4>\n<hr>\n<form #form=\"ngForm\" autocomplete=\"off\" (submit)=\"onSubmit(form)\">\n    <input type=\"hidden\"  name=\"orderItemId\" #orderItemId=\"ngModel\" [(ngModel)]=\"formData.orderItemId\">\n    <input type=\"hidden\"  name=\"orderId\" #orderId=\"ngModel\" [(ngModel)]=\"formData.orderId\">\n  <input type=\"hidden\"  name=\"itemName\" #itemName=\"ngModel\" [(ngModel)]=\"formData.itemName\">\n  <div class=\"form-group\">\n    <label>Food Item</label>\n    <select name=\"itemId\" #itemId=\"ngModel\" [(ngModel)]=\"formData.itemId\" class=\"form-control\" (change)=\"updatePrice($event.target)\"\n    [class.is-invalid]=\"!isValid && formData.itemId==0\">\n      <option value=\"0\">-Select-</option>\n      <option *ngFor=\"let item of itemList\" value=\"{{item.itemId}}\">{{item.name}}</option>\n    </select>\n  </div>\n  <div class=\"form-row\">\n    <div class=\"form-group col-md-6\">\n      <label>Price</label>\n      <div class=\"input-group\">\n        <div class=\"input-group-prepend\">\n          <div class=\"input-group-text\">$</div>\n        </div>\n        <input name=\"price\" #price=\"ngModel\" [(ngModel)]=\"formData.price\" class=\"form-control\" readonly>\n      </div>\n    </div>\n    <div class=\"form-group col-md-6\">\n      <label>Quantity</label>\n      <input name=\"quantity\" #quantityv=\"ngModel\" [(ngModel)]=\"formData.quantity\" class=\"form-control\"\n      (keyup)=\"updateTotal()\" [class.is-invalid]=\"!isValid && formData.quantity==0\">\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label>Total</label>\n    <div class=\"input-group\">\n      <div class=\"input-group-prepend\">\n        <div class=\"input-group-text\">$</div>\n      </div>\n      <input name=\"total\" #total=\"ngModel\" [(ngModel)]=\"formData.total\" class=\"form-control\" readonly>\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <button type=\"submit\" class=\"btn btn-dark\"><i class=\"fa fa-database\"></i> Submit</button>\n    <button type=\"button\" class=\"btn btn-outline-dark ml-1\" [mat-dialog-close]><i class=\"fa fa-close\"></i> Close</button>\n  </div>\n</form>"

/***/ }),

/***/ "./src/app/orders/order-items/order-items.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/orders/order-items/order-items.component.ts ***!
  \*************************************************************/
/*! exports provided: OrderItemsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderItemsComponent", function() { return OrderItemsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_shared_item_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/item.service */ "./src/app/shared/item.service.ts");
/* harmony import */ var src_app_shared_order_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/order.service */ "./src/app/shared/order.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var OrderItemsComponent = /** @class */ (function () {
    function OrderItemsComponent(data, dialogRef, itemService, orderSevice) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.itemService = itemService;
        this.orderSevice = orderSevice;
        this.isValid = true;
    }
    OrderItemsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.itemService.getProductList().then(function (res) { return _this.itemList = res; });
        if (this.data.orderItemIndex == null)
            this.formData = {
                orderItemId: null,
                orderId: this.data.orderId,
                itemId: 0,
                itemName: '',
                price: 0,
                quantity: 0,
                total: 0
            };
        else
            this.formData = Object.assign({}, this.orderSevice.orderItems[this.data.orderItemIndex]);
    };
    OrderItemsComponent.prototype.updatePrice = function (ctrl) {
        if (ctrl.selectedIndex == 0) {
            this.formData.price = 0;
            this.formData.itemName = '';
        }
        else {
            this.formData.price = this.itemList[ctrl.selectedIndex - 1].price;
            this.formData.itemName = this.itemList[ctrl.selectedIndex - 1].name;
        }
        this.updateTotal();
    };
    OrderItemsComponent.prototype.updateTotal = function () {
        this.formData.total = parseFloat((this.formData.quantity * this.formData.price).toFixed(2));
    };
    OrderItemsComponent.prototype.onSubmit = function (form) {
        if (this.validateForm(form.value)) {
            if (this.data.orderItemIndex == null)
                this.orderSevice.orderItems.push(form.value);
            else
                this.orderSevice.orderItems[this.data.orderItemIndex] = form.value;
            this.dialogRef.close();
        }
    };
    OrderItemsComponent.prototype.validateForm = function (formData) {
        this.isValid = true;
        if (formData.itemId == 0)
            this.isValid = false;
        else if (formData.quantity == 0)
            this.isValid = false;
        return this.isValid;
    };
    OrderItemsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-order-items',
            template: __webpack_require__(/*! ./order-items.component.html */ "./src/app/orders/order-items/order-items.component.html"),
            styles: []
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object, _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"],
            src_app_shared_item_service__WEBPACK_IMPORTED_MODULE_2__["ItemService"],
            src_app_shared_order_service__WEBPACK_IMPORTED_MODULE_3__["OrderService"]])
    ], OrderItemsComponent);
    return OrderItemsComponent;
}());



/***/ }),

/***/ "./src/app/orders/order/order.component.html":
/*!***************************************************!*\
  !*** ./src/app/orders/order/order.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #form=\"ngForm\" autocomplete=\"off\" *ngIf=\"service.formData\" (submit)=\"onSubmit(form)\">\n  <input type=\"hidden\" name=\"orderId\" #orderId=\"ngModel\" [(ngModel)]=\"service.formData.orderId\">\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <div class=\"form-group\">\n        <label>Order No.</label>\n        <div class=\"input-group\">\n          <div class=\"input-group-prepend\">\n            <div class=\"input-group-text\">#</div>\n          </div>\n          <input name=\"orderNo\" #orderNo=\"ngModel\" [(ngModel)]=\"service.formData.orderNo\" class=\"form-control\" readonly>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label>Customer</label>\n        <select name=\"customerid\" #customerid=\"ngModel\" [(ngModel)]=\"service.formData.customerid\" class=\"form-control\"\n          [class.is-invalid]=\"!isValid && service.formData.customerid==0\">\n          <option value=\"0\">-Select-</option>\n          <option *ngFor=\"let item of customerList\" value=\"{{item.customerId}}\">{{item.name}}</option>\n        </select>\n      </div>\n    </div>\n    <div class=\"col-md-6\">\n      <div class=\"form-group\">\n        <label>Payment Method</label>\n        <select name=\"pMethod\" #pMethod=\"ngModel\" [(ngModel)]=\"service.formData.pMethod\" class=\"form-control\">\n          <option value=\"\">-Select-</option>\n          <option value=\"Cash\">Cash</option>\n          <option value=\"Card\">Card</option>\n        </select>\n      </div>\n      <div class=\"form-group\">\n        <label>Grand Total</label>\n\n        <div class=\"input-group\">\n          <div class=\"input-group-prepend\">\n            <div class=\"input-group-text\">$</div>\n          </div>\n          <input name=\"gTotal\" #gTotal=\"ngModel\" [(ngModel)]=\"service.formData.gTotal\" class=\"form-control\" readonly>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- order items table-->\n  <table class=\"table table-borderless\">\n    <thead class=\"thead-light\">\n      <th>Food</th>\n      <th>Price</th>\n      <th>Quantity</th>\n      <th>Total</th>\n      <th>\n        <a class=\"btn btn-sm btn-success text-white\" (click)=\"AddOrEditOrderItem(null,service.formData.orderId)\"><i\n            class=\"fa fa-plus\"></i> Add Item</a>\n      </th>\n    </thead>\n    <tbody>\n      <tr *ngIf=\"service.orderItems.length==0\" [class.text-danger]=\"!isValid && service.orderItems.length==0\">\n        <td class=\"font-italic text-center\" colspan=\"5\">\n          No food item selected for this order.\n        </td>\n      </tr>\n\n      <tr *ngFor=\"let item of service.orderItems;let i=index;\">\n        <td>{{item.itemName}}</td>\n        <td>{{item.price | currency: 'BRL'}}</td>\n        <td>{{item.quantity}}</td>\n        <td>{{item.total | currency: 'BRL'}}</td>\n        <td>\n          <a class=\"btn btn-sm btn-info text-white\" (click)=\"AddOrEditOrderItem(i,service.formData.orderId)\"><i\n              class=\"fa fa-pencil\"></i></a>\n          <a class=\"btn btn-sm btn-danger text-white ml-1\" (click)=\"onDeleteOrderItem(item.orderItemId,i)\"><i\n              class=\"fa fa-trash\"></i></a>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n  <div class=\"form-group\">\n    <button type=\"submit\" class=\"btn btn-dark\"><i class=\"fa fa-database\"></i> Gravar</button>\n\n      <a *ngIf=\"service.formData.orderId != null\"  class=\"btn btn-outline-dark ml-1\" (click)=\"onExportar(service.formData.orderId)\"><i\n          class=\"fa fa-file-pdf-o\"></i> Exportar</a>\n\n    <a class=\"btn btn-outline-dark ml-1\" routerLink=\"/orders\"><i class=\"fa fa-table\"></i> Listar Pedidos</a>\n\n  </div>\n</form>"

/***/ }),

/***/ "./src/app/orders/order/order.component.ts":
/*!*************************************************!*\
  !*** ./src/app/orders/order/order.component.ts ***!
  \*************************************************/
/*! exports provided: OrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderComponent", function() { return OrderComponent; });
/* harmony import */ var _shared_customer_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../shared/customer.service */ "./src/app/shared/customer.service.ts");
/* harmony import */ var _shared_order_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../shared/order.service */ "./src/app/shared/order.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _order_items_order_items_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../order-items/order-items.component */ "./src/app/orders/order-items/order-items.component.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_printer_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/printer.service */ "./src/app/shared/printer.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var OrderComponent = /** @class */ (function () {
    function OrderComponent(service, dialog, customerService, toastr, router, currentRoute, printerService) {
        this.service = service;
        this.dialog = dialog;
        this.customerService = customerService;
        this.toastr = toastr;
        this.router = router;
        this.currentRoute = currentRoute;
        this.printerService = printerService;
        this.isValid = true;
    }
    OrderComponent.prototype.ngOnInit = function () {
        var _this = this;
        var orderID = this.currentRoute.snapshot.paramMap.get('id');
        if (orderID == null) {
            this.resetForm();
        }
        else {
            this.service.getOrderByID(parseInt(orderID)).then(function (res) {
                _this.orderDto = res;
                _this.service.formData = _this.orderDto;
                _this.service.formData.deletedOrderItemIDs = '';
                _this.service.orderItems = _this.orderDto.orderItems;
            });
        }
        this.customerService.getCustomerList().then(function (res) {
            _this.customerList = res;
        });
    };
    OrderComponent.prototype.resetForm = function (form) {
        if (form = null) {
            form.resetForm();
        }
        this.service.formData = {
            orderId: null,
            orderNo: Math.floor(100000 + Math.random() * 900000).toString(),
            customerid: 0,
            pMethod: '',
            gTotal: 0,
            deletedOrderItemIDs: ''
        };
        this.service.orderItems = [];
    };
    OrderComponent.prototype.AddOrEditOrderItem = function (orderItemIndex, OrderID) {
        var _this = this;
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
        dialogConfig.autoFocus = true;
        dialogConfig.disableClose = true;
        dialogConfig.width = '50%';
        dialogConfig.data = { orderItemIndex: orderItemIndex, OrderID: OrderID };
        this.dialog.open(_order_items_order_items_component__WEBPACK_IMPORTED_MODULE_4__["OrderItemsComponent"], dialogConfig).afterClosed().subscribe(function (res) {
            _this.updateGrandTotal();
        });
    };
    OrderComponent.prototype.onDeleteOrderItem = function (orderItemID, i) {
        var _this = this;
        if (orderItemID != null) {
            /*exclusão baseada num array montado no servidor após submit
            this.service.formData.deletedOrderItemIDs += orderItemID + ",";
            */
            // exclusão direta
            if (confirm('Confirma exclusão do item?')) {
                this.service.deleteOrderItem(orderItemID).then(function (res) {
                    _this.toastr.warning('Item excluído com sucesso!', 'Restaurente App.');
                });
            }
            this.service.orderItems.splice(i, 1);
        }
        this.updateGrandTotal();
    };
    OrderComponent.prototype.updateGrandTotal = function () {
        this.service.formData.gTotal = this.service.orderItems.reduce(function (prev, curr) {
            return prev + curr.total;
        }, 0);
        this.service.formData.gTotal = parseFloat(this.service.formData.gTotal.toFixed(2));
    };
    OrderComponent.prototype.validateForm = function () {
        this.isValid = true;
        if (this.service.formData.customerid === 0) {
            this.isValid = false;
        }
        else if (this.service.orderItems.length === 0) {
            this.isValid = false;
        }
        return this.isValid;
    };
    OrderComponent.prototype.onSubmit = function (form) {
        var _this = this;
        if (this.validateForm()) {
            this.service.saveOrUpdateOrder().subscribe(function (res) {
                _this.resetForm();
                _this.toastr.success('Registro gravad com Sucesso!', 'Restaurente App.');
                _this.router.navigate(['/orders']);
            });
        }
    };
    OrderComponent.prototype.onExportar = function (OrderID) {
        this.printerService.getOrderExport('order-' + OrderID, '/order/relatorio/' + OrderID);
    };
    OrderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-order',
            template: __webpack_require__(/*! ./order.component.html */ "./src/app/orders/order/order.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [_shared_order_service__WEBPACK_IMPORTED_MODULE_1__["OrderService"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _shared_customer_service__WEBPACK_IMPORTED_MODULE_0__["CustomerService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            src_app_shared_printer_service__WEBPACK_IMPORTED_MODULE_7__["PrinterService"]])
    ], OrderComponent);
    return OrderComponent;
}());



/***/ }),

/***/ "./src/app/orders/orders.component.html":
/*!**********************************************!*\
  !*** ./src/app/orders/orders.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-hover\">\n  <thead class=\"thead-light\">\n    <th>#Order No.</th>\n    <th>Customer</th>\n    <th>P. Method</th>\n    <th>G. Total</th>\n    <th>\n      <a class=\"btn btn-outline-success\" routerLink=\"/order\"><i class=\"fa fa-plus-square\"></i> Novo Pedido</a>\n    </th>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let item of orderList\">\n      <th (click)=\"openForEdit(item.orderId)\">{{item.orderNo}}</th>\n      <td (click)=\"openForEdit(item.orderId)\">{{item.customer.name}}</td>\n      <td (click)=\"openForEdit(item.orderId)\">{{item.pMethod}}</td>\n      <td (click)=\"openForEdit(item.orderId)\">{{item.gTotal | currency: 'BRL'}}</td>\n      <td>\n          <a class=\"btn text-danger\" (click)=\"onOrderDelete(item.orderId)\"><i class=\"fa fa-trash fa-lg\"></i></a>\n      </td>\n    </tr>\n  </tbody>\n</table>\n\n<mat-paginator [length]=\"length\"\n               [pageSize]=\"pageSize\"\n               [pageSizeOptions]=\"pageSizeOptions\"\n               (page)=\"pageEvent = getServerData($event)\">\n</mat-paginator>\n"

/***/ }),

/***/ "./src/app/orders/orders.component.ts":
/*!********************************************!*\
  !*** ./src/app/orders/orders.component.ts ***!
  \********************************************/
/*! exports provided: OrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersComponent", function() { return OrdersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_order_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/order.service */ "./src/app/shared/order.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OrdersComponent = /** @class */ (function () {
    function OrdersComponent(service, router, toastr) {
        this.service = service;
        this.router = router;
        this.toastr = toastr;
        // MatPaginator Inputs
        this.pageIndex = 0;
        this.length = 100;
        this.pageSize = 10;
        this.pageSizeOptions = [5, 10, 25, 100];
    }
    OrdersComponent.prototype.ngOnInit = function () {
        this.refreshList();
    };
    OrdersComponent.prototype.refreshList = function () {
        var _this = this;
        this.service.getOrderListPaginated(this.pageIndex, this.pageSize)
            .then(function (res) {
            _this.page = res,
                _this.orderList = _this.page.content;
            _this.length = _this.page.totalElements;
        });
    };
    OrdersComponent.prototype.openForEdit = function (orderID) {
        this.router.navigate(['/order/edit/' + orderID]);
    };
    OrdersComponent.prototype.onOrderDelete = function (id) {
        var _this = this;
        if (confirm('Confirma exclusão desse registro?')) {
            this.service.deleteOrder(id).then(function (res) {
                _this.refreshList();
                _this.toastr.warning('Registro excluído com sucesso!', 'Restaurente App.');
            });
        }
    };
    OrdersComponent.prototype.getServerData = function (event) {
        this.pageIndex = event.pageIndex;
        this.pageSize = event.pageSize;
        this.refreshList();
    };
    OrdersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-orders',
            template: __webpack_require__(/*! ./orders.component.html */ "./src/app/orders/orders.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [_shared_order_service__WEBPACK_IMPORTED_MODULE_1__["OrderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], OrdersComponent);
    return OrdersComponent;
}());



/***/ }),

/***/ "./src/app/product/product-create/product-create.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/product/product-create/product-create.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form {\n    display: flex;\n    flex-direction: column;\n    margin-top: 20px;\n}\n\nbutton {\n    margin-top: 20px;\n    margin-right: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdC9wcm9kdWN0LWNyZWF0ZS9wcm9kdWN0LWNyZWF0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLHVCQUF1QjtJQUN2QixpQkFBaUI7Q0FDcEI7O0FBRUQ7SUFDSSxpQkFBaUI7SUFDakIsbUJBQW1CO0NBQ3RCIiwiZmlsZSI6InNyYy9hcHAvcHJvZHVjdC9wcm9kdWN0LWNyZWF0ZS9wcm9kdWN0LWNyZWF0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9ybSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbmJ1dHRvbiB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/product/product-create/product-create.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/product/product-create/product-create.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-card-title>Novo Produto</mat-card-title>\n  <form>\n      <mat-form-field>\n          <input matInput placeholder=\"Nome\" [(ngModel)]=\"product.name\" name=\"name\">\n      </mat-form-field>\n\n      <mat-form-field>\n          <input matInput placeholder=\"Preço (R$)\" [(ngModel)]=\"product.price\" name=\"price\">\n      </mat-form-field>\n\n\n  </form>\n\n  <button mat-raised-button (click)=\"createProduct()\" color=\"primary\">\n      Salvar\n  </button>\n\n  <button mat-raised-button (click)=\"cancel()\" color=\"warnning\">\n      Cancelar\n  </button>\n</mat-card>"

/***/ }),

/***/ "./src/app/product/product-create/product-create.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/product/product-create/product-create.component.ts ***!
  \********************************************************************/
/*! exports provided: ProductCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCreateComponent", function() { return ProductCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_item_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/item.service */ "./src/app/shared/item.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductCreateComponent = /** @class */ (function () {
    function ProductCreateComponent(service, router) {
        this.service = service;
        this.router = router;
        this.product = {
            name: '', price: null
        };
    }
    ProductCreateComponent.prototype.ngOnInit = function () {
    };
    ProductCreateComponent.prototype.createProduct = function () {
        var _this = this;
        this.service.saveOrUpdateProduct(this.product).subscribe(function () {
            //this.service.showMessage('Criar produto');
            _this.router.navigate(['/products']);
        });
    };
    ProductCreateComponent.prototype.cancel = function () {
        this.router.navigate(['/products']);
    };
    ProductCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-create',
            template: __webpack_require__(/*! ./product-create.component.html */ "./src/app/product/product-create/product-create.component.html"),
            styles: [__webpack_require__(/*! ./product-create.component.css */ "./src/app/product/product-create/product-create.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_shared_item_service__WEBPACK_IMPORTED_MODULE_1__["ItemService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ProductCreateComponent);
    return ProductCreateComponent;
}());



/***/ }),

/***/ "./src/app/product/product-edit/product-edit.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/product/product-edit/product-edit.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form {\n    display: flex;\n    flex-direction: column;\n    margin-top: 20px;\n}\n\nbutton {\n    margin-top: 20px;\n    margin-right: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdC9wcm9kdWN0LWVkaXQvcHJvZHVjdC1lZGl0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtDQUNwQjs7QUFFRDtJQUNJLGlCQUFpQjtJQUNqQixtQkFBbUI7Q0FDdEIiLCJmaWxlIjoic3JjL2FwcC9wcm9kdWN0L3Byb2R1Y3QtZWRpdC9wcm9kdWN0LWVkaXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImZvcm0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG5idXR0b24ge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/product/product-edit/product-edit.component.html":
/*!******************************************************************!*\
  !*** ./src/app/product/product-edit/product-edit.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-card-title>Editar Produto</mat-card-title>\n  <form>\n      <mat-form-field>\n          <input matInput placeholder=\"Nome\" [(ngModel)]=\"product.name\" name=\"name\">\n      </mat-form-field>\n\n      <mat-form-field>\n          <input matInput placeholder=\"Preço (R$)\" [(ngModel)]=\"product.price\" name=\"price\">\n      </mat-form-field>\n\n\n  </form>\n\n  <button mat-raised-button (click)=\"updateProduct()\" color=\"primary\">\n      Salvar\n  </button>\n\n  <button mat-raised-button (click)=\"cancel()\" color=\"warnning\">\n      Cancelar\n  </button>\n</mat-card>"

/***/ }),

/***/ "./src/app/product/product-edit/product-edit.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/product/product-edit/product-edit.component.ts ***!
  \****************************************************************/
/*! exports provided: ProductEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductEditComponent", function() { return ProductEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_item_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/item.service */ "./src/app/shared/item.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_item_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/item.model */ "./src/app/shared/item.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductEditComponent = /** @class */ (function () {
    function ProductEditComponent(service, router, route) {
        this.service = service;
        this.router = router;
        this.route = route;
        this.product = new src_app_shared_item_model__WEBPACK_IMPORTED_MODULE_3__["Item"]();
    }
    ProductEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.paramMap.get('id');
        this.service.getProductByID(parseInt(id)).then(function (res) {
            _this.product = res;
        });
    };
    ProductEditComponent.prototype.updateProduct = function () {
        var _this = this;
        this.service.saveOrUpdateProduct(this.product).subscribe(function () {
            //this.service.showMessage('Criar produto');
            _this.router.navigate(['/products']);
        });
    };
    ProductEditComponent.prototype.cancel = function () {
        this.router.navigate(['/products']);
    };
    ProductEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-edit',
            template: __webpack_require__(/*! ./product-edit.component.html */ "./src/app/product/product-edit/product-edit.component.html"),
            styles: [__webpack_require__(/*! ./product-edit.component.css */ "./src/app/product/product-edit/product-edit.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_shared_item_service__WEBPACK_IMPORTED_MODULE_1__["ItemService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ProductEditComponent);
    return ProductEditComponent;
}());



/***/ }),

/***/ "./src/app/product/product-home/product-home.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/product/product-home/product-home.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QvcHJvZHVjdC1ob21lL3Byb2R1Y3QtaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/product/product-home/product-home.component.html":
/*!******************************************************************!*\
  !*** ./src/app/product/product-home/product-home.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-product-list></app-product-list>"

/***/ }),

/***/ "./src/app/product/product-home/product-home.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/product/product-home/product-home.component.ts ***!
  \****************************************************************/
/*! exports provided: ProductHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductHomeComponent", function() { return ProductHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_shared_item_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/item.service */ "./src/app/shared/item.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductHomeComponent = /** @class */ (function () {
    function ProductHomeComponent(service, router, toastr) {
        this.service = service;
        this.router = router;
        this.toastr = toastr;
    }
    ProductHomeComponent.prototype.ngOnInit = function () {
    };
    ProductHomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-home',
            template: __webpack_require__(/*! ./product-home.component.html */ "./src/app/product/product-home/product-home.component.html"),
            styles: [__webpack_require__(/*! ./product-home.component.css */ "./src/app/product/product-home/product-home.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_shared_item_service__WEBPACK_IMPORTED_MODULE_3__["ItemService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
    ], ProductHomeComponent);
    return ProductHomeComponent;
}());



/***/ }),

/***/ "./src/app/product/product-list/product-list.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/product/product-list/product-list.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QvcHJvZHVjdC1saXN0L3Byb2R1Y3QtbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/product/product-list/product-list.component.html":
/*!******************************************************************!*\
  !*** ./src/app/product/product-list/product-list.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-hover\">\n  <thead class=\"thead-light\">\n    <th>Produto</th>\n    <th>Preço</th>\n    <th>\n      <a class=\"btn btn-outline-success\" routerLink=\"/product\"><i class=\"fa fa-plus-square\"></i> Novo Produto</a>\n    </th>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let item of productList\">\n      <td (click)=\"openForEdit(item.itemId)\">{{item.name}}</td>\n      <td (click)=\"openForEdit(item.itemId)\">{{item.price | currency: 'BRL'}}</td>\n      <td>\n          <a class=\"btn text-danger\" (click)=\"onProductDelete(item.itemId)\"><i class=\"fa fa-trash fa-lg\"></i></a>\n      </td>\n    </tr>\n  </tbody>\n</table>\n\n<mat-paginator [length]=\"length\"\n               [pageSize]=\"pageSize\"\n               [pageSizeOptions]=\"pageSizeOptions\"\n               (page)=\"pageEvent = getServerData($event)\">\n</mat-paginator>"

/***/ }),

/***/ "./src/app/product/product-list/product-list.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/product/product-list/product-list.component.ts ***!
  \****************************************************************/
/*! exports provided: ProductListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListComponent", function() { return ProductListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_item_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/item.service */ "./src/app/shared/item.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductListComponent = /** @class */ (function () {
    function ProductListComponent(service, router, toastr) {
        this.service = service;
        this.router = router;
        this.toastr = toastr;
        // MatPaginator Inputs
        this.pageIndex = 0;
        this.length = 100;
        this.pageSize = 10;
        this.pageSizeOptions = [5, 10, 25, 100];
    }
    ProductListComponent.prototype.ngOnInit = function () {
        this.refreshList();
    };
    ProductListComponent.prototype.refreshList = function () {
        var _this = this;
        this.service.getProductListPaginated(this.pageIndex, this.pageSize)
            .then(function (res) {
            _this.page = res,
                _this.productList = _this.page.content;
            _this.length = _this.page.totalElements;
        });
    };
    ProductListComponent.prototype.openForEdit = function (id) {
        this.router.navigate(['/product/edit/' + id]);
    };
    ProductListComponent.prototype.onProductDelete = function (id) {
        var _this = this;
        if (confirm('Confirma exclusão desse registro?')) {
            this.service.deleteProduct(id).then(function (res) {
                _this.refreshList();
                _this.toastr.warning('Registro excluído com sucesso!', 'Restaurente App.');
            });
        }
    };
    ProductListComponent.prototype.getServerData = function (event) {
        this.pageIndex = event.pageIndex;
        this.pageSize = event.pageSize;
        this.refreshList();
    };
    ProductListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-list',
            template: __webpack_require__(/*! ./product-list.component.html */ "./src/app/product/product-list/product-list.component.html"),
            styles: [__webpack_require__(/*! ./product-list.component.css */ "./src/app/product/product-list/product-list.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_shared_item_service__WEBPACK_IMPORTED_MODULE_1__["ItemService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], ProductListComponent);
    return ProductListComponent;
}());



/***/ }),

/***/ "./src/app/shared/customer.model.ts":
/*!******************************************!*\
  !*** ./src/app/shared/customer.model.ts ***!
  \******************************************/
/*! exports provided: Customer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Customer", function() { return Customer; });
var Customer = /** @class */ (function () {
    function Customer() {
    }
    return Customer;
}());



/***/ }),

/***/ "./src/app/shared/customer.service.ts":
/*!********************************************!*\
  !*** ./src/app/shared/customer.service.ts ***!
  \********************************************/
/*! exports provided: CustomerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerService", function() { return CustomerService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CustomerService = /** @class */ (function () {
    function CustomerService(http) {
        this.http = http;
    }
    CustomerService.prototype.getCustomerList = function () {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiURL + '/customer/all').toPromise();
    };
    CustomerService.prototype.getCustomerListPaginated = function (index, size) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiURL + '/customer?page=' + index + '&size=' + size).toPromise();
    };
    CustomerService.prototype.getCustomerByID = function (id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiURL + '/customer/' + id).toPromise();
    };
    CustomerService.prototype.saveOrUpdateCustomer = function (c) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiURL + '/customer', c);
    };
    CustomerService.prototype.updateCustomer = function (c) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiURL + '/customer/' + c.customerId, c);
    };
    CustomerService.prototype.deleteCustomer = function (id) {
        return this.http.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiURL + '/customer/' + id).toPromise();
    };
    CustomerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], CustomerService);
    return CustomerService;
}());



/***/ }),

/***/ "./src/app/shared/item.model.ts":
/*!**************************************!*\
  !*** ./src/app/shared/item.model.ts ***!
  \**************************************/
/*! exports provided: Item */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Item", function() { return Item; });
var Item = /** @class */ (function () {
    function Item() {
    }
    return Item;
}());



/***/ }),

/***/ "./src/app/shared/item.service.ts":
/*!****************************************!*\
  !*** ./src/app/shared/item.service.ts ***!
  \****************************************/
/*! exports provided: ItemService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemService", function() { return ItemService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ItemService = /** @class */ (function () {
    function ItemService(http) {
        this.http = http;
    }
    ItemService.prototype.getProductList = function () {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiURL + '/product/all').toPromise();
    };
    ItemService.prototype.getProductListPaginated = function (index, size) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiURL + '/product?page=' + index + '&size=' + size).toPromise();
    };
    ItemService.prototype.getProductByID = function (id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiURL + '/product/' + id).toPromise();
    };
    ItemService.prototype.saveOrUpdateProduct = function (p) {
        if (p.itemId != null) {
            return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiURL + '/product/' + p.itemId, p);
        }
        else {
            return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiURL + '/product', p);
        }
    };
    ItemService.prototype.deleteProduct = function (id) {
        return this.http.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiURL + '/product/' + id).toPromise();
    };
    ItemService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ItemService);
    return ItemService;
}());



/***/ }),

/***/ "./src/app/shared/order.service.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/order.service.ts ***!
  \*****************************************/
/*! exports provided: OrderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderService", function() { return OrderService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OrderService = /** @class */ (function () {
    function OrderService(http) {
        this.http = http;
    }
    OrderService.prototype.saveOrUpdateOrder = function () {
        this.orderDto = this.formData;
        this.orderDto.orderItems = this.orderItems;
        var body = __assign({}, this.orderDto
        //...this.formData,
        //OrderItems: this.orderItems
        );
        if (this.orderDto.orderId != null) {
            return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiURL + '/order/' + this.orderDto.orderId, body);
        }
        else {
            return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiURL + '/order', body);
        }
    };
    OrderService.prototype.getOrderList = function () {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiURL + '/order/all').toPromise();
    };
    OrderService.prototype.getOrderListPaginated = function (index, size) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiURL + '/order?page=' + index + '&size=' + size).toPromise();
    };
    OrderService.prototype.getOrderByID = function (id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiURL + '/order/' + id).toPromise();
    };
    OrderService.prototype.deleteOrder = function (id) {
        return this.http.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiURL + '/order/' + id).toPromise();
    };
    OrderService.prototype.deleteOrderItem = function (id) {
        return this.http.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiURL + '/order/item/' + id).toPromise();
    };
    OrderService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], OrderService);
    return OrderService;
}());



/***/ }),

/***/ "./src/app/shared/printer.service.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/printer.service.ts ***!
  \*******************************************/
/*! exports provided: PrinterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrinterService", function() { return PrinterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PrinterService = /** @class */ (function () {
    function PrinterService(http) {
        this.http = http;
    }
    PrinterService.prototype.exportPDF = function (path) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiURL + path, { responseType: 'blob' });
    };
    PrinterService.prototype.getOrderExport = function (filename, path) {
        this.exportPDF(path)
            .subscribe(function (x) {
            // It is necessary to create a new blob object with mime-type explicitly set
            // otherwise only Chrome works like it should
            var newBlob = new Blob([x], { type: 'application/pdf' });
            // IE doesn't allow using a blob object directly as link href
            // instead it is necessary to use msSaveOrOpenBlob
            if (window.navigator && window.navigator.msSaveOrOpenBlob) {
                window.navigator.msSaveOrOpenBlob(newBlob);
                return;
            }
            // For other browsers: 
            // Create a link pointing to the ObjectURL containing the blob.
            var data = window.URL.createObjectURL(newBlob);
            var link = document.createElement('a');
            link.href = data;
            link.download = filename + '.pdf';
            // this is necessary as link.click() does not work on the latest firefox
            link.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));
            setTimeout(function () {
                // For Firefox it is necessary to delay revoking the ObjectURL
                window.URL.revokeObjectURL(data);
                link.remove();
            }, 100);
        });
    };
    PrinterService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PrinterService);
    return PrinterService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    apiURL: 'http://localhost:8080/restaurante'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/frabelo/Cursos/Angular/crud-restaurante/restaurante-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map