import { MealService } from './../../mealform/meal.service';
import { Component, OnInit, Input } from '@angular/core';
import { Profile } from '../../profile/profile';
import {forEach} from '@angular/router/src/utils/collection';

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
  monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  monthYear: string;
  constructor(private mealService: MealService) {
    const today = new Date();
    this.mealDate = this.mealService.getFormattedDate(new Date());
    this.timeLeft = ( 24 - (today.getHours() + (today.getMinutes() / 60))).toFixed(1);
    this.monthYear = this.monthNames[today.getMonth()] + ' ' + today.getFullYear();
  }

  ngOnInit() {
    this.setCalorieConsumption();
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
