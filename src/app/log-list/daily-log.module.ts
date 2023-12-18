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
import { MatIconModule } from '@angular/material/icon';
import { DailyLogService } from '../services/daily-log.service';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { UtilsModule } from '../utils/utils.module';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import {MatExpansionModule} from '@angular/material/expansion';
import { SummaryTabComponent } from './summary-tab/summary-tab.component';

@NgModule({
  declarations: [
    LogListComponent,
    DailyLogComponent,
    TableLogNavComponent,
    DailyLogRecordComponent,
    SummaryTabComponent,
  ],
  imports: [
    CommonModule,
    DailyLogRoutingModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatInputModule,
    MatTableModule,
    UtilsModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatExpansionModule
  ],
  exports: [LogListComponent],
  providers: [DailyLogService],
})
export class DailyLogModule {}
