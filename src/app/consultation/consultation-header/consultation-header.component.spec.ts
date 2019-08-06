import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationHeaderComponent } from './consultation-header.component';

describe('ConsultationHeaderComponent', () => {
  let component: ConsultationHeaderComponent;
  let fixture: ComponentFixture<ConsultationHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultationHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultationHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
