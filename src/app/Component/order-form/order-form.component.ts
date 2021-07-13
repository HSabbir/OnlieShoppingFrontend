import {Component, Inject, OnInit} from '@angular/core';
import {DialogComponentComponent} from '../dialog-component/dialog-component.component';
import {OrderInterface} from '../../order-interface';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {
  // firstName: string;
  // lastName: string;
  // address: string;
  // phone: string;
  // paymentMethod: string;
  // accountNumber: string;
  // totalPrice: number;
  // dateAndTime: string;
  order: OrderInterface = {
    firstName: '',
    lastName: '',
    address: '',
    phone: '',
    paymentMethod: '',
    accountNumber: '',
    totalPrice: this.totalprice,
    dateAndTime: ''
  };
  option: string[] = ['Bkash', 'Rocket', 'Paypal', 'Nogod'];
  constructor(@Inject(MAT_DIALOG_DATA) public totalprice: any) { }
  ngOnInit(): void {
  }
  ubmit(): void {
    console.log(this.order);
  }

}
