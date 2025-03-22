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
    <Box mt={"s6"}>
      {!!bio && (
        <Text
          textAlign={"center"}
          color={"primary"}
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
          mt={"s8"}
          justifyContent={"center"}
        >
          <Icon color="primary" name="mapPin" />
          <Text weight="medium" color={"primary"} preset="paragraphsBig">
            {location}
          </Text>
        </Box>
      )}
    </Box>
  );
};
