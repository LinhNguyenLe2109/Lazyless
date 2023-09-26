import { Component } from '@angular/core';

@Component({
  selector: 'app-daily-task',
  templateUrl: './daily-task.component.html',
  styleUrls: ['./daily-task.component.css']
})
export class DailyTaskComponent {
  currentDate = new Date();
  // update this one later with uuid
  sessionId = '1234567890 (to be updated)';
  UI :string;
  NUI :string;
  NUNI :string;
  UNI: string;
  constructor() { 
    this.UI = 'U-I';
    this.NUI = 'NU-I';
    this.NUNI = 'NU-NI';
    this.UNI = 'U-NI';
  }
}
