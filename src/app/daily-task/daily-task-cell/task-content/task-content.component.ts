import { Component, Input } from '@angular/core';
import { DailyTaskService } from 'src/app/services/daily-task.service';
import { Task } from 'src/app/interface/task';

@Component({
  selector: 'app-task-content',
  templateUrl: './task-content.component.html',
  styleUrls: ['./task-content.component.css'],
})
export class TaskContentComponent {
  @Input() public task!: Task;
  public isDone: boolean = false;
  constructor(private dailyTaskService: DailyTaskService) {}

  ngOnInit(): void {
    this.isDone = this.task.completed;
  }

  doneButtonHandler(): void {
    this.isDone = !this.isDone;
    this.dailyTaskService.updateTaskStatus(this.task.id, this.isDone);
  }

  removeButtonHandler(): void {
    this.dailyTaskService.removeTask(this.task.id);
  }
}
