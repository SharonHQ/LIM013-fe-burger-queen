import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  values = '';
  orderT = [] as any;
  total = 0;
  opcionSeleccionado = [] as any;
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
  capturar(event: any, product: any, i: any){
    let oldSubTotal = product.subtotal; 
    product.unit = this.opcionSeleccionado[i];
    product.subtotal = product.price * product.unit;
    this.total += product.subtotal - oldSubTotal;
    console.log(product);

  }

  trackByFn(index: any, item: any) {
    return index;
  }

  sendOrder(name: any, numberTable: any){
    console.log(this.orderT);
    this.productService.addOrder({ ...this.orderT, nameUser: name, numberTable: numberTable, state: 'false', total: this.total});
  }
  deleteMeal(event: any){
    console.log(this.orderT)
    this.orderT.pop(event);
    console.log(this.orderT);
  }
}
