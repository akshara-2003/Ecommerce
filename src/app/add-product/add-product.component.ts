import { Component } from '@angular/core';
import { FormGroup ,FormControl,Validators} from '@angular/forms';
import { ProductsService } from '../products.service';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  productData :FormGroup
  constructor(private productsService :ProductsService){
    this.productData = new FormGroup({
      'name' : new FormControl('',Validators.required),
      'brand' : new FormControl('',Validators.required),
      'price' : new FormControl('',Validators.min(0)),
      'rating' :new FormControl('',Validators.required),
      'image':new FormControl('',Validators.required)
    })
  }
  createProduct(){
    console.log(this.productData.value)
    if(this.productData.valid){
      this.productsService.createProduct(this.productData.value)
      alert("Product added successfully")
    }
    else{
      alert("Enter valid details")
    }
  }
}
