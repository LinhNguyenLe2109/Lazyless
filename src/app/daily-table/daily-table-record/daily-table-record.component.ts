import { Component, Input } from '@angular/core';
import { DailyTable } from 'src/app/interface/dailyTable';
import { Router } from '@angular/router';

@Component({
  selector: 'app-daily-table-record',
  templateUrl: './daily-table-record.component.html',
  styleUrls: ['./daily-table-record.component.css'],
})
export class DailyTableRecordComponent {
  @Input() table!: DailyTable;
  constructor(private router: Router) {}

  openTable() {
    // this.router.navigate(['daily-table', this.table.id]);
    console.log('open table')
  }

  deleteTable() {
    console.log('delete table')
  }
}
