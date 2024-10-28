import { useAuth, UserMetaData } from "@services";

export const usePastSmokingDataScreen = () => {
  const { session } = useAuth();

  const userMetaData = session?.user.user_metadata as UserMetaData;

  const userGoal = userMetaData.quitImmediatelyOrReduceGradually;
  const userYearsSmoking = userMetaData.howManyYearsSmoke;
  const userMainReasonForQuitting = userMetaData.mainReasonForQuitting;
  const userAverageCigarettesPerDay = userMetaData.howManyCigarettesPerDay;

  return {
    userGoal,
    userYearsSmoking,
    userMainReasonForQuitting,
    userAverageCigarettesPerDay,
  };
};
