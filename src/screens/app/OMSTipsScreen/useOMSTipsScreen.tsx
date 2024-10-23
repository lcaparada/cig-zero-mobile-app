import { differenceInHours } from "date-fns";

import { useGetLatestSmokingRecord } from "@domain";

export const useOMSTipsScreen = () => {
  const { smokingRecord } = useGetLatestSmokingRecord();

  const daysBetweenLastestSmokingRecord = differenceInHours(
    new Date(),
    smokingRecord?.date ?? new Date()
  );

  return { daysBetweenLastestSmokingRecord };
};
