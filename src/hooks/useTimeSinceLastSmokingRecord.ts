import { useEffect, useState } from "react";

import { useGetUserLastSmoke } from "@domain";
import { calculateTimeDifferenceFromNow } from "@helpers";

export function useTimeSinceLastSmokingRecord(userId: string) {
  const { smokingRecord, isLoading } = useGetUserLastSmoke(userId);

  const [timeSinceLastSmokingRecord, setTimeSinceLastSmokingRecord] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
  });

  const latestSmokingRecord = smokingRecord ?? new Date().toISOString();

  function updateTimer() {
    const date = latestSmokingRecord;
    calculateTimeDifferenceFromNow(date);
    setTimeSinceLastSmokingRecord(calculateTimeDifferenceFromNow(date));
  }

  useEffect(() => {
    if (isLoading) return;
    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading, latestSmokingRecord]);

  return { timeSinceLastSmokingRecord, latestSmokingRecord };
}
