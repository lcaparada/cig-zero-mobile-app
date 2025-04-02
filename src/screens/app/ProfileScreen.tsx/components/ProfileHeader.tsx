import { useState } from "react";

import * as Haptics from "expo-haptics";
import { SvgUri } from "react-native-svg";

import { Box, Avatar, Text, Icon, PressableBox, Popup } from "@components";

import { Profile } from "@domain";

import { AboutSection } from "./AboutSection";

export const ProfileHeader = ({
  profile,
  isMineProfile,
}: {
  profile: Profile;
  isMineProfile: boolean;
}) => {
  const showProfileForOtherPeople = profile?.visibilityStatus === "ALL";

  const [isLevelInfoPopupVisible, setLevelInfoPopupVisibility] =
    useState(false);

  function openLevelDescriptionPopup() {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    setLevelInfoPopupVisibility(true);
  }

  return (
    <Box alignItems="center" rowGap="s12">
      <AvatarWithBadge
        avatarIcon={profile.level.avatarIcon}
        name={profile.name}
        photo={profile.photo}
      />
      <Text weight="semiBold" color="primary" preset="paragraphsXL">
        {profile.name}
      </Text>
      <AboutSection
        bio={profile?.bio ?? ""}
        location={profile?.location ?? ""}
        isMineProfile={isMineProfile}
        showProfileForOtherPeople={showProfileForOtherPeople}
      />
      {profile.level.title && (
        <PressableBox
          flexDirection={"row"}
          columnGap={"s4"}
          alignItems={"center"}
          onPress={openLevelDescriptionPopup}
        >
          <Text weight="bold" color="primary" preset="paragraphsXL">
            {profile.level.title}
          </Text>
          <Icon color="primary" strokeWidth={2} name="infoCircle" />
        </PressableBox>
      )}
      {profile.level.icon && (
        <SvgUri uri={profile.level.icon} width={60} height={60} />
      )}
      {isLevelInfoPopupVisible && (
        <Popup
          title={profile.level.title}
          description={profile.level.description}
          visible={isLevelInfoPopupVisible}
          setVisible={setLevelInfoPopupVisibility}
        />
      )}
    </Box>
  );
};

type AvatarWithBadgeProps = {
  name: string;
  photo: string;
  avatarIcon: string | null;
};

const AvatarWithBadge = ({ avatarIcon, name, photo }: AvatarWithBadgeProps) => (
  <Box>
    {avatarIcon && (
      <Box bottom={-10} left={-10} position="absolute" zIndex={1}>
        <SvgUri uri={avatarIcon} width={50} height={50} />
      </Box>
    )}
    <Avatar
      size={80}
      borderRadius="full"
      name={name}
      textSize="titleBig"
      photo={photo}
    />
  </Box>
);
