import { Component, Input } from '@angular/core';
import { DailyLogTask } from 'src/app/interface/dailyLogTask';
import { DailyLogService } from 'src/app/services/daily-log.service';

@Component({
  selector: 'app-summary-tab',
  templateUrl: './summary-tab.component.html',
  styleUrls: ['./summary-tab.component.css'],
})
export class SummaryTabComponent {
  @Input() taskTypes!: string[];
  dataSource: DailyLogTask[];

  constructor(private dailyLogService: DailyLogService) {
    this.dataSource = [];
  }

  ngOnInit() {
    this.dailyLogService.tasks$.subscribe((data) => {
      this.dataSource = data as DailyLogTask[];
    });
  }
  calculateTotalTime(taskType: string) {
    let totalTime: number = 0;
    if (!this.dataSource || this.dataSource.length === 0) return '0h 0m';
    this.dataSource.forEach((task) => {
      if (task.taskType === taskType) {
        let startTime = new Date(task.startTime);
        let endTime = new Date(task.endTime);
        totalTime += endTime.getTime() - startTime.getTime();
      }
    });
    let hours = Math.floor(totalTime / 3600000);
    let minutes = Math.floor((totalTime % 3600000) / 60000);
    return hours + 'h ' + minutes + 'm';
  }
}
