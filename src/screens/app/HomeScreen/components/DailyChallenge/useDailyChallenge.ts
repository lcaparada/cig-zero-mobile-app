import { useGetDailyChallenges } from "src/domain/Challenge";

export const useDailyChallenge = () => {
  const { dailyChallenges, isFetching } = useGetDailyChallenges();

  return {
    dailyChallenges,
    isFetching,
  };
};
