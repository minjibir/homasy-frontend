import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NursePatientComponent } from './nurse-patient.component';

describe('NursePatientComponent', () => {
  let component: NursePatientComponent;
  let fixture: ComponentFixture<NursePatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NursePatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NursePatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
