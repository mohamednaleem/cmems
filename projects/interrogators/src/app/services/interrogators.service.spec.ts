import { TestBed } from '@angular/core/testing';

import { InterrogatorsService } from './interrogators.service';

describe('InterrogatorsService', () => {
  let service: InterrogatorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterrogatorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
