import { TestBed, async, inject } from '@angular/core/testing';

import { RecordsGuard } from './records.guard';

describe('RecordsGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecordsGuard]
    });
  });

  it('should ...', inject([RecordsGuard], (guard: RecordsGuard) => {
    expect(guard).toBeTruthy();
  }));
});
