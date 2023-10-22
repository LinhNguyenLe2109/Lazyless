import { Component } from '@angular/core';
import { DailyTableService } from '../../services/daily-table.service';
import { DailyTable } from 'src/app/interface/dailyTable';

@Component({
  selector: 'app-table-list-nav',
  templateUrl: './table-list-nav.component.html',
  styleUrls: ['./table-list-nav.component.css'],
})
export class TableListNavComponent {
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
}
