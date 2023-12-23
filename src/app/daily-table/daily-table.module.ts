import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { DailyTableComponent } from './daily-table.component';
import { DailyTableRecordComponent } from './daily-table-record/daily-table-record.component';
import { DailyTableService } from '../services/daily-table.service';
import { TableListNavComponent } from './table-list-nav/table-list-nav.component';
import { MatInputModule } from '@angular/material/input';
import { DailyTableRoutingModule } from './daily-table-routing.module';
import { DailyTaskComponent } from '../daily-task/daily-task.component';
import { DailyTaskCellModule } from '../daily-task/daily-task-cell/daily-task-cell.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    DailyTableComponent,
    DailyTableRecordComponent,
    TableListNavComponent,
    DailyTaskComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatInputModule,
    DailyTableRoutingModule,
    DailyTaskCellModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatProgressSpinnerModule
  ],
  providers: [DailyTableService],
  exports: [DailyTableComponent],
})
export class DailyTableModule {}
