import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BurncalorieRoutingModule } from './burncalorie-routing.module';
import { BurncalorieComponent } from './burncalorie.component';
import { BurncalorieService } from './burncalorie.service';

@NgModule({
  imports: [
    CommonModule,
    BurncalorieRoutingModule, FormsModule
  ],
  declarations: [BurncalorieComponent],
  providers: [BurncalorieService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BurncalorieModule { }
