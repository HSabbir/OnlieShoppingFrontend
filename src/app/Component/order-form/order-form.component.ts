import {Component, Inject, Input, OnInit} from '@angular/core';
import {DialogComponentComponent} from '../dialog-component/dialog-component.component';
import {OrderInterface} from '../../order-interface';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {CartService} from '../../services/cart-service/cart.service';
import {AuthServiceService} from '../../services/auth-service/auth-service.service';
import {OrderServiceService} from '../../services/order-services/order-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {
  order: OrderInterface = {
    name: '',
    address: '',
    phone: '',
    paymentMethod: '',
    accountNumber: '',
    totalprice: this.cartService.gettotalPrice(),
    UserId: 0
  };
  option: string[] = ['Bkash', 'Rocket', 'Paypal', 'Nogod'];
  constructor(private cartService: CartService,
              private authService: AuthServiceService,
              private oredrservice: OrderServiceService, private router: Router) { }
  ngOnInit(): void {
  }
  submit(): void {
    const user = this.authService.getUserInfo();
    // tslint:disable-next-line:radix
    const id = parseInt(this.authService.getUserInfo().nameid);
    this.order.UserId = id;
    console.log(id);
    this.oredrservice.addOrder(this.order).subscribe(result => {
      if (result.success){
        const cart = this.cartService.clearCart();
        this.router.navigate(['/allorder']);
      }else {
        alert('Order Not Confirmed');
      }
    });
  }

}
