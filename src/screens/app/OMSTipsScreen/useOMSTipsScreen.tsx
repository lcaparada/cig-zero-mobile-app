import { useEffect, useRef, useState } from "react";

import { useIsFocused } from "@react-navigation/native";
import { differenceInHours } from "date-fns";

import { useGetLatestSmokingRecord } from "@domain";
import { useAuth } from "@services";

export const useOMSTipsScreen = () => {
  const [isRefreshing, setIsRefreshing] = useState(false);

  const { session } = useAuth();
  const { smokingRecord, refetch } = useGetLatestSmokingRecord(
    session?.user?.id ?? ""
  );

  const firstRenderRef = useRef(true);
  const isFocused = useIsFocused();

  const handleRefresh = async () => {
    if (isRefreshing) return null;
    setIsRefreshing(true);
    await refetch();
    setIsRefreshing(false);
  };

  useEffect(() => {
    if (isFocused && !firstRenderRef.current) {
      refetch();
    }
    firstRenderRef.current = false;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFocused]);

  return {
    hoursBetweenLastestSmokingRecord: differenceInHours(
      new Date(),
      smokingRecord?.date ?? session?.user?.created_at ?? new Date()
    ),

    isRefreshing,
    handleRefresh,
  };
};
