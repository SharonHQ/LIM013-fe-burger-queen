import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ProductsComponent } from './components/waiter/products/products.component';
import { OrderComponent } from './components/waiter/order/order.component';

import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { WaiterComponent } from './components/waiter/waiter.component';
import { ChefComponent } from './components/chef/chef.component';
import { HeaderComponent } from './components/header/header.component';
import { AsideComponent } from './components/waiter/aside/aside.component';
import { ItemComponent } from './components/waiter/products/item/item.component';
import { FoodComponent } from './components/waiter/order/food/food.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    OrderComponent,
    WaiterComponent,
    ChefComponent,
    HeaderComponent,
    AsideComponent,
    ItemComponent,
    FoodComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireModule,
    CommonModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
