import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DailyTableComponent } from './daily-table.component';
import { DailyTaskComponent } from '../daily-task/daily-task.component';

const routes: Routes = [
  {
    path: '',
    component: DailyTableComponent,
    title: 'Browse Tables',
  },
  {
    path: ':id',
    component: DailyTaskComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DailyTableRoutingModule {}
