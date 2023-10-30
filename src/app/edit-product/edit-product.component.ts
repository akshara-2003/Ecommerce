import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../products.service';
import { ActivatedRoute, Router } from '@angular/router';

interface Product{
  id :number,
  name :string,
  brand :string,
  price :string,
  Rating :string,
  image:string
}

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent {  
  editForm!  :FormGroup;
  id:number=0
  constructor(private productService : ProductsService, private activatedRoute:ActivatedRoute,private router: Router){
  }  

  ngOnInit(): void {
   
    console.log(this.activatedRoute.snapshot)
    this.activatedRoute.params.subscribe((params) => {
      console.warn(params)
      this.id =parseInt(params['id'])-1   
  });
  this.editForm=new FormGroup({
    'name':new FormControl(this.productService.productList[this.id].name,Validators.required),
    'price':new FormControl(this.productService.productList[this.id].price,Validators.required),
    'brand':new FormControl(this.productService.productList[this.id].brand,Validators.required),
    'Rating':new FormControl(this.productService.productList[this.id].Rating,Validators.required),
    'image':new FormControl(this.productService.productList[this.id].image,Validators.required)
  })
  }

  onSubmit() {
    this.productService.updateProduct({ id:this.id+1, ...this.editForm.value })
    this.router.navigate(['/products']);
  }
}
