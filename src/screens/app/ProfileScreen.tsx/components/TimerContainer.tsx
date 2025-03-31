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
  return (
    <Box {...$card} {...shadow}>
      <Box flexDirection={"row"} alignItems={"center"} columnGap={"s8"}>
        <Icon name="clock2" />
        <Text weight="medium" color={"primary"} preset="paragraphsBig">
          Tempo sem fumar
        </Text>
      </Box>
      <Box
        flexDirection={"row"}
        alignItems={"center"}
        columnGap={"s12"}
        justifyContent={"center"}
      >
        <TimeInformation label="dias" value={timeSinceLastSmokingRecord.days} />
        <TimeInformation
          label="horas"
          value={timeSinceLastSmokingRecord.hours}
        />
        <TimeInformation
          label="minutos"
          value={timeSinceLastSmokingRecord.minutes}
        />
      </Box>
    </Box>
  );
};

const $card: BoxProps = {
  mt: "s18",
  backgroundColor: "background",
  borderRadius: "s8",
  paddingHorizontal: "s12",
  borderWidth: 1,
  borderColor: "primary",
  paddingVertical: "s10",
};
