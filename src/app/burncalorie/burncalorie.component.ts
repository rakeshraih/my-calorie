import { Component, OnInit } from '@angular/core';
import { BurncalorieService } from './burncalorie.service';

@Component({
  selector: 'app-burncalorie',
  templateUrl: './burncalorie.component.html',
  styleUrls: ['./burncalorie.component.css']
})
export class BurncalorieComponent implements OnInit {

  workOutTypes: any;

  constructor(private burncalorieService: BurncalorieService) {
  }

  ngOnInit() {
    this.workOutTypes = this.burncalorieService.getMeals();
  }

  onSlideChnage(event, index) {
    const range = Number.parseInt((<HTMLInputElement>event.target).value);

  }
}
