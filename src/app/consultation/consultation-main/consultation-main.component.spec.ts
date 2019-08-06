import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationMainComponent } from './consultation-main.component';

describe('ConsultationMainComponent', () => {
  let component: ConsultationMainComponent;
  let fixture: ComponentFixture<ConsultationMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultationMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultationMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
