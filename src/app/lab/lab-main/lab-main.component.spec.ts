import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabMainComponent } from './lab-main.component';

describe('LabMainComponent', () => {
  let component: LabMainComponent;
  let fixture: ComponentFixture<LabMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
