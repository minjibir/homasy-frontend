import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacyMainComponent } from './pharmacy-main.component';

describe('PharmacyMainComponent', () => {
  let component: PharmacyMainComponent;
  let fixture: ComponentFixture<PharmacyMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PharmacyMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmacyMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
