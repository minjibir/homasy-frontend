import { TestBed, async, inject } from '@angular/core/testing';

import { ConsultationGuard } from './consultation.guard';

describe('ConsultationGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConsultationGuard]
    });
  });

  it('should ...', inject([ConsultationGuard], (guard: ConsultationGuard) => {
    expect(guard).toBeTruthy();
  }));
});
