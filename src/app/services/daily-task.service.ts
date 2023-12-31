import { Injectable } from '@angular/core';
import { Task } from '../interface/task';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { environment } from 'src/environments/environment.development';
import { environment } from 'src/environments/environment';
import { DailyTableService } from './daily-table.service';

@Injectable({
  providedIn: 'root',
})
export class DailyTaskService {
  apiData: Task[] = [];
  validURL: string;
  tableID: string = '';
  // Create a BehaviorSubject to store the task list
  taskListSubject = new BehaviorSubject<Task[]>([]);
  // Expose the observable$ part of the taskList subject (read only stream)
  taskList$: Observable<Task[]> = this.taskListSubject.asObservable();
  constructor(private http: HttpClient, private dailyTableService: DailyTableService) {
    this.validURL = '';
    this.taskList$.subscribe((data) => {
      this.apiData = data;
    });
  }

  // get all tasks from the database with the table id
  public async fetchTaskList(): Promise<Task[]> {
    return new Promise<Task[]>((resolve, reject) => {
      this.http
        .get<Task[]>(this.validURL, {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('access_token'),
          },
        })
        .subscribe({
          next: (data: Task[]) => {
            // Update data on the subject for dynamic updates
            this.taskListSubject.next(data);
            this.dailyTableService.fetchDailyTableById(this.tableID);
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
    this.tableID = tableID;
    this.validURL =
      environment.apiUrl + '/dailyTable/' + tableID + '/dailyTask';
  }

  getTaskList() {
    return this.apiData;
  }

  async fetchDailyTaskById(id: string): Promise<Task> {
    return new Promise<Task>((resolve, reject) => {
      this.http
        .get<Task>(this.validURL + '/task/' + id, {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('access_token'),
          },
        })
        .subscribe({
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
      Authorization: 'Bearer ' + localStorage.getItem('access_token'),
    });

    const body = {
      taskDescription: task,
      taskType: type,
    };

    // add the task to the database
    const addTaskResponse = await this.http.post<Task>(
      this.validURL + '/addTask',
      body,
      {
        headers: headers,
      }
    );
    // you need to subscribe to the response to initialize the call process
    addTaskResponse.subscribe(async (data: Task) => {
      // update the task list for the table
      await this.fetchTaskList();
    });
  }

  removeTask(id: string) {
    // this.taskList = this.taskList.filter((x) => x.id !== id);
    // this.taskListSubject.next(this.taskList);
    const response = this.http.delete(this.validURL + '/deleteTask/' + id, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('access_token'),
      },
    });
    response.subscribe(async (data) => {
      await this.fetchTaskList();
    });
  }

  updateTaskStatus(taskID: string, completed: boolean) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('access_token'),
    });
    const body = {
      completed: completed,
    };

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
