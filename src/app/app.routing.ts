import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AddNewProductComponent } from "app/components/add-new-product/add-new-product.component";
import { RegisterComponent } from "app/components/register/register.component";
import { HomeComponent } from "app/components/home/home.component";
import { ProductListComponent } from "app/components/product-list/product-list.component";
import { ProductDetailComponent } from "app/components/product-detail/product-detail.component";
import { ShoppingCartComponent } from "app/components/shopping-cart/shopping-cart.component";
import { MyShopComponent } from "app/components/my-shop/my-shop.component";
import { QuestionComponent } from "app/components/question/question.component";
import { AnswerComponent } from "app/components/answer/answer.component";
import { UserComponent } from "app/components/user/user.component";


const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'addNewProduct', component: AddNewProductComponent },
  { path: 'productList', component: ProductListComponent },
  { path: 'productDetail/:id', component: ProductDetailComponent },
  { path: 'shoppingCart', component: ShoppingCartComponent },
  { path: 'myShop', component: MyShopComponent },
  { path: 'user/:id' , component:UserComponent},
  { path:'answer/:id' , component:AnswerComponent}
  
  
  
  
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

