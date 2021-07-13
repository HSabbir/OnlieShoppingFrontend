import { Component, OnInit } from '@angular/core';
import {CartService} from '../../services/cart-service/cart.service';
import {ProductService} from '../../services/product-services/product-services.service';
import {MatDialog} from '@angular/material/dialog';
import {OrderFormComponent} from '../order-form/order-form.component';

@Component({
  selector: 'app-show-total-price',
  templateUrl: './show-total-price.component.html',
  styleUrls: ['./show-total-price.component.css']
})
export class ShowTotalPriceComponent implements OnInit {
  products: any;
  constructor(private cartService: CartService, private productService: ProductService, public dialog: MatDialog) {
    this.productService.readAll().subscribe(data => {
      this.products = data.data ;
    });
  }
  openForm(): void {
    this.dialog.open(OrderFormComponent, { width: '500px' , data: this.getTotalPrice()});
  }
  getTotalPrice(): number {
    let totalPrice = 0;
    for (const item of this.cartService.getItems()) {
      const product = this.products.find(x => x.id === item.id);
      totalPrice += item.number_of_item * product.price ;
    }
    return totalPrice ;
  }
  getTotalNumberOfItem(): number {
    return this.cartService.numberOfTotalItem ;
  }
  ngOnInit(): void {
  }

}
