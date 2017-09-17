import { CommonService } from './../../../common.service';
import { MealService } from './../../../mealform/meal.service';
import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { Profile } from '../../../profile/profile';

@Component({
  selector: 'app-dates',
  templateUrl: './dates.component.html',
  styleUrls: ['./dates.component.css']
})
export class DatesComponent implements OnInit {

  @Output() receivetotalDates: EventEmitter<number> = new EventEmitter<number>();
  @Input() profile: Profile;

  datesArray: any;

  constructor(private mealService: MealService, private commonService: CommonService) {
    const now = new Date();
    this.datesArray = [];
    const nowDate = now.getDate();
    // let count = nowDate - 9;
    this.datesArray = this.commonService.getDatesByDays(10).reverse();

    // for (const datestr of dateArray) {

    // }
    // while (count <= nowDate) {
    //   this.datesArray.push((count <= 9 ? '0' : '') + count + '-' + now.getMonth() + '-' + now.getFullYear());
    //   count++;
    // }

  }

  ngOnInit() {
  }

  populateMeals(event, date) {
    this.receivetotalDates.emit(date);
    this.mealService.newSubject.next(date);
    event.preventDefault();
  }

// console.log(Last7Days())

}
