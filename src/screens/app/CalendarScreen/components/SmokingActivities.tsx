import { format } from "date-fns";

import { Box, Button, HeadingWithDescription } from "@components";

import { SmokeLogWithDateAndCreatedAt } from "@domain";

import { formatDate } from "../utils";

import { SmokingActivitiesEmpty } from "./SmokingActivitiesEmpty";

interface SmokingActivitiesProps {
  date: Date;
  isLoading: boolean;
  smokingRecords: SmokeLogWithDateAndCreatedAt[];
  action: (record: SmokeLogWithDateAndCreatedAt) => void;
}

export const SmokingActivities = ({
  date,
  isLoading,
  smokingRecords,
  action,
}: SmokingActivitiesProps) => {
  return (
    <Box paddingHorizontal={"s24"}>
      <HeadingWithDescription
        title={formatDate(date)}
        description="Atividades de fumo e não fumo"
      />
      <Box rowGap={"s10"} mt={"s20"}>
        {!isLoading ? (
          smokingRecords?.length ? (
            smokingRecords?.map((record, i) => (
              <Button
                key={i}
                iconName="cigarette"
                text={`1 cigarro às ${format(record.date, "HH:mm")}`}
                justifyContent={"flex-start"}
                onPress={() => action(record)}
              />
            ))
          ) : (
            <SmokingActivitiesEmpty />
          )
        ) : null}
      </Box>
    </Box>
  );
};
