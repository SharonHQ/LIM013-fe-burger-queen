import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  @Output() public meal = new EventEmitter<any>();

  products = [] as any;

  constructor(public productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
    })
  }

  addInOrder(product: any) {
    this.meal.emit(product);
  }

/*   addInOrder(event: any, product: any) {
    //this.productService.addOrder(product);
    
  } */

}
