import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'tr[app-food]',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss']
})
export class FoodComponent implements OnInit {

  @Input() food = [] as any;
  @Output() foodRemove = new EventEmitter<number>();
  flavors = [] as any;
  extras = [{ checked: false, value: 'egg' }, { checked: false, value: 'cheese' }];
  total: number | undefined;

  constructor() { }

  ngOnInit(): void { }

  handlerExtra(item:any, chk: any) {
    this.extras.forEach((x: any) => {
      if(!x.checked){
        item.extra = chk.value;
        this.subtotal(item);
      }else {
        item.extra = "";
        this.subtotal(item);
      }
      if (x.value !== chk.value) {
        x.checked = !x.checked
      }
    })
  }

    subtotal(item:any) {
      if(item.extra !== ""){
        item.subTotal = item.price * item.units + item.units
      } else {
        item.subTotal = item.price * item.units;
      }
    }

    addUnit(item: any) {
      item.units += 1;
      this.subtotal(item);
    }
  
    lessUnit(item:any) {
      if (item.units > 1) {
        item.units -= 1;
        this.subtotal(item);
      }
    }

    remove(position: number){
      this.foodRemove.emit(position);
      console.log(position);
    }
}