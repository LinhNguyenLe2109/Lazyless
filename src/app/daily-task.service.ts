import { ChangeDetectorRef, Injectable } from '@angular/core';
import { Task } from './interface/task';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

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
  apiData: Task[] = [];
  newUnassignedId: number = -1;
  // Create a BehaviorSubject to store the task list
  taskListSubject = new BehaviorSubject<Task[]>([]);
  // Expose the observable$ part of the taskList subject (read only stream)
  taskList$: Observable<Task[]> = this.taskListSubject.asObservable();
  constructor(private http: HttpClient) {
    // get test data
    this.taskList = this.testData.data;
    this.newUnassignedId = Math.max(...this.taskList.map((x) => x.id));
    // this.taskListSubject.next(this.taskList);
    // get data from url
    this.fetchTaskList();
    this.taskList$.subscribe((data) => {
      this.apiData = data;
    });
  }

  private async fetchTaskList() {
    await this.http.get(environment.apiUrl).subscribe((data) => {
      console.log(data);
      this.taskListSubject.next(data as Task[]);
    });
  }

  getTaskList() {
    return this.apiData;
    // return this.taskList;
  }

  async addTask(task: string, type: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    const body = {
      taskDescription: task,
      taskType: type,
    };

    const response = await this.http.post(
      environment.apiUrl + '/addTask',
      body,
      { headers: headers }
    );
    this.fetchTaskList();
  }

  removeTask(id: number) {
    this.taskList = this.taskList.filter((x) => x.id !== id);
    this.taskListSubject.next(this.taskList);
  }

  getUserID() {
    return this.testData.userId;
  }
}
