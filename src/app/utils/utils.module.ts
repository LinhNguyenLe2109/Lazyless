import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { StopWatchComponent } from './stop-watch/stop-watch.component';

@NgModule({
  declarations: [ButtonComponent, StopWatchComponent],
  imports: [CommonModule],
  exports: [StopWatchComponent],
})
export class UtilsModule {}
