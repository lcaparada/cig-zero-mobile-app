import { useEffect, useState } from "react";

import { useNavigation } from "@react-navigation/native";

import { useGetLatestSmokingRecord } from "@domain";
import { calculateTimeDifferenceFromNow } from "@helpers";
import { useAuth } from "@services";

export const useHomeHeader = () => {
  const { session } = useAuth();
  const { smokingRecord, isFetching } = useGetLatestSmokingRecord();

  const navigation = useNavigation();

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
          session?.user?.user_metadata?.firstAppLaunch ??
          new Date().toISOString();
        setTimeSinceLastSmokingRecord(calculateTimeDifferenceFromNow(date));
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [
    isFetching,
    smokingRecord?.date,
    session?.user?.user_metadata?.firstAppLaunch,
  ]);

  return { navigation, timeSinceLastSmokingRecord };
};
