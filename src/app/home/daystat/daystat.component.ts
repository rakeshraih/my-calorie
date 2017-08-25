import { Component, OnInit, Input } from '@angular/core';
import { Profile } from '../../profile/profile';
import {forEach} from "@angular/router/src/utils/collection";

@Component({
  selector: 'app-daystat',
  templateUrl: './daystat.component.html',
  styleUrls: ['./daystat.component.scss']
})
export class DaystatComponent implements OnInit {

  @Input() profile: Profile;

  mealDate: string;
  timeLeft: string;
  caloriConsumed: number;
  caloriePending: number;
  constructor() {
    const today = new Date();
    this.mealDate = today.getDate() +  '-' + today.getMonth() + '-' + today.getFullYear();
    this.timeLeft = ( 24 - today.getHours() + (today.getMinutes() / 60)).toFixed(1);
    this.caloriePending =100;
    this.setCalorieConsumption();
  }

  ngOnInit() {
  }

  editCaloprieIntake(event) {

  }

  receivetotalDatesParent($mealDate) {
    this.mealDate = $mealDate;
  }

  setCalorieConsumption() {
      let listOfMeals = JSON.parse(localStorage.getItem(this.mealDate + 'meal'));
      listOfMeals = (listOfMeals != null && Array.isArray(listOfMeals)) ? listOfMeals : [];
       let intakeCaloricount = 0;
      for (const meal of listOfMeals) {
        intakeCaloricount += Number.parseInt(meal.totalCalories);
      }

      this.caloriConsumed = intakeCaloricount;
    }

}
