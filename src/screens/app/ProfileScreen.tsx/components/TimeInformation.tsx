import { Box, Text } from "@components";

interface TimeInformationProps {
  value: string;
  label: string;
}

export const TimeInformation = ({ label, value }: TimeInformationProps) => {
  return (
    <Box alignItems={"center"}>
      <Text weight="bold" color={"backgroundConstrast"} preset="titleBig">
        {value}
      </Text>
      <Text
        weight="medium"
        color={"backgroundConstrast"}
        preset="paragraphsBig"
      >
        {label}
      </Text>
    </Box>
  );
};
