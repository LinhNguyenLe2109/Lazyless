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
    this.dailyLogService.getAllDailyLogs().then((data) => {
      this.dailyLogTables = data as DailyLog[];
      console.log(this.dailyLogTables);
    });
  }
  createNewTable() {
    console.log("todo after log record is finished")
  }

  dateChangeHandler(type: string, event: MatDatepickerInputEvent<Date>) {
    console.log(`Todo: filter table based on date ${typeof event.value}`);
  }
}
