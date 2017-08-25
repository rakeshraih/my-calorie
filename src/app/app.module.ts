import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import {HttpModule} from '@angular/http';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { StatsComponent } from './stats/stats.component';
import { ChartComponent } from './home/chart/chart.component';
import { DaystatComponent } from './home/daystat/daystat.component';
import { DaymealComponent } from './home/daymeal/daymeal.component';
import { ChartsModule } from 'ng2-charts';
import { DonutchartComponent } from './home/donutchart/donutchart.component';
import { FixedfooterComponent } from './footer/fixedfooter/fixedfooter.component';
import { ConsumebarComponent } from './home/consumebar/consumebar.component';
import { CalorieintakeComponent } from './calorieintake/calorieintake.component';

import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ProfileComponent} from './profile/profile.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { HomeComponent } from './home/home.component';
import { MealformComponent } from './mealform/mealform.component';
import { MealtypeComponent } from './mealform/mealtype/mealtype.component';
import { BurncalorieComponent } from './burncalorie/burncalorie.component';
import { DatesComponent } from './home/daystat/dates/dates.component';

// service
import {ProfileService} from './profile/profile.service';
import {MealService} from './mealform/meal.service';

const appRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'profile',      component: ProfileComponent },
  { path: 'home', component: HomeComponent},
  { path: 'meal', component: MealformComponent},
  { path: 'meal/:id', component: MealformComponent},
  { path: 'burn-calorie', component: BurncalorieComponent},
  { path: '#', redirectTo: '/home' , pathMatch: 'full'},
  { path: '', redirectTo: '/home' , pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponentComponent }


];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    StatsComponent,
    ChartComponent,
    DaystatComponent,
    DaymealComponent,
    DonutchartComponent,
    FixedfooterComponent,
    ConsumebarComponent,
    CalorieintakeComponent,
    DashboardComponent,
    ProfileComponent,
    PageNotFoundComponentComponent,
    HomeComponent,
    MealformComponent,
    MealtypeComponent,
    BurncalorieComponent,
    DatesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ChartsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [MealService, ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
