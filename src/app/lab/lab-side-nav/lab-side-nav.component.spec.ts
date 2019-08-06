import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabSideNavComponent } from './lab-side-nav.component';

describe('LabSideNavComponent', () => {
  let component: LabSideNavComponent;
  let fixture: ComponentFixture<LabSideNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabSideNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabSideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
