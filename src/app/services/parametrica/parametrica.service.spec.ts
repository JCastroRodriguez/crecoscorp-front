import { TestBed } from '@angular/core/testing';

import { ParametricaService } from './parametrica.service';

describe('ParametricaService', () => {
  let service: ParametricaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParametricaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
