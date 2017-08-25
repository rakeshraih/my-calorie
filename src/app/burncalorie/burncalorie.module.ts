import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BurncalorieRoutingModule } from './burncalorie-routing.module';
import { BurncalorieComponent } from './burncalorie.component';

@NgModule({
  imports: [
    CommonModule,
    BurncalorieRoutingModule
  ],
  declarations: [BurncalorieComponent]
})
export class BurncalorieModule { }
