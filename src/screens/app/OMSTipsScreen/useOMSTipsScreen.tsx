import { useEffect, useState } from "react";

import { differenceInHours } from "date-fns";

import { useGetLatestSmokingRecord } from "@domain";

export const useOMSTipsScreen = () => {
  const { smokingRecord } = useGetLatestSmokingRecord();

  const [
    hoursBetweenLastestSmokingRecord,
    setHoursBetweenLastestSmokingRecord,
  ] = useState(
    differenceInHours(new Date(), smokingRecord?.date ?? new Date())
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setHoursBetweenLastestSmokingRecord(
        differenceInHours(new Date(), smokingRecord?.date ?? new Date())
      );
    }, 1000);
    return () => clearTimeout(timeoutId);
  }, [smokingRecord]);

  return { hoursBetweenLastestSmokingRecord };
};
