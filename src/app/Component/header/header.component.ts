import { Component, OnInit, Input } from '@angular/core';
import { CartService} from '../../services/cart-service/cart.service';
import {AuthServiceService} from '../../services/auth-service/auth-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  headerTitle = 'Navbar';
  constructor(private cartService: CartService, public authservice: AuthServiceService) { }
  getTotai(): number {
    return this.cartService.getNumberOfItems();
  }
  isAdmin(): boolean{
    return this.authservice.isAdmin();
  }
  ngOnInit(): void {
  }

}
