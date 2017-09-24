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
  currentDate: Date;
  nextDateShow: boolean;
  monthYear: string;
  monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];  
  nextDate: Date;
  previousDate: Date;

  constructor(private mealService: MealService, private commonService: CommonService) {
    const now = new Date();
    this.datesArray = [];
    const nowDate = now.getDate();
    // let count = nowDate - 9;
    this.currentDate = new Date();
    this.datesArray = this.commonService.getDatesByDayAndDate(10, this.currentDate).reverse();
    console.log(this.datesArray);
    this.nextDate = new Date();
    this.previousDate = this.commonService.getDatesAfterORBefore(10, this.nextDate, false);
    this.monthYear = this.monthNames[this.currentDate.getMonth()] + ' ' + this.currentDate.getFullYear();

  }

  ngOnInit() {
  }

  populateMeals(event, date) {
    this.receivetotalDates.emit(date);
    this.mealService.newSubject.next(date);
    event.preventDefault();
  }

  loadPreviousDate(event) {
    this.nextDate = this.previousDate;
    this.previousDate = this.commonService.getDatesAfterORBefore(10, this.previousDate, false);

    this.datesArray = this.commonService.getDatesByDayAndDate(10, this.nextDate).reverse();
    this.nextDateShow = true;
    this.monthYear = this.monthNames[this.nextDate.getMonth()] + ' ' + this.nextDate.getFullYear();    
    event.preventDefault();
  }


  loadNextDate(event) {

    debugger;
    this.previousDate = this.nextDate;
    this.nextDate = this.commonService.getDatesAfterORBefore(10, this.nextDate, true);
    
    this.datesArray = this.commonService.getDatesByDayAndDate(10, this.nextDate).reverse();
    this.nextDateShow =  this.nextDate.setHours(0, 0, 0, 0) === new Date().setHours(0, 0, 0, 0) ? false : true;
    this.monthYear = this.monthNames[this.nextDate.getMonth()] + ' ' + this.nextDate.getFullYear();    
    event.preventDefault();
  }

}
