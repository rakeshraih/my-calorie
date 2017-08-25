import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mealform',
  templateUrl: './mealform.component.html',
  styleUrls: ['./mealform.component.scss']
})
export class MealformComponent implements OnInit {

  totalCalories: number;
  parentVar: string;
  validMeal = true;
  mealName  = '';
  mealTime: any;
  mealDate: any;
  id: number;
  date = '';

  constructor(private router: Router, private route: ActivatedRoute) {

    this.parentVar = '';
    const today = new Date();
    this.date = today.getDate() +  '-' + today.getMonth() + '-' + today.getFullYear();
    if (this.route.snapshot.paramMap.get('id')) {
      this.id = Number.parseInt(this.route.snapshot.paramMap.get('id'));
      const listOfMeals = JSON.parse(localStorage.getItem(this.date + 'meal'));
      for (const meal of listOfMeals){
          if ( this.id === meal.id ) {
            this.totalCalories = meal.totalCalories;
            this.mealName = meal.mealName;
            this.mealTime = meal.mealTime;
            this.mealDate = this.date;
          }
      }
    }
  }

  ngOnInit() {
  }

  receivetotalCaloriesFromChild($event) {
    this.totalCalories = $event;
  }


  validateData(event) {

    if (this.totalCalories !== 0 && this.mealName !== '' && this.mealDate != null && this.mealTime != null) {
        this.validMeal = false;
    }
  }

  submitMealDetails($event) {

    let listOfMeals = JSON.parse(localStorage.getItem(this.date + 'meal'));

    if (this.id) {
      for (const meal of listOfMeals){
        if ( this.id === meal.id ) {
          meal.totalCalories = this.totalCalories;
          meal.mealName = this.mealName;
          meal.mealTime = this.mealTime;
          meal.mealDate = this.date;
        }
      }

    }else {
        const nowTime = new Date();
        const valueObject = {'totalCalories' : this.totalCalories, 'date' : this.date, 'mealName' : this.mealName, 'mealTime' : this.mealTime, 'id': nowTime.getTime()};
        listOfMeals = (listOfMeals != null && Array.isArray(listOfMeals) ) ? listOfMeals : [];
        listOfMeals.push(valueObject);
    }
    localStorage.setItem(this.date + 'meal', JSON.stringify(listOfMeals));
    this.router.navigate(['/home']);

  }

}
