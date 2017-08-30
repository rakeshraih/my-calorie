import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import {HttpModule} from '@angular/http';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { FixedfooterComponent } from './footer/fixedfooter/fixedfooter.component';
import { CalorieintakeComponent } from './calorieintake/calorieintake.component';

import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { MealformComponent } from './mealform/mealform.component';
import { MealtypeComponent } from './mealform/mealtype/mealtype.component';


// service
import {ProfileService} from './profile/profile.service';
import {MealService} from './mealform/meal.service';

// import custom modules
import { HomeModule } from './home/home.module';
import { BurncalorieModule } from './burncalorie/burncalorie.module';
import { ProfileModule } from './profile/profile.module';
import { MyDatePickerModule } from 'mydatepicker';

const appRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  // { path: 'home', component: HomeComponent},
  { path: 'meal', component: MealformComponent},
  { path: 'meal/:id', component: MealformComponent},
  // { path: 'burn-calorie', loadChildren: 'app/burncalorie/burncalorie.module#BurncalorieModule'},
  // { path: 'home', loadChildren: 'app/home/home.module#HomeModule' },
  // { path: '#', redirectTo: '/home' , pathMatch: 'full'},
  // { path: '', redirectTo: '/home' , pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponentComponent }


];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FixedfooterComponent,
    CalorieintakeComponent,
    DashboardComponent,
    PageNotFoundComponentComponent,
    MealformComponent,
    MealtypeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HomeModule,
    BurncalorieModule,
    ProfileModule,
    MyDatePickerModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [MealService, ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
