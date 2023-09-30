import { ChangeDetectorRef, Injectable } from '@angular/core';
import { Task } from './interface/task';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DailyTaskService {
  testData: any = {
    userId: 1,
    data: [
      {
        id: 1,
        task: 'Task 1',
        type: 'U-I',
      },
      {
        id: 2,
        task: 'Task 2',
        type: 'U-I',
      },
      {
        id: 3,
        task: 'Task 3',
        type: 'NU-I',
      },
      {
        id: 4,
        task: 'Task 4',
        type: 'NU-NI',
      },
      {
        id: 5,
        task: 'Task 5',
        type: 'U-NI',
      },
    ],
  };
  taskList: Task[];
  newUnassignedId: number = -1;
  // Create a BehaviorSubject to store the task list
  taskListSubject = new BehaviorSubject<Task[]>([]);
  // Expose the observable$ part of the taskList subject (read only stream)
  taskList$: Observable<Task[]> = this.taskListSubject.asObservable();
  constructor() {
    this.taskList = this.testData.data;
    this.newUnassignedId = Math.max(...this.taskList.map((x) => x.id));
    this.taskListSubject.next(this.taskList);
  }

  getTaskList() {
    return this.taskList;
  }

  addTask(task: string, type: string) {
    this.taskList.push({
      id: ++this.newUnassignedId,
      task: task,
      type: type,
    });
    this.taskListSubject.next(this.taskList);
  }

  removeTask(id: number) {
    this.taskList = this.taskList.filter((x) => x.id !== id);
    this.taskListSubject.next(this.taskList);
  }

  getUserID() {
    return this.testData.userId;
  }
}
