import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  orderT = [] as any;

  constructor() { }

  ngOnInit(): void {

  }

  recibeOrder(event: any) {
    this.orderT.push(event)
  }
}
