import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home page',
  },
  {
    path: 'dailyTable',
    loadChildren: () =>
      import('./daily-table/daily-table.module').then(
        (m) => m.DailyTableModule
      ),
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
