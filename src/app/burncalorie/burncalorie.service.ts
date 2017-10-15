import { Injectable } from '@angular/core';
import { WorkOut } from './workout';
import { WorkOutTypes } from './mock-workout';

@Injectable()
export class BurncalorieService {

  constructor() { }

  getMeals(): WorkOut[] {
    return WorkOutTypes;
  }

  setCalorieConsumption() {
    let listOfMeals = JSON.parse(localStorage.getItem('10-15-2017meal'));
    listOfMeals = (listOfMeals != null && Array.isArray(listOfMeals)) ? listOfMeals : [];
    let intakeCaloricount = 0;
    for (const meal of listOfMeals) {
      intakeCaloricount += Number.parseInt(meal.totalCalories);
    }

    return intakeCaloricount;
  }
}
