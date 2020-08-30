import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { WelcomeComponent } from './template/welcome/welcome.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SidenavListComponent } from './shared/navigataion/sidenav-list/sidenav-list.component';
import { HeaderComponent } from './shared/navigataion/header/header.component';
import { OrdersComponent } from './orders/orders.component';
import { NewOrderComponent } from './orders/new-order/new-order.component';
import { DialogComponent } from './shared/dialog/dialog.component';
import { LoadingComponent } from './shared/loading/loading.component';
import { DialogService } from './services/dialog.service';
import { PwaService } from './services/pwa.service';
import { AuthService } from './auth/auth.service';
import { OrderService } from './orders/order.service';
import { CartComponent } from './orders/cart/cart.component';
import { OrderHistoryComponent } from './orders/order-history/order-history.component';
import { AdminComponent } from './admin/admin.component';
import { AddProductsComponent } from './admin/add-products/add-products.component';
import { ViewProductsComponent } from './admin/view-products/view-products.component';
import { ViewRequestsComponent } from './admin/view-requests/view-requests.component';
import { AddCustomerComponent } from './admin/add-customer/add-customer.component';
import { AdminService } from './admin/admin.service';
import { TableComponent } from './shared/table/table.component';
import { ProductCardComponent } from './shared/product-card/product-card.component';
import { SubmenuComponent } from './shared/submenu/submenu.component';
import { ServiceWorkerModule } from '@angular/service-worker';

import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ProductCarouselComponent } from './shared/product-carousel/product-carousel.component';
import { ProductGridTemplateComponent } from './template/product-grid-template/product-grid-template.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MiniCartComponent } from './template/mini-cart/mini-cart.component';
import { ProductDetailsComponent } from './template/product-details/product-details.component';
import { ProductListComponent } from './template/product-list/product-list.component';
import { FiltersComponent } from './shared/filters/filters.component';
import { BrandImagesComponent } from './shared/brand-images/brand-images.component';
import { ContentMenuComponent } from './shared/content-menu/content-menu.component';

import { StoreModule } from '@ngrx/store';
import { reducer } from './reducers/product.reducer';
import { MiniMenuComponent } from './shared/navigataion/mini-menu/mini-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    WelcomeComponent,
    SidenavListComponent,
    HeaderComponent,
    OrdersComponent,
    NewOrderComponent,
    DialogComponent,
    LoadingComponent,
    CartComponent,
    OrderHistoryComponent,
    AdminComponent,
    AddProductsComponent,
    ViewProductsComponent,
    ViewRequestsComponent,
    AddCustomerComponent,
    TableComponent,
    ProductCardComponent,
    SubmenuComponent,
    ProductCarouselComponent,
    ProductGridTemplateComponent,
    FooterComponent,
    MiniCartComponent,
    ProductDetailsComponent,
    ProductListComponent,
    FiltersComponent,
    BrandImagesComponent,
    ContentMenuComponent,
    MiniMenuComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    SlickCarouselModule,
    StoreModule.forRoot({
      product: reducer
    })
  ],
  providers: [DialogService, AuthService, OrderService, AdminService, PwaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
