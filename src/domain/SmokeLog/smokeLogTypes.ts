export type SmokeLog = {
  id: string;
  date: string;
  user_id: string;
  created_at: string;
};

export type SmokeLogWithDateAndCreatedAt = Pick<
  SmokeLog,
  "date" | "created_at" | "id"
>;

export type GetAllSmokingRecordsByMonthProps = {
  selectedDate: string;
};

export namespace GetLatestSmokingRecord {
  export type Params = {
    userId: string;
  };
  export type Result = SmokeLog | null;
}

export namespace GetAllSmokingRecordsByMonth {
  export type Params = {
    userId: string;
    startDate: string;
    endDate: string;
  };
  export type Result = SmokeLogWithDateAndCreatedAt[];
}

export namespace AddSmokingRecord {
  export type Params = Pick<SmokeLog, "date" | "user_id">;
  export type Result = void;
}

export namespace DeleteSmokingRecord {
  export type Params = Pick<SmokeLog, "id" | "user_id">;
  export type Result = void;
}

export interface YearlyData {
  values: number;
  year: number;
}

type StatisticsCategory = {
  interval: number[];
  data: YearlyData[];
};

export type StatisticsSummary = {
  [key: string]: StatisticsCategory;
};

export namespace GetChartData {
  export type Result = StatisticsSummary;
}
