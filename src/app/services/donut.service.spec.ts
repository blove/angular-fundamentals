import { TestBed } from '@angular/core/testing';

import { DonutService } from './donut.service';

describe('DonutService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DonutService = TestBed.get(DonutService);
    expect(service).toBeTruthy();
  });
});
