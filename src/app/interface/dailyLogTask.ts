export interface DailyLogTask {
  id: string | null;
  taskName: string;
  startTime: Date;
  endTime: Date;
  taskType: string;
  note: string;
  parentLogId: string;
}
