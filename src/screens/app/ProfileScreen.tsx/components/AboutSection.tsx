import { Box, Icon, Text } from "@components";

interface AboutSectionProps {
  bio: string;
  location: string;
}

export const AboutSection = ({ bio, location }: AboutSectionProps) => {
  if (!bio && !location) return null;
  return (
    <Box marginTop={"s12"}>
      {!!bio && (
        <Text
          textAlign={"center"}
          color={"backgroundSecondConstrast"}
          preset="paragraphsBig"
          weight="medium"
        >
          {bio}
        </Text>
      )}
      {!!location && (
        <Box
          flexDirection={"row"}
          columnGap={"s8"}
          alignItems={"center"}
          mt={"s12"}
          justifyContent={"center"}
        >
          <Icon color="backgroundSecondConstrast" name="mapPin" />
          <Text
            weight="medium"
            color={"backgroundSecondConstrast"}
            preset="paragraphsBig"
          >
            {location}
          </Text>
        </Box>
      )}
    </Box>
  );
};
