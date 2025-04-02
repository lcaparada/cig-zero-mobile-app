import { useGetAchievements } from "@domain";

export const useAchievementsScreen = () => {
  const { achievements, isGettingAchievements } = useGetAchievements();

  return { achievements, isGettingAchievements };
};
