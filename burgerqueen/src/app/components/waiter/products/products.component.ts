import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { SearchService} from '../../../services/search.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products = [] as any;
  public handleProducts: any = [];
  subcategory = [{ id: 1, name: 'drink' },
    { id: 2, name: 'burger-sandwich' },
    { id: 3, name: 'accompaniment' }];

  constructor(public productService: ProductService, public searchService: SearchService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(products => { this.products = products; });

    this.searchService.searchProducts.subscribe(result => {
      for (let i = 0; i < result.length; i++) {
        this.handleProducts = this.products.filter((e: any) => e.name.toLowerCase().includes(result[i].toLowerCase()));
        if (this.handleProducts.length === 0) {
          this.handleProducts = -1;
        }
        if (result[i] === '') {
          this.handleProducts = [];
        }
      }
      console.log(this.handleProducts);
    });
    
  } 
}
