import { Injectable } from '@angular/core';

@Injectable()
export class CommonService {

  constructor() { }

formatDate(date) {
    let dd = date.getDate();
    let mm = date.getMonth() + 1;
    const yyyy = date.getFullYear();
    if (dd < 10) { dd = '0' + dd; }
    if (mm < 10) { mm = '0' + mm; }
    date = mm + '-' + dd + '-' + yyyy;
    return date;
 }


getDatesByDays (daysCount: number) {
  const result = [];
    for (let i = 0; i < daysCount; i++) {
       const d = new Date();
        d.setDate(d.getDate() - i);
        result.push(this.formatDate(d) );
    }
    return result;
 }

 getDatesByDayAndDate (daysCount: number, dd: Date) {
  const result = [];
    for (let i = 0; i < daysCount; i++) {
        const d = new Date(dd);
        d.setDate(d.getDate() - i);
        result.push(this.formatDate(d) );
    }
    return result;
 }

 getDatesAfterORBefore (daysCount: number, dd: Date, futureOrPast: boolean) {
   let d;
   for (let i = 0; i < daysCount; i++) {
       d = new Date(dd);
       futureOrPast ? d.setDate(d.getDate() + i) : d.setDate(d.getDate() - i);
    }
    return  d;
 }

}
