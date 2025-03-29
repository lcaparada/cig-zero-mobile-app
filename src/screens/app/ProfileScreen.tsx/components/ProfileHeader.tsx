import React from "react";

import { SvgUri } from "react-native-svg";

import { Box, Avatar, Text } from "@components";

import { Profile } from "@domain";

export const ProfileHeader = ({ profile }: { profile: Profile }) => (
  <Box alignItems="center" rowGap="s12">
    <AvatarWithBadge
      avatarIcon={profile.level.avatarIcon}
      name={profile.name}
      photo={profile.photo}
    />
    <ProfileInfo
      name={profile.name}
      levelIcon={profile.level.icon}
      levelTitle={profile.level.title}
    />
  </Box>
);

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

type ProfileInfoProps = {
  name: string;
  levelTitle: string;
  levelIcon: string;
};

const ProfileInfo = ({ name, levelTitle, levelIcon }: ProfileInfoProps) => (
  <Box alignItems="center" justifyContent="center" rowGap="s6">
    <Text weight="semiBold" color="primary" preset="paragraphsXL">
      {name}
    </Text>
    {levelTitle && (
      <Text weight="bold" color="primary" preset="paragraphsXL">
        {levelTitle}
      </Text>
    )}
    {levelIcon && <SvgUri uri={levelIcon} width={60} height={60} />}
  </Box>
);
