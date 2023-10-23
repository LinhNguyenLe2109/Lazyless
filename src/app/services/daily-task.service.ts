import { ChangeDetectorRef, Injectable } from '@angular/core';
import { Task } from '../interface/task';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class DailyTaskService {
  apiData: Task[] = [];
  validURL: string;
  // Create a BehaviorSubject to store the task list
  taskListSubject = new BehaviorSubject<Task[]>([]);
  // Expose the observable$ part of the taskList subject (read only stream)
  taskList$: Observable<Task[]> = this.taskListSubject.asObservable();
  constructor(private http: HttpClient) {
    this.validURL = '';
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

  setURL(id: string) {
    this.validURL = environment.apiUrl + '/' + id;
  }

  getTaskList() {
    return this.apiData;
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
    // you need to subscribe to the response to initialize the call process
    response.subscribe(async (data) => {
      await this.fetchTaskList();
    });
  }

  removeTask(id: string) {
    // this.taskList = this.taskList.filter((x) => x.id !== id);
    // this.taskListSubject.next(this.taskList);
    const response = this.http.delete(environment.apiUrl + '/deleteTask/' + id);
    response.subscribe(async (data) => {
      await this.fetchTaskList();
    });
  }

  // getUserID() {
  //   return this.testData.userId;
  // }

  updateTaskStatus(taskID: string, completed: boolean) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const body = {
      completed: completed,
    };

    console.log(body);

    const response = this.http.put(
      environment.apiUrl + '/updateTask/' + taskID,
      body,
      { headers: headers }
    );
    response.subscribe(async (data) => {
      await this.fetchTaskList();
    });
  }
}
