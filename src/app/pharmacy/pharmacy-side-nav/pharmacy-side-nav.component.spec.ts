import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacySideNavComponent } from './pharmacy-side-nav.component';

describe('PharmacySideNavComponent', () => {
  let component: PharmacySideNavComponent;
  let fixture: ComponentFixture<PharmacySideNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PharmacySideNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmacySideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
