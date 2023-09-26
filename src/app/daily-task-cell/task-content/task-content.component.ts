import { Component, Input } from '@angular/core';
import { Task } from 'src/app/interface/task';

@Component({
  selector: 'app-task-content',
  templateUrl: './task-content.component.html',
  styleUrls: ['./task-content.component.css']
})
export class TaskContentComponent {
  @Input () public task !: Task;
}
