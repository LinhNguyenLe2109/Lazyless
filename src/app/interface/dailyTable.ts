export interface DailyTable {
  id: string;
  taskIdList: [string];
  date: Date;
  completedAll: boolean;
  completedRate: number;
}
