import { Injectable } from '@angular/core';
import { WorkOut } from './workout';
import { WorkOutTypes } from './mock-workout';

@Injectable()
export class BurncalorieService {

  constructor() { }

  getMeals(): WorkOut[] {
    return WorkOutTypes;
  }
}
