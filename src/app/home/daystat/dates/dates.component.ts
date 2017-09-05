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

  constructor(private mealService: MealService) {
    const now = new Date();
    this.datesArray = [];
    const nowDate = now.getDate();
    // let count = nowDate - 9;
    this.datesArray = this.Last10Days().reverse();

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

  formatDate(date) {
    let dd = date.getDate();
    let mm = date.getMonth() + 1;
    const yyyy = date.getFullYear();
    if (dd < 10) { dd = '0' + dd; }
    if (mm < 10) { mm = '0' + mm; }
    date = mm + '-' + dd + '-' + yyyy;
    return date;
 }


Last10Days () {
  const result = [];
    for (let i = 0; i < 10; i++) {
       const d = new Date();
        d.setDate(d.getDate() - i);
        result.push(this.formatDate(d) );
    }
    return result;
 }

// console.log(Last7Days())

}
