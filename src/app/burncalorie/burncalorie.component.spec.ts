import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BurncalorieComponent } from './burncalorie.component';

describe('BurncalorieComponent', () => {
  let component: BurncalorieComponent;
  let fixture: ComponentFixture<BurncalorieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BurncalorieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BurncalorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
