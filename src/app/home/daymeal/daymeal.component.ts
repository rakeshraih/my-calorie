import {Component, Input, OnChanges,  OnInit} from '@angular/core';
import { Profile } from '../../profile/profile';
import {MealService} from '../../mealform/meal.service';

@Component({
  selector: 'app-daymeal',
  templateUrl: './daymeal.component.html',
  styleUrls: ['./daymeal.component.scss']
})
export class DaymealComponent implements OnInit, OnChanges {

  @Input() mealDate: string;
  @Input() profile: Profile;

  listOfMeals = [];
  date:  any;


  constructor(private mealService: MealService) {
    // alert(this.mealDate);
    const today = new Date();
    this.date = today.getDate() +  '-' + today.getMonth() + '-' + today.getFullYear();
    // this.poupulateMealDetails(this.date);
    // console.log(this.date + 'meal');
  }

  ngOnInit() {
    this.listOfMeals = this.mealService.getMealListByDate(this.mealDate);

    this.mealService.newSubject.subscribe(
      data => this.listOfMeals = this.mealService.getMealListByDate(this.mealDate)
    );
  }

  ngOnChanges() {
    this.listOfMeals = this.mealService.getMealListByDate(this.mealDate);
    this.mealService.newSubject.next(this.mealDate);
  }

  editMealDetails($event) {
    $event.preventDefault();
  }

  deleteMealDetails($event, meal) {
    this.mealService.deleteMeal(meal);
    $event.preventDefault();
  }

  // receivetotalDatesParent($showDate) {
  //      alert('daymeal component');
  // }

}
