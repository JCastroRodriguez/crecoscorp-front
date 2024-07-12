import { TestBed } from '@angular/core/testing';

import { GaranteService } from './garante.service';

describe('GaranteService', () => {
  let service: GaranteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GaranteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
