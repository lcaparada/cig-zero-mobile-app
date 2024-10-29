import { User } from "@supabase/supabase-js";

export namespace GetProgressData {
  export type Result = {
    timeSaved: number;
    moneySaved: number;
    daysWithoutSmoking: number;
    avoidedCigarettes: number;
  };
}

export namespace GetHistoricData {
  export type Result = {
    lostTimeInDays: number;
    moneySpent: number;
    smokedCigarettes: number;
  };
}

export namespace UpdateUserInformation {
  export type Params = {
    name: string;
  };
  export type Result = User;
}
