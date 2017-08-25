import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MealService } from './../meal.service';

@Component({
  selector: 'app-mealtype',
  templateUrl: './mealtype.component.html',
  styleUrls: ['./mealtype.component.scss']
})
export class MealtypeComponent implements OnInit {

  mealTyleList: any;
  totalCalories= 0;


  @Input() parentVar: string;

  @Output() totalCaloriesEvent = new EventEmitter<number>();

  constructor(private mealService: MealService) {
    this.mealTyleList = this.mealService.getMeals();
  }


  ngOnInit() {
  }

  onSlideChnage(event, index) {
    const range = Number.parseInt((<HTMLInputElement>event.target).value);
    this.mealTyleList[index].weight = range;
    this.mealTyleList[index].calorie = range * 1.75;
    this.totalCalories = 0 ;
    for (const meal of this.mealTyleList) {
      this.totalCalories += isFinite(meal.calorie) ? meal.calorie : 0;
    }

    if (this.totalCalories > 2500) {
      event.preventDefault();
    }
    this.sendtotalCaloriesToParent();

  }

  sendtotalCaloriesToParent() {
    this.totalCaloriesEvent.emit(this.totalCalories);
  }



}
