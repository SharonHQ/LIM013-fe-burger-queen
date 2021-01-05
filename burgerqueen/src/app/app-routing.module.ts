import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WaiterComponent} from './components/waiter/waiter.component'

const routes: Routes = [
  { path: 'waiter', component: WaiterComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
