import { useState } from "react";

import {
  Box,
  Button,
  HeadingWithDescription,
  SmokingDetailsModal,
} from "@components";

import { formatDate } from "../utils";

import { SmokingActivitiesEmpty } from "./SmokingActivitiesEmpty";

interface SmokingActivitiesProps {
  date: Date;
}

const mock: string[] = ["ola"];

export const SmokingActivities = ({ date }: SmokingActivitiesProps) => {
  const [showSmokingDetailsModal, setShowSmokingDetailsModal] = useState(false);

  return (
    <Box paddingHorizontal={"s24"}>
      <HeadingWithDescription
        title={formatDate(date)}
        description="Atividades de fumo e não fumo"
      />
      <Box rowGap={"s10"} mt={"s20"}>
        {mock.length ? (
          mock.map((ac, i) => (
            <Button
              text={ac}
              key={i}
              iconName="wind"
              justifyContent={"flex-start"}
              onPress={() => setShowSmokingDetailsModal(true)}
            />
          ))
        ) : (
          <SmokingActivitiesEmpty />
        )}
      </Box>
      {showSmokingDetailsModal && (
        <SmokingDetailsModal
          visible={showSmokingDetailsModal}
          setVisible={setShowSmokingDetailsModal}
        />
      )}
    </Box>
  );
};
