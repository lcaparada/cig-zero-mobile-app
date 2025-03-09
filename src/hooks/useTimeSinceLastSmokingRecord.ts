import { useEffect, useState } from "react";

import { useGetUserLastSmoke } from "@domain";
import { calculateTimeDifferenceFromNow } from "@helpers";

export function useTimeSinceLastSmokingRecord(userId: string) {
  const { smokingRecord, isFetching } = useGetUserLastSmoke(userId);

  const [timeSinceLastSmokingRecord, setTimeSinceLastSmokingRecord] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
  });

  const latestSmokingRecord = smokingRecord ?? new Date().toISOString();

  useEffect(() => {
    if (isFetching) return;

    const updateTimer = () => {
      const date = latestSmokingRecord;
      setTimeSinceLastSmokingRecord(calculateTimeDifferenceFromNow(date));
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, [isFetching, latestSmokingRecord]);

  return { timeSinceLastSmokingRecord, latestSmokingRecord };
}
