import { Box, Text } from "@components";

export interface PrivacyItemsProps {
  title: string;
  content: string;
}

export const PrivacyItems = ({ content, title }: PrivacyItemsProps) => {
  return (
    <Box rowGap={"s8"}>
      <Text weight="bold" preset="titleSmall" color={"backgroundConstrast"}>
        {title}
      </Text>
      <Text weight="medium" color={"backgroundConstrast"}>
        {content}
      </Text>
    </Box>
  );
};
