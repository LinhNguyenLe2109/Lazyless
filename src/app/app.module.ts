import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './utils/nav-bar/nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { DailyTaskService } from './services/daily-task.service';
import { HttpClientModule } from '@angular/common/http';
import { DailyTableModule } from './daily-table/daily-table.module';
import { ContactComponent } from './contact/contact.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [AppComponent, NavBarComponent, HomeComponent, ContactComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    DailyTableModule,
    FontAwesomeModule
  ],
  providers: [DailyTaskService],
  bootstrap: [AppComponent],
})
export class AppModule {}
