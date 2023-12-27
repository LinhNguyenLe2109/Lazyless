import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stop-watch',
  templateUrl: './stop-watch.component.html',
  styleUrls: ['./stop-watch.component.css'],
})
export class StopWatchComponent {
  @Input() showTitle: boolean = true;
  hr = 0;
  mm = 0;
  ss = 0;
  ms = 0;
  isRunning = false;
  timerId: any;

  clickHandler() {
    if (!this.isRunning) {
      // Stop => Running
      this.timerId = setInterval(() => {
        this.ms++;

        if (this.ms >= 100) {
          this.ss++;
          this.ms = 0;
        }
        if (this.ss >= 60) {
          this.mm++;
          this.ss = 0;
        }
        if (this.mm >= 60) {
          this.hr++;
          this.mm = 0;
        }
      }, 10);
    } else {
      clearInterval(this.timerId);
    }
    this.isRunning = !this.isRunning;
  }

  format(num: number) {
    return (num + '').length === 1 ? '0' + num : num + '';
  }

  reset() {
    this.hr = 0;
    this.mm = 0;
    this.ss = 0;
    this.ms = 0;
    this.isRunning = false;
    clearInterval(this.timerId);
  }
}
