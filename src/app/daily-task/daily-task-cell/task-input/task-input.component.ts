import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { DailyTaskService } from 'src/app/services/daily-task.service';
import { ContentCellComponent } from '../content-cell/content-cell.component';

@Component({
  selector: 'app-task-input',
  templateUrl: './task-input.component.html',
  styleUrls: ['./task-input.component.css'],
})
export class TaskInputComponent {
  public task: string;
  @Input() public type!: string;
  constructor(private dailyTaskService: DailyTaskService) {
    this.task = '';
  }

  addTask() {
    if (this.task.trim() != '') {
      this.dailyTaskService.addTask(this.task, this.type);
      this.task = '';
    }
  }
}
