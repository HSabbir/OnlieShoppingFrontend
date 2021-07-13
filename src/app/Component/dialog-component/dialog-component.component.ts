import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {ProductService} from '../../services/product-services/product-services.service';

@Component({
  selector: 'app-dialog-component',
  templateUrl: './dialog-component.component.html',
  styleUrls: ['./dialog-component.component.css']
})
export class DialogComponentComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public product: any, private productService: ProductService) { }
  onSubmit(): void {
    this.productService.update(this.product);
    console.log(this.product);
  }
  ngOnInit(): void {
  }

}
