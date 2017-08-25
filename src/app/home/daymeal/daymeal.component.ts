import {Component, Input, OnChanges,  OnInit} from '@angular/core';
import { Profile } from '../../profile/profile';

@Component({
  selector: 'app-daymeal',
  templateUrl: './daymeal.component.html',
  styleUrls: ['./daymeal.component.scss']
})
export class DaymealComponent implements OnInit, OnChanges {

  @Input() mealDate: any;
  @Input() profile: Profile;

  listOfMeals = [];
  date:  any;


  constructor() {
    // alert(this.mealDate);
    const today = new Date();
    this.date = today.getDate() +  '-' + today.getMonth() + '-' + today.getFullYear();
    this.poupulateMealDetails(this.date);
    console.log(this.date + 'meal');
  }

  ngOnInit() {
  }

  ngOnChanges() {
    this.poupulateMealDetails(this.mealDate);
  }

  editMealDetails($event) {
    $event.preventDefault();
  }

  deleteMealDetails($event, id) {
    this.listOfMeals.forEach((item, index) => {
      if (id === item.id) {
        this.listOfMeals.splice(index, 1);
      }
    });

    localStorage.setItem(this.date + 'meal', JSON.stringify(this.listOfMeals));
    $event.preventDefault();
  }

  // receivetotalDatesParent($showDate) {
  //      alert('daymeal component');
  // }

  poupulateMealDetails(date) {
    this.listOfMeals = JSON.parse(localStorage.getItem(date + 'meal'));
    this.listOfMeals = (this.listOfMeals != null && Array.isArray(this.listOfMeals)) ? this.listOfMeals : [];
  }
}
