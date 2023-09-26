import { Component, Input, Inject } from '@angular/core';
import { DailyTaskService } from 'src/app/daily-task.service';
import { Task } from 'src/app/interface/task';

@Component({
  selector: 'app-content-cell',
  templateUrl: './content-cell.component.html',
  styleUrls: ['./content-cell.component.css'],
})
export class ContentCellComponent {
  public taskList: Task[] = [];
  @Input() public type!: string;
  constructor(private dailyTaskService: DailyTaskService) {}
  ngOnInit() {
    this.taskList = this.dailyTaskService
      .getTaskList()
      .filter((x) => x.type === this.type);
  }
}
