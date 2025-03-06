import { useEffect, useState } from "react";

import { useGetLatestSmokingRecord } from "@domain";
import { calculateTimeDifferenceFromNow } from "@helpers";
import { useAuth } from "@services";

export function useTimeSinceLastSmokingRecord() {
  const { session } = useAuth();

  const { smokingRecord, isFetching } = useGetLatestSmokingRecord();
  const [timeSinceLastSmokingRecord, setTimeSinceLastSmokingRecord] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
  });

  const latestSmokingRecord =
    smokingRecord?.date ??
    session?.user?.user_metadata?.firstAppLaunch ??
    new Date().toISOString();

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
