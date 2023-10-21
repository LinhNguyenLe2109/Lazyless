import { TestBed } from '@angular/core/testing';

import { DailyTableService } from './daily-table.service';

describe('DailyTableService', () => {
  let service: DailyTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DailyTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
