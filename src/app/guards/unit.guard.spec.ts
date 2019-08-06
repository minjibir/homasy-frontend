import { TestBed, async, inject } from '@angular/core/testing';

import { UnitGuard } from './unit.guard';

describe('UnitGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UnitGuard]
    });
  });

  it('should ...', inject([UnitGuard], (guard: UnitGuard) => {
    expect(guard).toBeTruthy();
  }));
});
