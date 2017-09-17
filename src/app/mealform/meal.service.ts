import { Injectable } from '@angular/core';
import { Subject} from 'rxjs/Subject';

import { Meal } from './meal';
import { MealType } from './mealtype';

import { MEALSTYPE } from './mock-meals';
import {ProfileService} from '../profile/profile.service';
import {Observable} from 'rxjs/Observable';

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
    const listOfMeals = JSON.parse(localStorage.getItem(this.getFormattedDate(new Date()) + 'meal'));
    this.todaysMealList = (listOfMeals != null && Array.isArray(listOfMeals)) ? listOfMeals : [];
    return this.todaysMealList;
  }

  getMealListByDate(date: string): Meal[] {
    date = date ? date : this.getFormattedDate(new Date());
    const listOfMeals = JSON.parse(localStorage.getItem(date + 'meal'));
    this.todaysMealList = (listOfMeals != null && Array.isArray(listOfMeals)) ? listOfMeals : [];
    return this.todaysMealList;
  }

  addMeal(meal: Meal) {


    let listOfMeals = JSON.parse(localStorage.getItem(meal.date + 'meal'));

    const searchObject = !listOfMeals ? null : listOfMeals.find(x => x.id === meal.id);

    if ( searchObject ) {
      searchObject.totalCalories = meal.totalCalories;
      searchObject.mealName = meal.mealName;
      searchObject.mealTime = meal.mealTime;
      searchObject.mealDate = meal.date;
    }else {
      listOfMeals = (listOfMeals != null && Array.isArray(listOfMeals) ) ? listOfMeals : [];
      listOfMeals.push(meal);
    }

    localStorage.setItem(meal.date + 'meal', JSON.stringify(listOfMeals));

  }

  deleteMeal(mealLocal) {
    const meals = this.getMealListByDate(mealLocal.date);
    meals.forEach((meal: Meal, index) => {
      if (mealLocal.id === meal.id) {
        meals.splice(index, 1);
      }
    });

    localStorage.setItem(mealLocal.date + 'meal', JSON.stringify(meals));
    this.calculateDonutchart(mealLocal.date);
    this.newSubject.next(mealLocal.date);
  }

  getDonutChartData(date: string): number[] {
    date = date ? date : this.getFormattedDate(new Date());
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
    this.donutChartMap.push((totalCalorie - this.profileService.profile.caloriIntake) < 0 ?
    0 : (totalCalorie - this.profileService.profile.caloriIntake));
    this.donutChartMap.push(this.profileService.profile.caloriIntake - totalCalorie);
    return this.donutChartMap;
  }

  getFormattedDate(date): string {
    let dd: any = date.getDate();
    let mm: any = date.getMonth() + 1;
    const yyyy = date.getFullYear();
    if (dd < 10) { dd = '0' + dd; }
    if (mm < 10) { mm = '0' + mm; }
    return mm + '-' + dd + '-' + yyyy;
  }
}
