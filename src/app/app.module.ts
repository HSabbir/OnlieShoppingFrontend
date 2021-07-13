import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {MaterialModule} from './material-module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Component/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './Component/home/home.component';
import { ProductComponent } from './Component/product/product.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { CartComponent } from './Component/cart/cart.component';
import { ShowTotalPriceComponent } from './Component/show-total-price/show-total-price.component';
import { LoginComponent } from './Component/login/login.component';
import { RegisterComponent } from './Component/register/register.component';
import { AdminDashboardComponent } from './Component/admin-dashboard/admin-dashboard.component';
import { CrudProductComponent } from './Component/crud-product/crud-product.component';

import {HttpClientModule} from '@angular/common/http';
import { DialogComponentComponent } from './Component/dialog-component/dialog-component.component';
import {DialogProductAddComponent} from './Component/dialog-product-add/dialog-product-add.component';
import { OrderFormComponent } from './Component/order-form/order-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProductComponent,
    CartComponent,
    ShowTotalPriceComponent,
    LoginComponent,
    RegisterComponent,
    AdminDashboardComponent,
    CrudProductComponent,
    DialogComponentComponent,
    DialogProductAddComponent,
    OrderFormComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'cart', component: CartComponent},
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent},
      {path: 'admin', component: AdminDashboardComponent},
      {path: 'order', component: OrderFormComponent}
    ]),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
