import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MealformComponent } from './mealform.component';

describe('MealformComponent', () => {
  let component: MealformComponent;
  let fixture: ComponentFixture<MealformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MealformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MealformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
