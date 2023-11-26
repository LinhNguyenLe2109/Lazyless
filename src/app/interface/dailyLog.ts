export interface DailyLog {
  id: string;
  dailyLogTaskList: [
    {
      id: string;
      taskName: string;
      startTime: Date;
      endTime: Date;
      taskType: string;
      note: string;
    }
  ];
  date: Date;
  userID: string;
}
