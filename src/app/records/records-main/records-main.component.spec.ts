import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordsMainComponent } from './records-main.component';

describe('RecordsMainComponent', () => {
  let component: RecordsMainComponent;
  let fixture: ComponentFixture<RecordsMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecordsMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
