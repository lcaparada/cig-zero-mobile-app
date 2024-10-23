import { differenceInHours } from "date-fns";

import { useGetLatestSmokingRecord } from "@domain";

export const useOMSTipsScreen = () => {
  const { smokingRecord } = useGetLatestSmokingRecord();

  const daysBetweenLastestSmokingRecord = differenceInHours(
    smokingRecord?.date ?? new Date(),
    new Date()
  );

  return { daysBetweenLastestSmokingRecord };
};
