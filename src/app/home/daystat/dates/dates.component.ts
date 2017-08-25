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

  constructor() {
    const now = new Date();
    this.datesArray = [];
    const nowDate = now.getDate();
    let count = nowDate - 9;
    while (count <= nowDate) {
      this.datesArray.push((count <= 9 ? '0' : '') + count + '-' + now.getMonth() + '-' + now.getFullYear());
      count++;
    }

  }

  ngOnInit() {
  }

  populateMeals(event, date) {
    this.receivetotalDates.emit(date);
    event.preventDefault();
  }

}
