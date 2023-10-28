import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DailyTable } from '../interface/dailyTable';
import { DailyTableService } from '../services/daily-table.service';
import { DailyTaskService } from '../services/daily-task.service';
import { Task } from '../interface/task';

@Component({
  selector: 'app-daily-task',
  templateUrl: './daily-task.component.html',
  styleUrls: ['./daily-task.component.css'],
})
export class DailyTaskComponent {
  tableId: string | null = null;
  table: DailyTable | null = null;
  currentDate = new Date();
  // update this one later with uuid
  sessionId = '';
  // task type
  UI: string;
  NUI: string;
  NUNI: string;
  UNI: string;
  // task list for each type
  UIList: Task[] = [];
  NUIList: Task[] = [];
  NUNIList: Task[] = [];
  UNIList: Task[] = [];

  taskList: Task[] = [];
  constructor(
    private route: ActivatedRoute,
    private dailyTableService: DailyTableService,
    private dailyTaskService: DailyTaskService
  ) {
    this.UI = 'U-I';
    this.NUI = 'NU-I';
    this.NUNI = 'NU-NI';
    this.UNI = 'U-NI';
  }

  async ngOnInit() {
    // grab the table id from the url
    this.tableId = this.route.snapshot.paramMap.get('id');
    // if there is a table id, fetch the table
    if (this.tableId) {
      // Subscribe to the taskList observable to get the whole list of tasks
      // todo
      this.table = await this.dailyTableService.fetchDailyTableById(
        this.tableId
      );
      this.currentDate = this.table.date;
      this.sessionId = this.table.id;
      // set the url for the daily task service
      this.dailyTaskService.setURL(this.table.id);
      this.fetchTasks(this.table.taskIdList);
    }
  }

  // get all table tasks, split them into 4 section, then pass it to sub section
  async fetchTasks(taskIdList: string[]) {
    if (taskIdList.length === 0) {
      return;
    }
    await this.dailyTaskService.fetchTaskList();
    this.dailyTaskService.taskList$.subscribe((data) => {
      this.taskList = data;
      this.resetTaskList();
      for (let task of this.taskList) {
        if (task.taskType === this.UI) {
          this.UIList.push(task);
        } else if (task.taskType === this.NUI) {
          this.NUIList.push(task);
        } else if (task.taskType === this.NUNI) {
          this.NUNIList.push(task);
        } else if (task.taskType === this.UNI) {
          this.UNIList.push(task);
        }
      }
    });
    return;
  }


  // reset all task lists
  resetTaskList() {
    this.UIList = [];
    this.NUIList = [];
    this.NUNIList = [];
    this.UNIList = [];
  }
}
