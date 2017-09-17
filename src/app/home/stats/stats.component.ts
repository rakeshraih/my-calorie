import { CommonService } from './../../common.service';
import { MealService } from './../../mealform/meal.service';
import { Component, OnInit } from '@angular/core';
import { Meal } from './../../mealform/meal';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels: string[] = [];
  public barChartType = 'bar';
  public barChartLegend = true;

  public barChartData: any [] = [{data: [], label: 'Calories'}];

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  public randomize(): void {
    // Only Change 3 values
    const data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40];
    const clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;
    /**
     * (My guess), for Angular to recognize the change in the dataset
     * it has to change the dataset variable directly,
     * so one way around it, is to clone the data, change it and then
     * assign it;
     */
  }
  constructor(private mealService: MealService, private commonService: CommonService) {

  }

  ngOnInit() {

    this.mealService.newSubject.subscribe(
      data => {
        this.barChartLabels = this.commonService.getDatesByDays(30);
        this.setDataForChart();
      },
      error => alert(error)
    );
  }

setDataForChart() {

   let totalCalories = 0;
   const dataArray = [];
   const labelArray = [];

   //debugger;
   for (const datestr of this.barChartLabels) {
    const listOfMeals = this.mealService.getMealListByDate(datestr);
    totalCalories = 0;
    const datestrArray = datestr.split('-');
    labelArray.push(datestrArray[0] + '/' + datestrArray[1]);
    if ( !listOfMeals || listOfMeals.length === 0) {
      dataArray.push(totalCalories);
      continue;
    }
    for (const meal of listOfMeals ) {
      totalCalories += meal.totalCalories;
     }
     dataArray.push(totalCalories);
   }

   this.barChartData[0]['data'] = dataArray.reverse();
   this.barChartLabels = labelArray.reverse();

 }

}
