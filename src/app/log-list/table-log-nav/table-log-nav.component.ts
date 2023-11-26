import { Component } from '@angular/core';
import { DailyTableService } from '../../services/daily-table.service';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

@Component({
  selector: 'app-table-log-nav',
  templateUrl: './table-log-nav.component.html',
  styleUrls: ['./table-log-nav.component.css'],
})
export class TableLogNavComponent {
  totalTableNum: number = 0;
  constructor(private dailyTableService: DailyTableService) {}
  ngOnInit(): void {
    this.dailyTableService.tableNum$.subscribe((data) => {
      this.totalTableNum = data;
    });
  }
  createNewTable() {
    this.dailyTableService.addDailyTable();
  }

  dateChangeHandler(type: string, event: MatDatepickerInputEvent<Date>) {
    console.log(`Todo: filter table based on date ${typeof event.value}`);
  }
}
