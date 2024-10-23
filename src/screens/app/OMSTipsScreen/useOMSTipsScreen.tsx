import { differenceInHours } from "date-fns";

import { useGetLatestSmokingRecord } from "@domain";

export const useOMSTipsScreen = () => {
  const { smokingRecord } = useGetLatestSmokingRecord();

  const hoursBetweenLastestSmokingRecord = differenceInHours(
    new Date(),
    smokingRecord?.date ?? new Date()
  );

  return { hoursBetweenLastestSmokingRecord };
};
