import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { DailyTableComponent } from './daily-table.component';
import { DailyTableRecordComponent } from './daily-table-record/daily-table-record.component';
import { DailyTableService } from '../services/daily-table.service';
import { TableListNavComponent } from './table-list-nav/table-list-nav.component';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [DailyTableComponent, DailyTableRecordComponent, TableListNavComponent],
  imports: [CommonModule, MatIconModule, MatInputModule],
  providers: [DailyTableService],
  exports: [DailyTableComponent],
})
export class DailyTableModule {}
