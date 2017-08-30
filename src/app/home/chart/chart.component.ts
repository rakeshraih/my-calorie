import {Component, Input, OnInit} from '@angular/core';
import { Profile } from '../../profile/profile';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  @Input('profile') profile: Profile;
  constructor() { }

  ngOnInit() {
  }

}
