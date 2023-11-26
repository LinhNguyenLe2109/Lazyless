import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DailyLogRoutingModule } from './daily-log-routing.module';
import { LogListComponent } from './log-list.component';
import { DailyLogComponent } from './daily-log/daily-log.component';
import { TableLogNavComponent } from './table-log-nav/table-log-nav.component';
import { DailyLogRecordComponent } from './daily-log-record/daily-log-record.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [
    LogListComponent,
    DailyLogComponent,
    TableLogNavComponent,
    DailyLogRecordComponent,
  ],
  imports: [
    CommonModule,
    DailyLogRoutingModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
})
export class DailyLogModule {}
