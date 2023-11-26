import { Component } from '@angular/core';
import { DailyLog } from 'src/app/interface/dailyLog';
import { DailyLogService } from '../services/daily-log.service';

@Component({
  selector: 'app-log-list',
  templateUrl: './log-list.component.html',
  styleUrls: ['./log-list.component.css'],
})
export class LogListComponent {
  logs: DailyLog[] = [];
  constructor(private dailyLogService: DailyLogService) {}

  ngOnInit() {
    this.dailyLogService.logs$.subscribe((data) => {
      this.logs = data as DailyLog[];
    });
  }
}
