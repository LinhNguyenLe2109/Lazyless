import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DailyLogService } from 'src/app/services/daily-log.service';
import { DailyLog } from 'src/app/interface/dailyLog';
import { DailyLogTask } from 'src/app/interface/dailyLogTask';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-daily-log',
  templateUrl: './daily-log.component.html',
  styleUrls: ['./daily-log.component.css'],
})
export class DailyLogComponent {
  logID: string | null = null;
  log: DailyLog | null = null;
  dataSource: DailyLogTask[] = [];
  displayedColumns: string[] = ['taskName', 'startTime', 'endTime', 'note'];
  constructor(
    private route: ActivatedRoute,
    private dailyLogService: DailyLogService
  ) {}
  ngOnInit() {
    // Access the passed object from the state
    this.logID = this.route.snapshot.paramMap.get('id');
    if (this.logID) {
      this.dailyLogService.getDailyLogById(this.logID);
    }
    // todo, update the front end
    this.dailyLogService.log$.subscribe((data) => {
      console.log(data);
      this.log = data as DailyLog;
      this.dataSource = this.log.dailyLogTaskList;
    });
  }

  test() {
    console.log(this.log);
  }

  addLog() {
    console.log('add log');
  }
  deleteLog() {
    console.log('delete log');
  }
}
