import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import 'hammerjs';


import { LoginComponent } from './components/login/login.component';
import {LoginService} from './services/login.service';
import {routing} from './app.routing';
import { AddNewProductComponent } from './components/add-new-product/add-new-product.component';
import { AddProductService } from "app/services/add-product.service";
import { LocationService } from "app/services/location.service";
import 'rxjs/add/operator/map';
import { UploadImageService } from "app/services/upload-image.service";
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterService } from "app/services/register.service";
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductService } from "app/services/product.service";
import {DataTableModule} from "angular2-datatable";
import {DataFilterPipe} from './pipe/data-filter.pipe';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { Ng2ImgFallbackModule } from 'ng2-img-fallback';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { CartService } from "app/services/cart.service";
import { MyShopComponent } from './components/my-shop/my-shop.component';
import { MyShopService } from "app/services/my-shop.service";

import { StompService } from 'ng2-stomp-service';
import { QuestionService } from "app/services/question.service";
import { QuestionComponent } from './components/question/question.component';
import { SearchFilterPipe } from "app/pipe/search-filter.pipe";
import { AnswerService } from "app/services/answer.service";
import { AnswerComponent } from './components/answer/answer.component';
import { SalesService } from "app/services/sales.service";
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import { UserComponent } from './components/user/user.component';
import { UserInfoService } from "app/services/user-info.service";

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    AddNewProductComponent,
    RegisterComponent,
    HomeComponent,
    ProductListComponent,
    DataFilterPipe,
    SearchFilterPipe,
    ProductDetailComponent,
    ShoppingCartComponent,
    MyShopComponent,
    QuestionComponent,
    AnswerComponent,
    UserComponent
    
   
  ],
  imports: [
    BrowserModule,
    routing,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpModule,
    DataTableModule,
    NgbModule.forRoot(),
    Ng2ImgFallbackModule
  ],
  providers: [
    LoginService,
    AddProductService,
    LocationService,
    UploadImageService,
    RegisterService,
    ProductService,
    CartService,
    MyShopService,
    QuestionService,
    AnswerService,
    SalesService,
    NgbCarouselConfig,
    UserInfoService
    
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
