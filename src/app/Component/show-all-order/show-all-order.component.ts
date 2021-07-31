import {Component, Input, OnInit} from '@angular/core';
import {OrderServiceService} from '../../services/order-services/order-service.service';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-show-all-order',
  templateUrl: './show-all-order.component.html',
  styleUrls: ['./show-all-order.component.css']
})
export class ShowAllOrderComponent implements OnInit {
  orders: any;
  price: any;
  displayedColumns: string[] = ['Id', 'Address', 'Total Price', 'actions'];
  constructor(private orderService: OrderServiceService) {
      this.orderService.getSingleOrder().subscribe(data => {
        this.orders = new MatTableDataSource(data.data) ;
      });
  }
  deleteOrders(id): void {
    this.orderService.delete(id).subscribe(data => {
      this.orders = new MatTableDataSource(data.data);
      //this.AfterViewInit();
    });
  }

  ngOnInit(): void {
  }

}
