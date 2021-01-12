import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { Order } from '../models/order'

@Injectable({
  providedIn: 'root'
})
export class selectedProductService {
  public OrderSource: BehaviorSubject<Order[]> = new BehaviorSubject<Order[]>([]);
  orders = this.OrderSource.asObservable();

  getItem (product: any) {
    let arr: Order[] = [];
    arr.push({
      productId: product.productId,
      productName: product.name,
      price: product.price,
      category: product.category,
      kind: product.kind,
      flavor: '',
      units: 1,
      subTotal: product.price, 
      add: product.add,
      extra: '',
      subcategory: product.subcategory,
    })
    this.OrderSource.next(arr);
    //console.log(this.OrderSource.getValue())
  }
}
