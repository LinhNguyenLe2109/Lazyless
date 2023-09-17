import { Component, Input } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-task-input',
  templateUrl: './task-input.component.html',
  styleUrls: ['./task-input.component.css']
})
export class TaskInputComponent {
  public task: string;
  constructor() {
    this.task = "";
   }
  addTask(){
    console.log(this.task);
  }
}
