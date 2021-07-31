import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {ProductService} from '../../services/product-services/product-services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products = this.productService.allProducts;
  constructor(private productService: ProductService) {
    this.productService.readAll().subscribe( result => {
      this.products = result.data ;
    });
  }
  ngOnInit(): void {
  }

}
