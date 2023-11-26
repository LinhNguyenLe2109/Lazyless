import { Component } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { DailyLog } from 'src/app/interface/dailyLog';
import { DailyLogService } from 'src/app/services/daily-log.service';

@Component({
  selector: 'app-table-log-nav',
  templateUrl: './table-log-nav.component.html',
  styleUrls: ['./table-log-nav.component.css'],
})
export class TableLogNavComponent {
  dailyLogTables: DailyLog[] = [];
  constructor(private dailyLogService: DailyLogService) {}
  ngOnInit(): void {
    this.dailyLogService.logs$.subscribe((data) => {
      this.dailyLogTables = data as DailyLog[];
    });
  }
  async createNewTable() {
    await this.dailyLogService.addNewDailyLog();
  }

  dateChangeHandler(type: string, event: MatDatepickerInputEvent<Date>) {
    console.log(`Todo: filter table based on date ${typeof event.value}`);
  }
}
