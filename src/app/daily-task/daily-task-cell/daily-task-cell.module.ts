import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentCellComponent } from './content-cell/content-cell.component';
import { TaskContentComponent } from './task-content/task-content.component';
import { TaskInputComponent } from './task-input/task-input.component';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    ContentCellComponent,
    TaskContentComponent,
    TaskInputComponent,
  ],
  imports: [CommonModule, FormsModule, MatIconModule],
  exports: [ContentCellComponent],
})
export class DailyTaskCellModule {}
