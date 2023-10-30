import { Component } from '@angular/core';
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
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cartItems!: Product[] ;
  total: number = 0;
  constructor(private productsService: ProductsService){

  }
  ngOnInit(): void {
    this.cartItems = this.productsService.getCartItems();
    this.total = this.cartItems.reduce((total, item) => total + item.price, 0);
  }
  removeFromCart(item: Product) {
    this.cartItems = this.cartItems.filter(i => i !== item);
    this.total -= item.price;
  }
}
