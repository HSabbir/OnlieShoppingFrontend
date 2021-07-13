import {Component, OnInit} from '@angular/core';
import {CartService} from '../../services/cart-service/cart.service';
import {ProductService} from '../../services/product-services/product-services.service';
import {CartInterface} from '../../cartInterface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products: any;
  constructor(private cartService: CartService, private productService: ProductService) {
    this.productService.readAll().subscribe(data => {
      this.products = data.data ;
    });
  }
  removeFromCart(id: number): void {
    this.cartService.RemoveElementFromArray(id);
  }
  addToCart(id: number, increment: number): void {
    this.cartService.addToCart(id, increment);
  }
  // @ts-ignore
  getProductById(id: number): Product {
    const product = this.products.find(x => x.id === id);
    return product;
  }
  getCart(): CartInterface[] {
    return this.cartService.getItems();
  }
  ngOnInit(): void {
  }

}
