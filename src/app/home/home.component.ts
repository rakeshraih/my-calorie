import { Component, OnInit } from '@angular/core';
import { ProfileService } from './../profile/profile.service';
import { Profile } from './../profile/profile';
import { Router } from '@angular/router';
import { CALORIEBURNSTATS } from './calorie-burn-stats';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  profile = new Profile();
  daysQuotes= '';

  constructor(private profileService: ProfileService, private router: Router) {
    this.profile = this.profileService.getUserDetails();
    if (Object.keys(this.profile).length === 0) {
      this.router.navigate(['/profile']);
    }
     //  this.profile.calorieconsumed = 100;
    //  this.profile.emailId = 'rakeshraih@gmail.com';
    // this.profile.name = 'test'
    // this.profile.age = 1;
    // this.profile.weight = 1;
    // this.profile.height = 1;
    // this.profile.caloriIntake = 1;
    // this.profile.calorieconsumed = 1;
  }

  ngOnInit() {
    this.daysQuotes = CALORIEBURNSTATS[Math.floor(Math.random() * ( (CALORIEBURNSTATS.length - 1) - 0 + 1 ) + 0)];
    // Math.floor(Math.random()*(max-min+1)+min);
  }

}
