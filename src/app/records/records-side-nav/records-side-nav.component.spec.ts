import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordsSideNavComponent } from './records-side-nav.component';

describe('RecordsSideNavComponent', () => {
  let component: RecordsSideNavComponent;
  let fixture: ComponentFixture<RecordsSideNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecordsSideNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordsSideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
