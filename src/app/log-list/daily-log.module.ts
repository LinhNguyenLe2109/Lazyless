import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DailyLogRoutingModule } from './daily-log-routing.module';
import { LogListComponent } from './log-list.component';
import { DailyLogComponent } from './daily-log/daily-log.component';

@NgModule({
  declarations: [LogListComponent, DailyLogComponent],
  imports: [CommonModule, DailyLogRoutingModule],
})
export class DailyLogModule {}
