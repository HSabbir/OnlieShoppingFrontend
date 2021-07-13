import {Component, Inject, OnInit} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {ProductService} from '../../services/product-services/product-services.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-dialog-product-add',
  templateUrl: './dialog-product-add.component.html',
  styleUrls: ['./dialog-product-add.component.css']
})
export class DialogProductAddComponent implements OnInit {
  data: any;
  // tslint:disable-next-line:max-line-length
  constructor(@Inject(MAT_DIALOG_DATA) public product: any, private productService: ProductService, private dialogRef: MatDialogRef<DialogProductAddComponent>) { }
  onSubmit(): void {
    this.productService.create(this.product);
    console.log(this.product);
    this.dialogRef.close({ event: 'close'});
  }

  ngOnInit(): void {
  }

}
