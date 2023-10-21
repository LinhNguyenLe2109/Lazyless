import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyTableRecordComponent } from './daily-table-record.component';

describe('DailyTableRecordComponent', () => {
  let component: DailyTableRecordComponent;
  let fixture: ComponentFixture<DailyTableRecordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DailyTableRecordComponent]
    });
    fixture = TestBed.createComponent(DailyTableRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
