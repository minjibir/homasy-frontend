import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NurseMainComponent } from './nurse-main.component';

describe('NurseMainComponent', () => {
  let component: NurseMainComponent;
  let fixture: ComponentFixture<NurseMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NurseMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NurseMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
