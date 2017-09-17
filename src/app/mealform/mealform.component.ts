import { MealService } from './meal.service';
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
  validMeal = false;
  mealName  = '';
  mealTime: any;
  mealDate: any;
  mealDateTime: any;
  id: number;
  date = '';

  constructor(private router: Router, private route: ActivatedRoute, private mealService: MealService) {

    this.parentVar = '';
    const today = new Date();
    this.date = this.mealService.getFormattedDate(new Date());
    if (this.route.snapshot.paramMap.get('id')  && this.route.snapshot.paramMap.get('date')) {
      this.id = Number.parseInt(this.route.snapshot.paramMap.get('id'));
      this.mealDate = this.route.snapshot.paramMap.get('date');
      const listOfMeals = JSON.parse(localStorage.getItem(this.mealDate + 'meal'));
      for (const meal of listOfMeals){
          if ( this.id === meal.id ) {
            this.totalCalories = meal.totalCalories;
            this.mealName = meal.mealName;
            this.mealDateTime = new Date(meal.date.replace('-', '/') + ' ' + meal.mealTime + ':00');
          }
      }
    }else {
      this.totalCalories = 100;
      let month = today.getMonth(); month++;
      this.mealName = 'Meal 1';
      this.mealDateTime =  new Date();
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

    // const listOfMeals = JSON.parse(localStorage.getItem(this.date + 'meal'));

    // if (this.id) {
    //   for (const meal of listOfMeals){
    //     if ( this.id === meal.id ) {
    //       meal.totalCalories = this.totalCalories;
    //       meal.mealName = this.mealName;
    //       meal.mealTime = this.mealTime;
    //       meal.mealDate = this.date;
    //     }
    //   }
    //   localStorage.setItem(this.date + 'meal', JSON.stringify(listOfMeals));
    // }else {
        const nowTime = new Date();
    //     const valueObject = {'totalCalories' : this.totalCalories, 'date' :
    //      this.date, 'mealName' : this.mealName, 'mealTime' : this.mealTime, 'id': nowTime.getTime()};
    //     // listOfMeals = (listOfMeals != null && Array.isArray(listOfMeals) ) ? listOfMeals : [];
    //     // listOfMeals.push(valueObject);
    //     this.mealService.addMeal(valueObject);
    // }
    const formDate = new Date(this.mealDateTime._d);
    if (!formDate) {
       return;
    }
    this.mealDate = this.mealService.getFormattedDate(formDate);
    this.mealTime = formDate.getHours() + ':' + formDate.getMinutes();
    const valueObject = {'totalCalories' : this.totalCalories, 'date' :
    this.mealDate, 'mealName' : this.mealName, 'mealTime' : this.mealTime, 'id': this.id ? this.id : nowTime.getTime()};
    this.mealService.addMeal(valueObject);
    this.router.navigate(['/home']);

  }

}
