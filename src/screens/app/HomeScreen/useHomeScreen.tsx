import { useCallback, useState } from "react";

import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useQueryClient } from "@tanstack/react-query";

import { useTutorial } from "@hooks";

import { useUpdateUserInformation } from "@domain";
import { QueryKeys } from "@infra";

export const useHomeScreen = () => {
  const { handleUpdateUserInformation } = useUpdateUserInformation();

  const [isRefreshing, setIsRefreshing] = useState(false);

  const queryClient = useQueryClient();

  const { scrollRef } = useTutorial();

  const navigation = useNavigation();

  const handleRefresh = async () => {
    if (isRefreshing) return null;
    setIsRefreshing(true);
    const queryKeys = [
      QueryKeys.GetProgressData,
      QueryKeys.GetHistoricData,
      QueryKeys.GetMissions,
      QueryKeys.GetLatestSmokingRecord,
    ];
    try {
      await Promise.all(
        queryKeys.map((key) => queryClient.refetchQueries({ queryKey: [key] }))
      );
    } catch (error) {
      console.error("Error when try refresh data in Home Screen", error);
    } finally {
      setIsRefreshing(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      handleUpdateUserInformation({
        last_activity_at: new Date().toISOString(),
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
  );

  return {
    scrollRef,
    navigation,
    isRefreshing,
    handleRefresh,
  };
};
