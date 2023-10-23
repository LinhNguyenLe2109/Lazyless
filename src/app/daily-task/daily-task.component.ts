import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DailyTable } from '../interface/dailyTable';
import { DailyTableService } from '../services/daily-table.service';

@Component({
  selector: 'app-daily-task',
  templateUrl: './daily-task.component.html',
  styleUrls: ['./daily-task.component.css'],
})
export class DailyTaskComponent {
  tableId: string | null = null;
  table: DailyTable | null = null;
  currentDate = new Date();
  // update this one later with uuid
  sessionId = '';
  UI: string;
  NUI: string;
  NUNI: string;
  UNI: string;
  constructor(
    private route: ActivatedRoute,
    private dailyTableService: DailyTableService
  ) {
    this.UI = 'U-I';
    this.NUI = 'NU-I';
    this.NUNI = 'NU-NI';
    this.UNI = 'U-NI';
  }

  async ngOnInit() {
    this.tableId = this.route.snapshot.paramMap.get('id');
    if (this.tableId) {
      this.table = await this.dailyTableService.fetchDailyTableById(
        this.tableId
      );
      console.log(this.table);
      this.currentDate = this.table.date;
      this.sessionId = this.table.id;
      // todo
      // get all table tasks, split them into 4 section, then pass it to sub section
    }
  }
}
