import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DailyLogComponent } from './daily-log.component';
import { LogListComponent } from '../log-list/log-list.component';

const routes: Routes = [
  { path: '', component: LogListComponent, title: 'Daily Log List' },
  { path: ':id', component: DailyLogComponent, title: 'Daily Log' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DailyLogRoutingModule {}
