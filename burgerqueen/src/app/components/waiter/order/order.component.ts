import { Component, OnInit } from '@angular/core';
import { selectedProductService } from '../../../services/selected-product.service';
import { ProductService } from '../../../services/product.service'

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  order = [] as any;
  userName = null;
  tableNumber = 1;
  tables = [{ id: 1, name: '1' },
  { id: 2, name: '2' },
  { id: 3, name: '3' },
  { id: 4, name: '4' },
  { id: 5, name: '5' }];

  constructor(public selectedProductService: selectedProductService, public productService: ProductService) { }
  ngOnInit(): void {
    this.selectedProductService.orders.subscribe(data => {

      for (let i = 0; i < data.length; i++) {
        const lastIndex = this.order.map((product: any) => product.productId).lastIndexOf(data[i].productId);
        let productExists = false;
        console.log(lastIndex);

        if (lastIndex !== -1 && !data[i].subcategory) {
          this.order[lastIndex].units++
          this.order[lastIndex].subTotal = this.order[lastIndex].price * this.order[lastIndex].units
          productExists = true;
          break;
        }

        if (!productExists) {
          this.order.push(data[i])
        }
        console.log(this.order);
        this.order.map((value: any, index: any) => value.id = index)
        console.log(this.order);
      }
    })
  }

  sendOrder() {
    this.productService.addOrder({ ...this.order, nameUser: this.userName, numberTable: this.tableNumber, state: 'false', total: this.totalOrder()});
    this.restart();
  }


  deleteMeal(positionProduct: any) {
    console.log(this.order);
    this.order.splice(this.order.findIndex((item: any) => item.id === positionProduct), 1)
    console.log(this.order);
  }

  totalOrder() {
    return this.order.reduce((a: any, b: any) => a + b.subTotal, 0);
  }

  restart() {
    this.order = [];
    this.userName = null;
    this.tableNumber = 1;
  }
}

