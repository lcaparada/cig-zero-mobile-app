export interface MissionsAPI {
  category: {
    name: string;
    type: "REDUCTION_BASED" | "FINANCIAL_ECONOMY" | "TIME_BASED";
  };
  data: {
    current: number;
    target: number;
  }[];
  percentage: number;
  description: string;
  id: string;
  title: string;
}

export interface Missions {
  category: {
    name: string;
    type: "REDUCTION_BASED" | "FINANCIAL_ECONOMY" | "TIME_BASED";
  };
  data: {
    current: number;
    target: number;
  }[];
  percentage: number;
  description: string;
  id: string;
  title: string;
}

export namespace GetAllMissions {
  export type Result = Missions[];
}
