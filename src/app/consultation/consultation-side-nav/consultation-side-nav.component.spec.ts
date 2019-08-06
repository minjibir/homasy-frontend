import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationSideNavComponent } from './consultation-side-nav.component';

describe('ConsultationSideNavComponent', () => {
  let component: ConsultationSideNavComponent;
  let fixture: ComponentFixture<ConsultationSideNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultationSideNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultationSideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
