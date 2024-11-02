import { TestBed } from '@angular/core/testing';

import { CateringCalcService } from './catering-calc.service';

describe('CateringCalcService', () => {
  let service: CateringCalcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CateringCalcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
