import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaymealComponent } from './daymeal.component';

describe('DaymealComponent', () => {
  let component: DaymealComponent;
  let fixture: ComponentFixture<DaymealComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaymealComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaymealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
