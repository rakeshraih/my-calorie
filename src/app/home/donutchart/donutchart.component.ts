import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-donutchart',
  templateUrl: './donutchart.component.html',
  styleUrls: ['./donutchart.component.css']
})
export class DonutchartComponent implements OnInit {



  public doughnutChartLabels: string[] = ['Calorie intake', 'Calorie excess', 'Calorie pending'];
  public doughnutChartData: number[] = [350, 450, 100];
  public doughnutChartType: String = 'doughnut';

  constructor() { }

  ngOnInit() {
  }
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

}

