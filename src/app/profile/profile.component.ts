import { Component, OnInit } from '@angular/core';
import { Profile } from './profile';
import { Router } from '@angular/router';
import { ProfileService } from './profile.service';
import {isBoolean} from 'util';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile: Profile = new Profile();
  validForm = false;
  constructor(private router: Router, private profileService: ProfileService) {
    const localProfile = this.profileService.getUserDetails();
    this.profile = localProfile != null ? localProfile : new Profile();
    this.profile.activityLevel = this.profile.activityLevel ? this.profile.activityLevel : 1;

  }

  ngOnInit() {
  }

  validateData($event) {

    if (this.profile.emailId != null) {
      this.validForm = false;
    }

    this.calculateCalorieNeed();

    $event.returnValue = false;
    $event.stopPropagation();
  }

  submitMealDetails(event) {
    this.profileService.saveProfile(this.profile);
    this.router.navigate(['/home']);
  }

  reset(event) {
    this.profile = new Profile();
    this.validForm = true;
  }

  calculateCalorieNeed() {

    if (this.profile.caloriIntake > 13000 || this.profile.weight > 600 || this.profile.height > 100 || this.profile.age > 110) {
      this.validForm = true;
      return;
    }

    if ('male' === this.profile.sex) {
      this.profile.caloriIntake = Math.round(((this.profile.height * 4.7) + (this.profile.weight * 4.35 ) - (this.profile.age * 4.7 ) + 655 ) * this.profile.activityLevel);
    }else {
      this.profile.caloriIntake = Math.round(((this.profile.height * 12.7 ) + (this.profile.weight * 2.23 ) - (this.profile.age * 6.8 ) + 66 ) * this.profile.activityLevel);
    }



  }
}
