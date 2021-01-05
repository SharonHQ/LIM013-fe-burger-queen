import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '../../../services/product.service';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  orderT = [] as any;
  userName = '';
  total = 0;
  unitsPerMeal = [1, 1, 1, 1, 1, 1, 1, 1, 1];
  tableNumber =  1;
  units = [{ id: 1, name: '1' },
  { id: 2, name: '2' },
  { id: 3, name: '3' },
  { id: 4, name: '4' },
  { id: 5, name: '5' },
  { id: 6, name: '6' },
  { id: 7, name: '7' },
  { id: 8, name: '8' },
  { id: 9, name: '9' },
  { id: 10, name: '10' }];
  tables = [{ id: 1, name: '1' },
  { id: 2, name: '2' },
  { id: 3, name: '3' },
  { id: 4, name: '4' },
  { id: 5, name: '5' }];
  constructor(public productService: ProductService) { }

  ngOnInit(): void {

  }

  recibeOrder(product: any) {
    this.orderT.push(product);
    product.unit = 1;
    product.subtotal = product.price;
    this.total += product.subtotal;
    console.log(product);

  }
  addUnits(event: any, product: any, i: any) {
    let oldSubTotal = product.subtotal;
    product.unit = this.unitsPerMeal[i];
    product.subtotal = product.price * product.unit;
    this.total += product.subtotal - oldSubTotal;
  }

  trackByFn(index: any, item: any) {
    return index;
  }

  sendOrder() {
    if (this.total !== 0) {
    this.productService.addOrder({ ...this.orderT, nameUser: this.userName, numberTable: this.tableNumber, state: 'false', total: this.total });
    this.startOver();  
    } else {
      alert('Ingrese una orden');
    }
  }
  deleteMeal(product:any, positionProduct:any) {
    console.log(this.orderT)
    this.orderT.splice(positionProduct, 1);
    this.total -= product.subtotal;
    console.log(this.orderT);
  }
  startOver() {
    this.total = 0;
    this.orderT = [];
    this.userName = '';
    this.tableNumber = 1;
  }
}
