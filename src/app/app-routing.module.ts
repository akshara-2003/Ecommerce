import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { ProductsComponent } from './products/products.component';
import { MarketComponent } from './market/market.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { ProductsHomeComponent } from './products-home/products-home.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { AddProductComponent } from './add-product/add-product.component';

const routes: Routes = [
  {
    path :"",
    redirectTo:'/home',
    pathMatch:'full'
  },
  {
    path :"home",
    component :HomeComponent
  },
  {
    path :"dashboard",
    component :DashboardComponent
  },
  {
    path :"users/addUser",
    component :RegisterComponent
  },
  {
    path:"users/:id",
    component:ViewUserComponent
  },
  {
    path:"users/edit/:id",
    component:EditUserComponent,
  },
  {
    path :"users",
    component :UsersComponent,
  },
  {
    path:"products/addProduct",
    component :AddProductComponent
},
{
  path:"products/:id",
  component:ViewProductComponent
},
{
  path:"products/edit/:id",
  component:EditProductComponent,
  
},
  {
    path :"products",
    component :ProductsComponent,
  },
  {
    path :"market",
    component :MarketComponent
  },
  {
    path :"cart",
    component :CartComponent
  },
  {
    path :"login",
    component :LoginComponent
  },
  {
    path :"register",
    component :RegisterComponent
  },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
