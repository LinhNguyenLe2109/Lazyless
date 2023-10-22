import { Component } from '@angular/core';
import { DailyTableService } from '../../services/daily-table.service';
import { DailyTable } from 'src/app/interface/dailyTable';

@Component({
  selector: 'app-table-list-nav',
  templateUrl: './table-list-nav.component.html',
  styleUrls: ['./table-list-nav.component.css'],
})
export class TableListNavComponent {
  constructor(private dailyTableService: DailyTableService) {}
  createNewTable() {
    this.dailyTableService.addDailyTable();
  }
}
