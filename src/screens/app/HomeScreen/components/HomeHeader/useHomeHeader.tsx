import { useEffect, useState } from "react";

import { useGetLatestSmokingRecord } from "@domain";
import { calculateTimeDifferenceFromNow } from "@helpers";
import { useAuth } from "@services";

export const useHomeHeader = () => {
  const { session } = useAuth();
  const { smokingRecord, isFetching } = useGetLatestSmokingRecord();

  const [timeSinceLastSmokingRecord, setTimeSinceLastSmokingRecord] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
  });

  useEffect(() => {
    if (!isFetching) {
      const interval = setInterval(() => {
        const date =
          smokingRecord?.date ??
          session?.user?.created_at ??
          new Date().toISOString();
        setTimeSinceLastSmokingRecord(calculateTimeDifferenceFromNow(date));
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isFetching, smokingRecord?.date, session?.user?.created_at]);

  return { timeSinceLastSmokingRecord };
};
