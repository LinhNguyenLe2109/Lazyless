import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './utils/nav-bar/nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { DailyTaskComponent } from './daily-task/daily-task.component';
import { DailyTaskCellModule } from './daily-task/daily-task-cell/daily-task-cell.module';
import { DailyTaskService } from './services/daily-task.service';
import { HttpClientModule } from '@angular/common/http';
import { DailyTableModule } from './daily-table/daily-table.module';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    DailyTaskComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DailyTaskCellModule,
    HttpClientModule,
    DailyTableModule
  ],
  providers: [DailyTaskService],
  bootstrap: [AppComponent],
})
export class AppModule {}
