import { Component } from '@angular/core';
import { ProductsService } from '../products.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  productData:Array<any> = []
  constructor(private productsService : ProductsService, private router:Router, private activatedRoute:ActivatedRoute){  
    this.productData = this.productsService.productList; 
  }
  addProduct(){
    this.router.navigateByUrl("products/addProduct")
    console.log('product added')
  }
}



 
  