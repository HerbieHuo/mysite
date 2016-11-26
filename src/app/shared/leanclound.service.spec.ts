/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LeancloundService } from './leanclound.service';

describe('Service: Leanclound', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LeancloundService]
    });
  });

  it('should ...', inject([LeancloundService], (service: LeancloundService) => {
    expect(service).toBeTruthy();
  }));
});
