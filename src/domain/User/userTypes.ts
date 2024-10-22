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
