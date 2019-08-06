import { TestBed, async, inject } from '@angular/core/testing';

import { NurseGuard } from './nurse.guard';

describe('NurseGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NurseGuard]
    });
  });

  it('should ...', inject([NurseGuard], (guard: NurseGuard) => {
    expect(guard).toBeTruthy();
  }));
});
