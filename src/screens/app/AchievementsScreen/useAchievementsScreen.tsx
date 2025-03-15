import { useGetAchievements } from "@domain";

export const useAchievementsScreen = () => {
  const { achievements } = useGetAchievements();

  return { achievements };
};
