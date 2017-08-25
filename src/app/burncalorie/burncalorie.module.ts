import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BurncalorieRoutingModule } from './burncalorie-routing.module';
import { BurncalorieComponent } from './burncalorie.component';

@NgModule({
  imports: [
    CommonModule,
    BurncalorieRoutingModule, FormsModule
  ],
  declarations: [BurncalorieComponent]
})
export class BurncalorieModule { }
