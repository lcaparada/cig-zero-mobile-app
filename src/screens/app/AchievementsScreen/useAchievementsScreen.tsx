import { useGetAchievements } from "@domain";

export const useAchievementsScreen = () => {
  const { achievements, isLoading, isRefetching, refetch } =
    useGetAchievements();

  const current =
    achievements?.reduce((acc, category) => {
      const completedCount = category.achievements.filter(
        (a) => a.is_completed
      ).length;
      return completedCount === category.achievements.length ? acc + 1 : acc;
    }, 0) || 0;

  return {
    current,
    isLoading,
    achievements,
    isRefetching,
    refetch,
  };
};
