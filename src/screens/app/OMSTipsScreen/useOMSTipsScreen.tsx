import { useEffect, useRef } from "react";

import { useIsFocused } from "@react-navigation/native";
import { differenceInHours } from "date-fns";

import { useGetLatestSmokingRecord } from "@domain";
import { useAuth } from "@services";

export const useOMSTipsScreen = () => {
  const { session } = useAuth();
  const { smokingRecord, isRefetching, refetch } = useGetLatestSmokingRecord();

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
      smokingRecord?.date ?? session?.user?.created_at ?? new Date()
    ),
    isRefetching,
    refetch,
  };
};
