import {Component, OnInit, Input, OnChanges} from '@angular/core';
import { Profile } from '../../profile/profile';
import {HomeService} from "../home.service";
import {ProfileService} from "../../profile/profile.service";
import {MealService} from "../../mealform/meal.service";

@Component({
  selector: 'app-consumebar',
  templateUrl: './consumebar.component.html',
  styleUrls: ['./consumebar.component.scss']
})
export class ConsumebarComponent implements OnInit, OnChanges {

  // @Input('profile')
  profile: Profile;
  pendingCalorie: number;
  consumedCalorie: number;
  cosumedPercent: Number = 0;
  pendingPercent: Number = 100;

  constructor(private mealService: MealService, private profileService: ProfileService) {
    this.profile = this.profileService.profile;
  }

  ngOnInit() {
    this.setCalorieConsumption();

    this.mealService.newSubject.subscribe(
      data => this.setCalorieConsumption()
    );
  }

  ngOnChanges() {
  }

  setCalorieConsumption() {
    const listOfMeals = this.mealService.getTodaysMealList();
    let intakeCaloricount = 0;
    for (const meal of listOfMeals) {
      intakeCaloricount += Number.parseInt(meal.totalCalories + '');
    }

    this.consumedCalorie = intakeCaloricount;
    this.cosumedPercent = Math.round((this.consumedCalorie * 100 ) / this.profile.caloriIntake);
    this.pendingPercent = Math.round(((this.profile.caloriIntake - this.consumedCalorie) * 100) / this.profile.caloriIntake);
  }

}
