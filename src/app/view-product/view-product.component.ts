import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductsService } from '../products.service';
interface Product{
  id :number,
  name :string,
  brand :string,
  price :number,
  Rating :string,
  image:string
}
@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent {
  currentProduct :Product|undefined;
  constructor(private activeRoute : ActivatedRoute, private productsService : ProductsService){
    this.activeRoute.params.subscribe((params)=>{
    let productIndex = this.productsService.productList.findIndex((b)=>b.id ==params['id'])
    this.currentProduct= this.productsService.productList[productIndex]
  })
}
}

