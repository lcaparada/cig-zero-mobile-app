export interface MissionsAPI {
  category: {
    name: string;
    type: "REDUCTION_BASED" | "FINANCIAL_ECONOMY" | "TIME_BASED";
  };
  current: number;
  description: string;
  id: string;
  is_completed: boolean;
  target: number;
  title: string;
}

export interface Missions {
  category: {
    name: string;
    type: "REDUCTION_BASED" | "FINANCIAL_ECONOMY" | "TIME_BASED";
  };
  current: number;
  description: string;
  id: string;
  isCompleted: boolean;
  target: number;
  title: string;
}

export namespace GetAllMissions {
  export type Result = Missions[];
}
