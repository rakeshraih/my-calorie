import { Component, OnInit, Input } from '@angular/core';
import { Profile } from '../../profile/profile';
import {MealService} from '../../mealform/meal.service';
import { Http } from '@angular/http';
import { Meal } from '../../mealform/meal';

@Component({
  selector: 'app-donutchart',
  templateUrl: './donutchart.component.html',
  styleUrls: ['./donutchart.component.css']
})
export class DonutchartComponent implements OnInit {

  @Input('profile') profile: Profile;


  doughnutChartLabels: string[] = [];
  doughnutChartData: number[] = [];
  doughnutChartType: String = 'doughnut';
  listOfMeals: any;
  consumedMeal = 0;

  constructor(private mealService: MealService) {
    this.doughnutChartData = [];
    this.doughnutChartData = [];
  }

  ngOnInit() {

    // this.mealService.getDonutChartObserve().subscribe(
    //   data => this.doughnutChartData = data,
    //   error => {}
    // );

    this.mealService.newSubject.subscribe(
      data => this.changeChart(null, 'default', data),
      error => alert(error)
    );
    //
    // this.doughnutChartData = this.mealService.getDonutChartData(null);
    // //this.doughnutChartLabels = ['Calorie intake', 'Calorie excess', 'Calorie pending'];
    // this.doughnutChartLabels.push('Calorie intake');
    // this.doughnutChartLabels.push('Calorie excess');
    // this.doughnutChartLabels.push('Calorie pending');
    this.changeChart(null, 'time', null);

  }
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

  changeChart(event, chartType: string, date: string) {

    const labelArray = [];
    const colorArray = [];
    const dataArray = [];


    this.doughnutChartLabels.length = 0;
    this.doughnutChartData.length = 0;

    if ( chartType === 'allmeals') {

      const mealList = this.mealService.getTodaysMealList();
      for (const meal of mealList){
        this.doughnutChartLabels.push(meal.mealName);
        dataArray.push(meal.totalCalories);
      }

      this.doughnutChartData = dataArray;

    }else if ( chartType === 'time') {

      const mealList = this.mealService.getMealListByDate(date);
      for (const meal of mealList){
        this.doughnutChartLabels.push(meal.mealName);
        dataArray.push(Number.parseInt(meal.mealTime.toString().split(':')[0]));
      }

      this.doughnutChartData = dataArray;

    }else if ( chartType === 'default') {
      this.doughnutChartLabels.push('Calorie intake');
      this.doughnutChartLabels.push('Calorie excess');
      this.doughnutChartLabels.push('Calorie pending');
      this.doughnutChartData = this.mealService.getDonutChartData(null);
      //  const localarray = this.mealService.getDonutChartData(null);
      //  for (const data of localarray) {
      //    this.doughnutChartData.push(data);
      //    this.doughnutChartLabels.push(locallabel[this.doughnutChartData.length - 1]);
      //  }
    }

    event != null ? event.preventDefault() : true;
  }

}

