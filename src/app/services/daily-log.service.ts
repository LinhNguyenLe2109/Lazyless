import { Injectable } from '@angular/core';
import { DailyLog } from '../interface/dailyLog';
import { HttpClient } from '@angular/common/http';
// import { environment } from 'src/environments/environment.development';
import { environment } from 'src/environments/environment';
import { DailyLogTask } from '../interface/dailyLogTask';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DailyLogService {
  dailyLogURL: string = environment.apiUrl + '/dailyLog';
  // For a list of logs
  logsSubject = new BehaviorSubject<DailyLog[]>([]);
  logs$ = this.logsSubject.asObservable();
  // For a single log
  logSubject = new BehaviorSubject<DailyLog | null>(null);
  log$ = this.logSubject.asObservable();
  // For a list of tasks
  tasksSubject = new BehaviorSubject<DailyLogTask[]>([]);
  tasks$ = this.tasksSubject.asObservable();
  constructor(private http: HttpClient) {
    this.getAllDailyLogs();
  }

  // GET
  getAllDailyLogs(): Promise<DailyLog[]> {
    return new Promise((resolve, reject) => {
      this.http
        .get(this.dailyLogURL, {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('access_token'),
          },
        })
        .subscribe({
          next: (data) => {
            this.logsSubject.next(data as DailyLog[]);
            resolve(data as DailyLog[]);
          },
          error: (err) => {
            reject(err);
          },
        });
    });
  }

  getDailyLogById(id: string) {
    return new Promise((resolve, reject) => {
      this.http
        .get(this.dailyLogURL + '/' + id, {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('access_token'),
          },
        })
        .subscribe({
          next: (data) => {
            const log = data as DailyLog;
            this.logSubject.next(log);
            if (log?.dailyLogTaskList.length > 0) {
              this.getAllDailyLogTasks(id);
            } else {
              this.tasksSubject.next([]);
            }

            resolve(data as DailyLog);
          },
          error: (err) => {
            reject(err);
          },
        });
    });
  }

  getAllDailyLogTasks(parentLogId: string): Promise<DailyLogTask[]> {
    return new Promise((resolve, reject) => {
      this.http
        .get(this.dailyLogURL + "/" + parentLogId + '/task', {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('access_token'),
          },
        })
        .subscribe({
          next: (data) => {
            this.tasksSubject.next(data as DailyLogTask[]);
            resolve(data as DailyLogTask[]);
          },
          error: (err) => {
            reject(err);
          },
        });
    });
  }

  // POST

  async addNewDailyLog() {
    let res = await this.http.post(
      this.dailyLogURL + '/add',
      {},
      {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('access_token'),
        },
      }
    );
    await res.subscribe(async (data) => {
      await this.getAllDailyLogs();
    });
  }

  async addNewTaskToDailyLog(task: DailyLogTask) {
    let body: DailyLogTask = {
      id: null,
      taskName: task.taskName,
      startTime: task.startTime,
      endTime: task.endTime,
      taskType: task.taskType,
      note: task.note,
      parentLogId: task.parentLogId,
    };
    let res = await this.http.post(
      this.dailyLogURL + '/' + task.parentLogId + '/task/addTask',
      body,
      {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('access_token'),
        },
      }
    );
    await res.subscribe(async (data) => {
      await this.getDailyLogById(task.parentLogId);
    });
  }

  // Update

  async updateDailyLogTask(task: DailyLogTask) {
    let body: DailyLogTask = {
      id: task.id,
      taskName: task.taskName,
      startTime: task.startTime,
      endTime: task.endTime,
      taskType: task.taskType,
      note: task.note,
      parentLogId: task.parentLogId,
    };
    let res = await this.http.put(
      this.dailyLogURL + '/' + task.parentLogId + '/task /updateTask/' + task.id,
      { body },
      {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('access_token'),
        },
      }
    );
    await res.subscribe(async (data) => {
      await this.getDailyLogById(task.parentLogId);
    });
  }

  // Delete

  async deleteDailyLog(id: string) {
    let res = await this.http.delete(this.dailyLogURL + '/delete/' + id, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('access_token'),
      },
    });
    await res.subscribe(async (data) => {
      await this.getAllDailyLogs();
    });
  }

  async deleteDailyLogTask(dailyLogId: string, taskId: string) {
    let res = await this.http.delete(
      this.dailyLogURL + '/' + dailyLogId + '/task/deleteTask/' + taskId,
      {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('access_token'),
        },
      }
    );
    await res.subscribe(async (data) => {
      await this.getDailyLogById(dailyLogId);
    });
  }
}
