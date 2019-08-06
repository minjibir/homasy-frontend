import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestResultEntryComponent } from './test-result-entry.component';

describe('TestResultEntryComponent', () => {
  let component: TestResultEntryComponent;
  let fixture: ComponentFixture<TestResultEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestResultEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestResultEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
