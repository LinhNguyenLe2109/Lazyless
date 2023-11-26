import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyLogRecordComponent } from './daily-log-record.component';

describe('DailyLogRecordComponent', () => {
  let component: DailyLogRecordComponent;
  let fixture: ComponentFixture<DailyLogRecordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DailyLogRecordComponent]
    });
    fixture = TestBed.createComponent(DailyLogRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
