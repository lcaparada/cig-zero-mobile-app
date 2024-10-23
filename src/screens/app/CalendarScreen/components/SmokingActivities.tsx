import { useEffect, useState } from "react";

import { format } from "date-fns";

import {
  Box,
  Button,
  HeadingWithDescription,
  SmokingDetailsModal,
} from "@components";

import { SmokeLogWithDateAndCreatedAt } from "@domain";

import { formatDate } from "../utils";

import { SmokingActivitiesEmpty } from "./SmokingActivitiesEmpty";

interface SmokingActivitiesProps {
  date: Date;
  isLoading: boolean;
  smokingRecords: SmokeLogWithDateAndCreatedAt[];
}

export const SmokingActivities = ({
  date,
  isLoading,
  smokingRecords,
}: SmokingActivitiesProps) => {
  const [showSmokingDetailsModal, setShowSmokingDetailsModal] = useState(false);
  const [smokingRecordDetails, setSmokingRecordDetails] =
    useState<SmokeLogWithDateAndCreatedAt>({ created_at: "", date: "" });

  useEffect(() => {
    if (!showSmokingDetailsModal) {
      setSmokingRecordDetails({ created_at: "", date: "" });
    }
  }, [showSmokingDetailsModal]);

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
                iconName="wind"
                text={`1 cigarro às ${format(record.date, "HH:mm")}`}
                justifyContent={"flex-start"}
                onPress={() => {
                  setSmokingRecordDetails(record);
                  setShowSmokingDetailsModal(true);
                }}
              />
            ))
          ) : (
            <SmokingActivitiesEmpty />
          )
        ) : null}
      </Box>
      {showSmokingDetailsModal && (
        <SmokingDetailsModal
          smokingRecord={smokingRecordDetails}
          visible={showSmokingDetailsModal}
          setVisible={setShowSmokingDetailsModal}
        />
      )}
    </Box>
  );
};
