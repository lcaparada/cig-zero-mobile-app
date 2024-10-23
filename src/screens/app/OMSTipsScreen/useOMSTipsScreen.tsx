import { useEffect, useRef } from "react";

import { useIsFocused } from "@react-navigation/native";
import { differenceInHours } from "date-fns";

import { useGetLatestSmokingRecord } from "@domain";

export const useOMSTipsScreen = () => {
  const { refetch, smokingRecord } = useGetLatestSmokingRecord();

  const firstRenderRef = useRef(true);
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused && !firstRenderRef.current) {
      refetch();
    }
    firstRenderRef.current = false;
  }, [isFocused, refetch]);

  return {
    hoursBetweenLastestSmokingRecord: differenceInHours(
      new Date(),
      smokingRecord?.date ?? new Date()
    ),
  };
};
