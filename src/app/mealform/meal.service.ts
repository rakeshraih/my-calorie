import { Injectable } from '@angular/core';
import { Subject} from 'rxjs/Subject';

import { Meal } from './meal';
import { MealType } from './mealtype';

import { MEALSTYPE } from './mock-meals';
import {ProfileService} from '../profile/profile.service';
import {Observable} from "rxjs/Observable";

@Injectable()
export class MealService {

  private todaysMealList: Meal[] = [];
  private donutChartMap: number[] = [];

  public newSubject = new Subject<any>()
  constructor(private profileService: ProfileService) {

  }
  getMeals(): MealType[] {
    return MEALSTYPE;
  }

  getTodaysMealList(): Meal[] {
    const listOfMeals = JSON.parse(localStorage.getItem(this.getTodaysDate() + 'meal'));
    this.todaysMealList = (listOfMeals != null && Array.isArray(listOfMeals)) ? listOfMeals : [];
    return this.todaysMealList;
  }

  getMealListByDate(date: string): Meal[] {
    date = date ? date : this.getTodaysDate();
    const listOfMeals = JSON.parse(localStorage.getItem(date + 'meal'));
    this.todaysMealList = (listOfMeals != null && Array.isArray(listOfMeals)) ? listOfMeals : [];
    return this.todaysMealList;
  }

  addMeal(meal: Meal) {


    let listOfMeals = JSON.parse(localStorage.getItem(meal.date + 'meal'));

    if (meal.id) {
      for (const mealLocal of listOfMeals){
        if ( meal.id === mealLocal.id ) {
          mealLocal.totalCalories = meal.totalCalories;
          mealLocal.mealName = meal.mealName;
          mealLocal.mealTime = meal.mealTime;
          mealLocal.mealDate = meal.date;
        }
      }

    }else {
      const nowTime = new Date();
      meal.id = nowTime.getTime();
      listOfMeals = (listOfMeals != null && Array.isArray(listOfMeals) ) ? listOfMeals : [];
      listOfMeals.push(meal);
    }
    localStorage.setItem(meal.date + 'meal', JSON.stringify(listOfMeals));

  }

  deleteMeal(date, id) {
    const meals = this.todaysMealList;
    meals.forEach((meal: Meal, index) => {
      if (id === meal.id) {
        this.todaysMealList.splice(index, 1);
      }
    });

    localStorage.setItem(date + 'meal', JSON.stringify(this.todaysMealList));
    this.calculateDonutchart(date);
    this.newSubject.next(date);
  }

  getDonutChartData(date: string): number[] {
    date = date ? date : this.getTodaysDate();
    return this.calculateDonutchart(date);
  }

  calculateDonutchart(date: string) {

    this.donutChartMap.length = 0;
    const listOfMeals = this.getMealListByDate(date);
    let totalCalorie = 0;
    for (const meal of listOfMeals ){
      totalCalorie = totalCalorie + Number.parseInt(meal.totalCalories + '');
    }

    this.donutChartMap.push(totalCalorie);
    this.donutChartMap.push((totalCalorie - this.profileService.profile.caloriIntake) < 0 ? 0 : (totalCalorie - this.profileService.profile.caloriIntake));
    this.donutChartMap.push(this.profileService.profile.caloriIntake - totalCalorie);
    return this.donutChartMap;
  }

  getTodaysDate(): string {
    const today = new Date();
    return today.getDate() +  '-' + today.getMonth() + '-' + today.getFullYear();
  }
}
