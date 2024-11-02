import { useState } from "react";

import { useGetAchievements } from "@domain";

export const useAchievementsScreen = () => {
  const [isRefreshing, setIsRefreshing] = useState(false);

  const { achievements, isLoading, refetch } = useGetAchievements();

  const current =
    achievements?.reduce((acc, category) => {
      const completedCount = category.achievements.filter(
        (a) => a.is_completed
      ).length;
      return completedCount === category.achievements.length ? acc + 1 : acc;
    }, 0) || 0;

  const handleRefresh = async () => {
    if (isRefreshing) return null;
    setIsRefreshing(true);
    await refetch();
    setIsRefreshing(false);
  };

  return {
    current,
    isLoading,
    achievements,
    isRefreshing,
    handleRefresh,
  };
};
