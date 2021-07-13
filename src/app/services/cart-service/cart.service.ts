import { Injectable } from '@angular/core';
import { CartInterface } from '../../cartInterface';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: CartInterface[] = [];
  numberOfTotalItem = 0 ;
  addToCart(id: number, increment: number): void {
    console.log('vcalled');
    const checkCart = this.cart.find(x => x.id === id);
    if (checkCart) {
      if (increment < 0 && checkCart.number_of_item === 0){
        checkCart.number_of_item = checkCart.number_of_item ;
      }
      else {
        checkCart.number_of_item += increment;
        this.numberOfTotalItem += increment;
      }
    }
    else {
      const tempCart: CartInterface = { id, number_of_item: increment};
      this.cart.push(tempCart);
      this.numberOfTotalItem += increment;
    }
  }
  getNumberOfItems(): number {
    return this.numberOfTotalItem ;
  }
  getItems(): CartInterface[] {
    return this.cart;
  }
  RemoveElementFromArray(id: number): void {
    this.cart.forEach((element, index) => {
      if (element.id === id) {
        this.numberOfTotalItem -= element.number_of_item ;
        this.cart.splice(index, 1);
      }
    });
  }
  clearCart(): object {
    this.cart = [];
    return this.cart;
  }
}
