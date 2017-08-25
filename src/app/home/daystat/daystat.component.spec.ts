import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaystatComponent } from './daystat.component';

describe('DaystatComponent', () => {
  let component: DaystatComponent;
  let fixture: ComponentFixture<DaystatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaystatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaystatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
