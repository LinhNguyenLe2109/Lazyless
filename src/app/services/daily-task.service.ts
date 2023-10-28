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
    this.taskList$.subscribe((data) => {
      this.apiData = data;
    });
  }

  // get all tasks from the database with the table id
  public async fetchTaskList(): Promise<Task[]> {
    return new Promise<Task[]>((resolve, reject) => {
      this.http.get<Task[]>(this.validURL).subscribe({
        next: (data: Task[]) => {
          // Update data on the subject for dynamic updates
          this.taskListSubject.next(data);
          // return data
          resolve(data);
        },
        error: (err) => {
          reject(err);
        },
      });
    });
  }

  setURL(tableID: string) {
    this.validURL = environment.apiUrl + '/' + tableID +"/dailyTask";
  }

  getTaskList() {
    return this.apiData;
  }

  async fetchDailyTaskById(id: string): Promise<Task> {
    return new Promise<Task>((resolve, reject) => {
      this.http.get<Task>(this.validURL + '/task/' + id).subscribe({
        next: (data: Task) => {
          resolve(data);
        },
        error: (err) => {
          reject(err);
        },
      });
    });
  }

  async addTask(task: string, type: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    const body = {
      taskDescription: task,
      taskType: type,
    };

    const response = await this.http.post(this.validURL + '/addTask', body, {
      headers: headers,
    });
    // you need to subscribe to the response to initialize the call process
    response.subscribe(async (data) => {
      await this.fetchTaskList();
    });
  }

  removeTask(id: string) {
    // this.taskList = this.taskList.filter((x) => x.id !== id);
    // this.taskListSubject.next(this.taskList);
    const response = this.http.delete(this.validURL + '/deleteTask/' + id);
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
      this.validURL + '/updateTask/' + taskID,
      body,
      { headers: headers }
    );
    response.subscribe(async (data) => {
      await this.fetchTaskList();
    });
  }
}
