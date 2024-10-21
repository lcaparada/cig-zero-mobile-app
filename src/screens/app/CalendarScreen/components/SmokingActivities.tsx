import { Box, HeadingWithDescription, InformationItem } from "@components";

import { formatDate } from "../utils";

import { SmokingActivitiesEmpty } from "./SmokingActivitiesEmpty";

interface SmokingActivitiesProps {
  date: Date;
}

const mock: string[] = [];

export const SmokingActivities = ({ date }: SmokingActivitiesProps) => {
  return (
    <Box paddingHorizontal={"s24"}>
      <HeadingWithDescription
        title={formatDate(date)}
        description="Atividades de fumo e não fumo"
      />
      <Box rowGap={"s10"} mt={"s20"}>
        {mock.length ? (
          mock.map((ac, i) => <InformationItem key={i} icon="wind" text={ac} />)
        ) : (
          <SmokingActivitiesEmpty />
        )}
      </Box>
    </Box>
  );
};
