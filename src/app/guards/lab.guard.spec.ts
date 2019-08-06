import { TestBed, async, inject } from '@angular/core/testing';

import { LabGuard } from './lab.guard';

describe('LabGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LabGuard]
    });
  });

  it('should ...', inject([LabGuard], (guard: LabGuard) => {
    expect(guard).toBeTruthy();
  }));
});
