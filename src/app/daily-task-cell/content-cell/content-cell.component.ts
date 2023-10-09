import {
  Component,
  Input,
  Inject,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
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
    // Subscribe to the taskList observable to get the whole list of tasks
    this.dailyTaskService.taskList$.subscribe((allTasks) => {
      if (allTasks.length > 0) {
        this.taskList = allTasks.filter((x) => x.taskType == this.type);
      } else {
        this.taskList = [];
      }
    });
    console.log(this.taskList);
  }

  getParent() {
    return this;
  }
}
