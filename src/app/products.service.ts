import { Injectable } from '@angular/core';

interface Product{
  id :number,
  name :string,
  brand :string,
  price :number,
  Rating :string,
  image:string
}
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  
  productList = [
    {
      id :1,
      name :'Shirt',
      brand :'Allen solly',
      price :2379,
      Rating :'4.5/5',
      image :'https://img1.exportersindia.com/product_images/bc-full/2021/3/3402891/mens-shirts-1616403877-5762975.jpeg'
    },
    {
      id :2,
      name :'Jeans',
      brand :'Levis',
      price :5469,
      Rating :'4.3/5',
      image :'https://5.imimg.com/data5/SELLER/Default/2021/9/KI/IM/WI/20506059/e-commerce-men-s-jeans-photography-500x500.JPG'
    },
    {
      id :3,
      name :'Jacket',
      brand :'H&M',
      price :2379,
      Rating :'4.5/5',
      image :'https://ik.imagekit.io/fabioemoutinho/tr:q-auto/3.jpg'
    },
    {
      id :4,
      name :'Belt',
      brand :'H&M',
      price :1567,
      Rating :'4.6/5',
      image :'https://5.imimg.com/data5/SELLER/Default/2021/9/NR/OP/IP/20506059/e-commerce-belt-photography-500x500.JPG'
    },
    {
      id :5,
      name :'Watch',
      brand :'Fossil',
      price :23769,
      Rating :'4.8/5',
      image :'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKUKEEHZGAc-yXGCe_CN_bZvNZtkLFWGpLhN9Ro-60SPwNnmY-hTRAOp7ax3hGo9JybOk&usqp=CAU'
    },
    {
      id :6,
      name :'Shoes',
      brand :'Puma',
      price :5689,
      Rating :'4.4/5',
      image :'https://qph.cf2.quoracdn.net/main-qimg-ca08dd0bb6479453d8ea81994f7b851e-lq'
    }
  ]
  constructor() { }
  createProduct(product :Product)
  {
    product.id = this.productList.length+1
    this.productList.push(product);
  }
  cart: Product[] = [];

  addToCart(product: Product) {
    this.cart.push(product);
  }

  getCartItems() {
    return this.cart;
  }
  getProducts(): Product[] {
    return this.productList;
  }

  getProduct(id: number): any {
    return this.productList.find((p) => p.id === id);
  }
  updateProduct(product: Product) :any{
    const index = this.productList.findIndex((p) => p.id === product.id);
    this.productList[index] = product;
  }
}

