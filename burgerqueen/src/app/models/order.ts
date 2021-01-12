import { Product } from './product'; 
export class Order {
  id?: number;
  productId?: string;
  productName?: string;
  price?: number;
  category?: string;
  kind?: string;
  flavor?: string;
  units?: number;
  subTotal?: number;
  add?: boolean;
  extra?: string;
  subcategory?: string;

  constructor(id: number, product: Product, units = 1) {
    this.id= id;
    this.productId = product.productId;
    this.productName = product.name ;
    this.price = product.price;
    this.category = product.category;
    this.kind = product.kind;
    this.flavor = '';
    this.units = units;
    this.subTotal = product.price*units;
    this.add = product.add ;
    this.extra = '';
    this.subcategory = '';
  }
}

