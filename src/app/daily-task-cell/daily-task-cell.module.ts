import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentCellComponent } from './content-cell/content-cell.component';


@NgModule({
  declarations: [ContentCellComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ContentCellComponent
  ]
})
export class DailyTaskCellModule { }
