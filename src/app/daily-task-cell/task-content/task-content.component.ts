import { Component, Input } from '@angular/core';
import { DailyTaskService } from 'src/app/daily-task.service';
import { Task } from 'src/app/interface/task';

@Component({
  selector: 'app-task-content',
  templateUrl: './task-content.component.html',
  styleUrls: ['./task-content.component.css']
})
export class TaskContentComponent {
  @Input () public task !: Task;
  public isDone: boolean = false;
  constructor(private dailyTaskService: DailyTaskService) { 

  }

  doneButtonHandler(){
    this.isDone = !this.isDone;
  }
}
