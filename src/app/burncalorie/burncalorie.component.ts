import { Component, OnInit } from '@angular/core';
import { BurncalorieService } from './burncalorie.service';
import { ProfileService } from './../profile/profile.service';
import { Profile } from './../profile/profile';

@Component({
  selector: 'app-burncalorie',
  templateUrl: './burncalorie.component.html',
  styleUrls: ['./burncalorie.component.css']
})
export class BurncalorieComponent implements OnInit {

  workOutTypes: any;
  timeLeft: string;
  caloriConsumed: number;
  caloriePending: number;
  profile: Profile;
  calorieBurnInput: number;
  calorieBurnConst = 1000;

  constructor(private burncalorieService: BurncalorieService, private profileService: ProfileService) {
    const today = new Date();
    this.timeLeft = ( 24 - (today.getHours() + (today.getMinutes() / 60))).toFixed(1);
    this.profile = this.profileService.getUserDetails();
    this.caloriConsumed = this.burncalorieService.setCalorieConsumption();
    this.calorieBurnInput = this.calorieBurnConst;
  }

  ngOnInit() {
    this.workOutTypes = this.burncalorieService.getMeals();
  }

  onSlideChnage(event, index) {
    const range = Number.parseInt((<HTMLInputElement>event.target).value);
    this.workOutTypes[index].calorie = range * 1.75;
    this.workOutTypes[index].weight = range;
    let calorieBurnInputLoca = 0 ;
    for (const workout of this.workOutTypes) {
      calorieBurnInputLoca += isFinite(workout.calorie) ? workout.calorie : 0;
    }

    this.calorieBurnInput = calorieBurnInputLoca > 0 ?  (this.calorieBurnConst - calorieBurnInputLoca) : this.calorieBurnConst;

  }
}
