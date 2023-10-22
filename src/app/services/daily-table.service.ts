import { Injectable } from '@angular/core';
import { DailyTable } from '../interface/dailyTable';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class DailyTableService {
  dailyTableURL: string;
  tableList: DailyTable[] = [];
  dailyTableSubject = new BehaviorSubject<DailyTable[]>([]);
  tableList$ = this.dailyTableSubject.asObservable();
  tableNum: number = 0;
  tableNumSubject = new BehaviorSubject<number>(0);
  tableNum$ = this.tableNumSubject.asObservable();
  constructor(private http: HttpClient) {
    this.dailyTableURL = environment.apiUrl + '/dailyTable';
    this.tableList$.subscribe((data) => {
      this.tableList = data;
    });
    this.tableNum$.subscribe((data) => {
      this.tableNum = data;
    });
    this.fetchDailyTableList();
  }

  private async fetchDailyTableList() {
    await this.http.get(this.dailyTableURL).subscribe((data) => {
      console.log(data);
      this.dailyTableSubject.next(data as DailyTable[]);
      this.tableNumSubject.next((data as DailyTable[]).length);
    });
  }

  getTaskList() {
    return this.tableList;
  }

  getTableNum() {
    return this.tableNum;
  }

  async getDailyTableNum() {
    const response = await this.http.get(this.dailyTableURL + '/count');
    response.subscribe(async (data) => {
      return data as number;
    });
  }

  async fetchDailyTableById(id: string) {
    const response = await this.http.get(this.dailyTableURL + '/' + id);
    response.subscribe(async (data) => {
      return data as DailyTable;
    });
  }

  async addDailyTable() {
    const response = await this.http.post(this.dailyTableURL + '/add', {});
    response.subscribe(async (data) => {
      await this.fetchDailyTableList();
    });
  }

  async addTaskIdToDailyTable(tableId: string, taskId: string) {
    const response = await this.http.put(
      this.dailyTableURL + '/' + tableId + '/addTask/' + tableId,
      taskId
    );
    response.subscribe(async (data) => {
      await this.fetchDailyTableList();
    });
  }

  async deleteDailyTable(id: string) {
    const response = await this.http.delete(
      this.dailyTableURL + '/delete' + id
    );
    response.subscribe(async (data) => {
      await this.fetchDailyTableList();
    });
  }
}
