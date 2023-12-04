import { Injectable } from '@angular/core';
import { DailyLog } from '../interface/dailyLog';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { DailyLogTask } from '../interface/dailyLogTask';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DailyLogService {
  dailyLogURL: string = environment.apiUrl + '/dailyLog';
  logsSubject = new BehaviorSubject<DailyLog[]>([]);
  logs$ = this.logsSubject.asObservable();
  logSubject = new BehaviorSubject<DailyLog | null>(null);
  log$ = this.logSubject.asObservable();
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
            this.logSubject.next(data as DailyLog);
            resolve(data as DailyLog);
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

  async addNewTaskToDailyLog(id: string, task: DailyLogTask) {
    let body: DailyLogTask = {
      id: null,
      taskName: task.taskName,
      startTime: task.startTime,
      endTime: task.endTime,
      taskType: task.taskType,
      note: task.note,
    };
    let res = await this.http.post(
      this.dailyLogURL + '/' + id + '/addTask',
      { body },
      {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('access_token'),
        },
      }
    );
    await res.subscribe(async (data) => {
      await this.getDailyLogById(id);
    });
  }

  // Update

  async updateDailyLogTask(id: string, task: DailyLogTask) {
    let body: DailyLogTask = {
      id: task.id,
      taskName: task.taskName,
      startTime: task.startTime,
      endTime: task.endTime,
      taskType: task.taskType,
      note: task.note,
    };
    let res = await this.http.put(
      this.dailyLogURL + '/' + id + '/updateTask',
      { body },
      {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('access_token'),
        },
      }
    );
    await res.subscribe(async (data) => {
      await this.getDailyLogById(id);
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
      this.dailyLogURL + '/' + dailyLogId + '/deleteTask/' + taskId,
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
