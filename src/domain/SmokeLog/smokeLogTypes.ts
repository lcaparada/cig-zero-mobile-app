export type SmokeLog = {
  id: string;
  date: string;
  user_id: string;
  created_at: string;
};

export type SmokeLogWithDateAndCreatedAt = Pick<
  SmokeLog,
  "date" | "created_at"
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
