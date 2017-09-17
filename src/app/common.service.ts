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
}
