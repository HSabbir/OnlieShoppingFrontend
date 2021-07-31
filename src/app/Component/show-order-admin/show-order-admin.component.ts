import { Component, OnInit } from '@angular/core';
import {OrderServiceService} from '../../services/order-services/order-service.service';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-show-order-admin',
  templateUrl: './show-order-admin.component.html',
  styleUrls: ['./show-order-admin.component.css']
})
export class ShowOrderAdminComponent implements OnInit {
  orders: any;
  price: any;
  displayedColumns: string[] = ['Id', 'Address', 'Total Price', 'actions'];
  constructor(private orderService: OrderServiceService) {
    this.orderService.getAllOrder().subscribe(data => {
      this.orders = new MatTableDataSource(data.data) ;
    });
  }
  deleteOrders(id): void {
    this.orderService.delete(id).subscribe(data => {
      this.orders = new MatTableDataSource(data.data);
    });
  }

  ngOnInit(): void {
  }
}
