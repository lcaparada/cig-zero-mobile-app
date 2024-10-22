type SmokeLog = {
  id: string;
  date: string;
  user_id: string;
  created_at: string;
};

export namespace GetLatestSmokingRecord {
  export type Params = {
    userId: string;
  };
  export type Result = SmokeLog | null;
}
