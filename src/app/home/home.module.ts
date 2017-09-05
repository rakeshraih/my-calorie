import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MealType } from './../mealform/mealtype';

import { HomeRoutingModule } from './home-routing.module';
import { ChartsModule } from 'ng2-charts';
// declare
import { HomeComponent } from './home.component';
import { ChartComponent } from './chart/chart.component';
import { DaystatComponent } from './daystat/daystat.component';
import { DaymealComponent } from './daymeal/daymeal.component';
import { DatesComponent } from './daystat/dates/dates.component';
import { DonutchartComponent } from './donutchart/donutchart.component';
import { ConsumebarComponent } from './consumebar/consumebar.component';
import { StatsComponent } from './stats/stats.component';
import {HomeService} from './home.service';


@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    ChartsModule
  ],
  declarations: [
    ChartComponent,
    DaystatComponent,
    DaymealComponent,
    HomeComponent,
    DonutchartComponent,
    ConsumebarComponent,
    StatsComponent,
    DatesComponent
  ],
  providers: [HomeService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule { }
