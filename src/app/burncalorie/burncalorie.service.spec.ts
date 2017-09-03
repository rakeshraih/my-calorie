import { TestBed, inject } from '@angular/core/testing';

import { BurncalorieService } from './burncalorie.service';

describe('BurncalorieService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BurncalorieService]
    });
  });

  it('should be created', inject([BurncalorieService], (service: BurncalorieService) => {
    expect(service).toBeTruthy();
  }));
});
