import { Component, OnInit, Input } from '@angular/core';
import { CartService} from '../../services/cart-service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  headerTitle = 'Navbar';
  constructor(private cartService: CartService) { }
  getTotai(): number {
    return this.cartService.getNumberOfItems();
  }
  ngOnInit(): void {
  }

}
