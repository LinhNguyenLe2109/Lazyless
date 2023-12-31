import { Component, Input } from '@angular/core';
import { DailyTable } from 'src/app/interface/dailyTable';
import { Router } from '@angular/router';
import { DailyTableService } from 'src/app/services/daily-table.service';

@Component({
  selector: 'app-daily-table-record',
  templateUrl: './daily-table-record.component.html',
  styleUrls: ['./daily-table-record.component.css'],
})
export class DailyTableRecordComponent {
  @Input() table!: DailyTable;
  public progressBarWidth: string = '0%';
  public completedRate: number = 0;
  constructor(
    private router: Router,
    private dailyTableService: DailyTableService
  ) {}
  // completedTaskNum
  ngOnInit() {
    this.completedRate =
      this.table.taskIdList.length > 0
        ? (this.table.completedTaskNum / this.table.taskIdList.length) * 100
        : 0;
    this.progressBarWidth = this.completedRate + '%';
    console.log(this.progressBarWidth);
  }

  openTable() {
    this.router.navigate(['/dailyTable', this.table.id]);
  }

  deleteTable() {
    this.dailyTableService.deleteDailyTable(this.table.id);
  }
}
