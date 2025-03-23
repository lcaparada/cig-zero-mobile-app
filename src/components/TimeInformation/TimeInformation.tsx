import { Box } from "../Box/Box";
import { Text } from "../Text/Text";

interface TimeInformationProps {
  value: number;
  label: string;
}

export const TimeInformation = ({ label, value }: TimeInformationProps) => {
  return (
    <Box alignItems={"center"}>
      <Text weight="bold" color={"primary"} preset="titleBig">
        {value}
      </Text>
      <Text weight="medium" color={"primary"} preset="paragraphsBig">
        {label}
      </Text>
    </Box>
  );
};
