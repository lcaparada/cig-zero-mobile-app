import { User } from "@supabase/supabase-js";

import { UserMetaData } from "@services";

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

export namespace UpdateUserMetadata {
  export type Params = {
    yearsSmoking: string;
    cigarettesPerDay: string;
    pricePackCigarrete: string;
  };

  export type Result = UserMetaData;
}

export namespace UpdateNotificationToken {
  export type Params = {
    notificationToken: string;
  };
  export type Result = void;
}

export namespace UpdateUserInformation {
  export type Params = {
    name?: string;
    last_activity_at?: string;
  };
  export type Result = User;
}
