import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { DailyTableComponent } from './daily-table.component';
import { DailyTableRecordComponent } from './daily-table-record/daily-table-record.component';
import { DailyTableService } from '../services/daily-table.service';

@NgModule({
  declarations: [DailyTableComponent, DailyTableRecordComponent],
  imports: [CommonModule, MatIconModule],
  providers: [DailyTableService],
  exports: [DailyTableComponent],
})
export class DailyTableModule {}
