import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DailyTaskComponent } from './daily-task/daily-task.component';
import { DailyTableComponent } from './daily-table/daily-table.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home page',
  },
  {
    path: 'dailyTask',
    component: DailyTaskComponent,
    title: 'Daily Task',
  },
  {
    path: 'dailyTableHistory',
    component: DailyTableComponent,
    title: 'Daily Table History',
  },
  {
    path: '**',
    component: HomeComponent,
    title: 'Home page',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
