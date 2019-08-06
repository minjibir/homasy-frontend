import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescriptionsRecordComponent } from './prescriptions-record.component';

describe('PrescriptionsRecordComponent', () => {
  let component: PrescriptionsRecordComponent;
  let fixture: ComponentFixture<PrescriptionsRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrescriptionsRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrescriptionsRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
