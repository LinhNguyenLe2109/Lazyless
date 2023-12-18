import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DailyLogService } from 'src/app/services/daily-log.service';
import { DailyLog } from 'src/app/interface/dailyLog';
import { DailyLogTask } from 'src/app/interface/dailyLogTask';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-daily-log',
  templateUrl: './daily-log.component.html',
  styleUrls: ['./daily-log.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed,void', style({ height: '0px', minHeight: '0'})),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class DailyLogComponent {
  logID: string | null = null;
  log: DailyLog | null = null;
  dataSource: DailyLogTask[] = [];
  displayedColumns: string[] = ['taskName', 'startTime', 'endTime', 'expand'];
  taskTypes: string[] = ['Work', 'Study', 'Exercise', 'Unnecessary', 'Random'];
  submitted = false;
  expandedTask: DailyLogTask | null = null;

  inputForm = new FormGroup({
    taskName: new FormControl('', [Validators.required]),
    taskType: new FormControl('', [Validators.required]),
    startTime: new FormControl('', [Validators.required]),
    endTime: new FormControl('', [Validators.required]),
    note: new FormControl(''),
  });
  constructor(
    private route: ActivatedRoute,
    private dailyLogService: DailyLogService
  ) {}
  ngOnInit() {
    // Access the passed object from the state
    this.logID = this.route.snapshot.paramMap.get('id');
    if (this.logID) {
      this.dailyLogService.getDailyLogById(this.logID);
    }
    // todo, update the front end
    this.dailyLogService.log$.subscribe((data) => {
      this.log = data as DailyLog;
    });
    this.dailyLogService.tasks$.subscribe((data) => {
      this.dataSource = data as DailyLogTask[];
    });
  }

  async addLog() {
    this.submitted = true;
    if (!this.inputForm.invalid && this.checkValue()) {
      this.inputForm.get('endTime')?.setErrors({ tooSmall: false });
      let startTime = this.updateTime(this.inputForm.get('startTime')?.value);
      let endTime = this.updateTime(this.inputForm.get('endTime')?.value);
      let newTask: DailyLogTask = {
        id: null,
        taskName: this.inputForm.get('taskName')?.value ?? '',
        taskType: this.inputForm.get('taskType')?.value ?? '',
        startTime: startTime ?? new Date(),
        endTime: endTime ?? new Date(),
        note: this.inputForm.get('note')?.value ?? '',
        parentLogId: this.logID ?? '',
      };
      await this.dailyLogService.addNewTaskToDailyLog(newTask);
      this.inputForm.reset();

      return;
    }
  }
  resetLog() {
    this.inputForm.reset();
    this.submitted = false;
  }

  updateTime(time: string | null | undefined): Date | null {
    if (!time) return null;
    let date = new Date(this.log?.date ?? new Date());
    let hour = parseInt(time.split(':')[0]);
    let minute = parseInt(time.split(':')[1]);
    if (date) {
      date.setHours(hour);
      date.setMinutes(minute);
      return date;
    }
    return null;
  }

  checkValue() {
    let valid = true;
    if (this.inputForm.get('taskName')?.invalid) {
      valid = false;
    }
    if (this.inputForm.get('taskType')?.invalid) {
      valid = false;
    }
    if (this.inputForm.get('startTime')?.invalid) {
      valid = false;
    }
    if (this.inputForm.get('endTime')?.invalid) {
      valid = false;
    }
    const startTime = new Date(
      '2000-01-01 ' + !this.inputForm.get('startTime')!.value
    );
    const endTime = new Date(
      '2000-01-01 ' + !this.inputForm.get('endTime')!.value
    );
    if (startTime.getTime() >= endTime.getTime()) {
      valid = false;
      this.inputForm.get('endTime')?.setErrors({ tooSmall: true });
    }

    return valid;
  }
}
