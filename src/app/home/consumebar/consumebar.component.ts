import {Component, OnInit, Input, OnChanges} from '@angular/core';
import { Profile } from '../../profile/profile';

@Component({
  selector: 'app-consumebar',
  templateUrl: './consumebar.component.html',
  styleUrls: ['./consumebar.component.scss']
})
export class ConsumebarComponent implements OnInit, OnChanges {

  @Input('profile') profile: Profile;
  pendingCalorie: number;
  consumedCalorie: number;
  mealDate: String;
  cosumedPercent: Number = 0;
  pendingPercent: Number = 100;

  constructor() {
    const today = new Date();
    this.mealDate = today.getDate() +  '-' + today.getMonth() + '-' + today.getFullYear();
    //this.pendingCalorie = ((this.profile.caloriIntake * 100 ) / (this.profile.caloriIntake + this.profile.calorieconsumed)).toFixed(2);
    //this.consumedCalorie = ((this.profile.calorieconsumed * 100 ) / (this.profile.caloriIntake + this.profile.calorieconsumed)).toFixed(2);
    //this.pendingCalorie = '30';
    //this.consumedCalorie = '70';
  }

  ngOnInit() {
    this.setCalorieConsumption();
  }

  ngOnChanges() {
  }

  setCalorieConsumption() {
    let listOfMeals = JSON.parse(localStorage.getItem(this.mealDate + 'meal'));
    listOfMeals = (listOfMeals != null && Array.isArray(listOfMeals)) ? listOfMeals : [];
    let intakeCaloricount = 0;
    for (const meal of listOfMeals) {
      intakeCaloricount += Number.parseInt(meal.totalCalories);
    }

    this.consumedCalorie = intakeCaloricount;
    this.cosumedPercent = Math.round((this.consumedCalorie * 100 ) / this.profile.caloriIntake);
    this.pendingPercent = Math.round(((this.profile.caloriIntake - this.consumedCalorie) * 100) / this.profile.caloriIntake);
  }

}
