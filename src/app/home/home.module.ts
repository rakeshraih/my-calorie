import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';

// declare
import { HomeComponent } from './home.component';
import { ChartComponent } from './chart/chart.component';
import { DaystatComponent } from './daystat/daystat.component';
import { DaymealComponent } from './daymeal/daymeal.component';
import { DatesComponent } from './daystat/dates/dates.component';
import { DonutchartComponent } from './donutchart/donutchart.component';
import { ConsumebarComponent } from './consumebar/consumebar.component';
import { StatsComponent } from './stats/stats.component';


@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule
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
  ]
})
export class HomeModule { }
