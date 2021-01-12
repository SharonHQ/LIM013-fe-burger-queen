export interface Product {
  productId?: string;
  name: string;
  price: number;
  category?: string;
  kind?: string;
  flavor?: string;
  accompaniment?: boolean;
  add?: boolean;
}