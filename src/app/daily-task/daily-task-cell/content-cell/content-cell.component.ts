import {
  Component,
  Input,
  Inject,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { DailyTaskService } from 'src/app/services/daily-task.service';
import { Task } from 'src/app/interface/task';

@Component({
  selector: 'app-content-cell',
  templateUrl: './content-cell.component.html',
  styleUrls: ['./content-cell.component.css'],
})
export class ContentCellComponent {
  @Input() public type!: string;
  @Input() public taskList!: Task[];
  constructor(private dailyTaskService: DailyTaskService) {}
  ngOnInit() {
    console.log(this.taskList);
  }

  getParent() {
    return this;
  }
}
