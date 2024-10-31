import { Box, Text } from "@components";

export interface TermsItemsProps {
  title: string;
  content: string;
}

export const TermsItems = ({ content, title }: TermsItemsProps) => {
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
