import { Component } from '@angular/core';
import { ProductsService } from '../products.service';
import { ActivatedRoute, Router } from '@angular/router';
interface Product{
  id :number,
  name :string,
  brand :string,
  price :number,
  Rating :string,
  image:string
}
@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css']
})
export class MarketComponent {
  productData:Array<any> = []
  constructor(private productsService : ProductsService, private router:Router, private activatedRoute:ActivatedRoute){  
    this.productData = this.productsService.productList; 
  }
  addToCart(product: Product) {
    this.productsService.addToCart(product);
    alert("Product added to cart successfully")
  }
}

