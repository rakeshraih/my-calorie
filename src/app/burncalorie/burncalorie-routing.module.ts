import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BurncalorieComponent } from './burncalorie.component';

const routes: Routes = [
  { path: 'burn-calorie', component: BurncalorieComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BurncalorieRoutingModule { }
