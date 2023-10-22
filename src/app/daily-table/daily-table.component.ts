import { Component } from '@angular/core';
import { DailyTableService } from '../services/daily-table.service';
import { DailyTable } from '../interface/dailyTable';

@Component({
  selector: 'app-daily-table',
  templateUrl: './daily-table.component.html',
  styleUrls: ['./daily-table.component.css'],
})
export class DailyTableComponent {
  tableList: DailyTable[] = [];
  constructor(private dailyTableService: DailyTableService) {}
  ngOnInit(): void {
    this.dailyTableService.tableList$.subscribe((allTables) => {
      if (allTables.length > 0) {
        this.tableList = allTables;
      } else {
        this.tableList = [];
      }
      console.log(this.tableList);
    });
  }
}
