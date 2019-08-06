import { TestBed, async, inject } from '@angular/core/testing';

import { PharamcyGuard } from './pharamcy.guard';

describe('PharamcyGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PharamcyGuard]
    });
  });

  it('should ...', inject([PharamcyGuard], (guard: PharamcyGuard) => {
    expect(guard).toBeTruthy();
  }));
});
