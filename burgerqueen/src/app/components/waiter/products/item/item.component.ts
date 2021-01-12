import { Component, OnInit, Input } from '@angular/core';
import { selectedProductService } from '../../../../services/selected-product.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() p = {} as any;
  constructor(private selectedProduct: selectedProductService) { }

  ngOnInit(): void {
  }
  send(product: any) {
    this.selectedProduct.getItem(product);
  }

}
