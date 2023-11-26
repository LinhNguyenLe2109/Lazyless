import { Component, Input } from '@angular/core';
import { DailyLog } from 'src/app/interface/dailyLog';
import { Router } from '@angular/router';
import { DailyLogService } from 'src/app/services/daily-log.service';

@Component({
  selector: 'app-daily-log-record',
  templateUrl: './daily-log-record.component.html',
  styleUrls: ['./daily-log-record.component.css'],
})
export class DailyLogRecordComponent {
  @Input() table!: DailyLog;
  constructor(
    private router: Router,
    private dailyLogService: DailyLogService
  ) {}
  ngOnInit() {}

  openTable() {
    this.router.navigate(['/dailyLog', this.table.id]);
  }

  async deleteTable() {
    await this.dailyLogService.deleteDailyLog(this.table.id);
  }
}
