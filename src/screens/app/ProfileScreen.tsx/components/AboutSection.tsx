import { Box, Icon, Text } from "@components";

interface AboutSectionProps {
  bio: string;
  location: string;

  isMineProfile: boolean;
  showProfileForOtherPeople: boolean;
}

export const AboutSection = ({
  bio,
  isMineProfile,
  showProfileForOtherPeople,
  location,
}: AboutSectionProps) => {
  if (!bio && !location) return null;
  return (
    <Box>
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
      {(showProfileForOtherPeople || isMineProfile) && !!location && (
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
