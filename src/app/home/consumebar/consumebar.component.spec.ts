import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumebarComponent } from './consumebar.component';

describe('ConsumebarComponent', () => {
  let component: ConsumebarComponent;
  let fixture: ComponentFixture<ConsumebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
