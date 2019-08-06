import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NurseHeaderComponent } from './nurse-header.component';

describe('NurseHeaderComponent', () => {
  let component: NurseHeaderComponent;
  let fixture: ComponentFixture<NurseHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NurseHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NurseHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
