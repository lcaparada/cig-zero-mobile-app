import { Box, BoxProps, Icon, Text, TimeInformation } from "@components";
import { useTimeSinceLastSmokingRecord } from "@hooks";
import { shadow } from "@theme";

type TimerContainerProps = {
  userId: string;
};

export const TimerContainer = (props: TimerContainerProps) => {
  const { timeSinceLastSmokingRecord } = useTimeSinceLastSmokingRecord(
    props.userId
  );

  const timeInformationData = [
    { label: "dias", value: timeSinceLastSmokingRecord.days },
    { label: "horas", value: timeSinceLastSmokingRecord.hours },
    { label: "minutos", value: timeSinceLastSmokingRecord.minutes },
  ];

  return (
    <Box {...$card} {...shadow}>
      <Box flexDirection={"row"} alignItems={"center"} columnGap={"s8"}>
        <Icon name="clock2" />
        <Text weight="medium" color={"neutralLighest"} preset="paragraphsBig">
          Tempo sem fumar
        </Text>
      </Box>
      <Box
        flexDirection={"row"}
        alignItems={"center"}
        columnGap={"s12"}
        justifyContent={"center"}
      >
        {timeInformationData.map((data, index) => (
          <TimeInformation
            key={index}
            color="neutralLighest"
            label={data.label}
            value={data.value}
          />
        ))}
      </Box>
    </Box>
  );
};

const $card: BoxProps = {
  mt: "s18",
  backgroundColor: "primary",
  borderRadius: "s8",
  paddingHorizontal: "s12",
  borderWidth: 1,
  borderColor: "primary",
  paddingVertical: "s10",
};
