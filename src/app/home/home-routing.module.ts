import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  // { path: 'home', redirectTo: '/profile' , pathMatch: 'full'},
  { path: '#', redirectTo: '/home' , pathMatch: 'full'},
  { path: '', redirectTo: '/home' , pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
