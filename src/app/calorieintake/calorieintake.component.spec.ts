import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalorieintakeComponent } from './calorieintake.component';

describe('CalorieintakeComponent', () => {
  let component: CalorieintakeComponent;
  let fixture: ComponentFixture<CalorieintakeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalorieintakeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalorieintakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
