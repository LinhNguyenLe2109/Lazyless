import { Component, Input } from '@angular/core';
import { Task } from 'src/app/interface/task';

@Component({
  selector: 'app-content-cell',
  templateUrl: './content-cell.component.html',
  styleUrls: ['./content-cell.component.css'],
})
export class ContentCellComponent {
  @Input() public type!: string;
  @Input() public taskList!: Task[];
  constructor() {}
}
