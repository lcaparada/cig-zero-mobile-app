import { Profile, ProfileAPI } from "./profileTypes";

function getProfile(profileAPI: ProfileAPI): Profile {
  return {
    bio: profileAPI.bio,
    name: profileAPI.name,
    photo: profileAPI.photo,
    location: profileAPI.location,
    level: {
      icon: profileAPI.level.icon,
      title: profileAPI.level.title,
      number: profileAPI.level.number,
      avatarIcon: profileAPI.level.avatar_icon,
      description: profileAPI.level.description,
    },
    totalAchievements: profileAPI.total_achievements,
    visibilityStatus: profileAPI.visibility_status,
  };
}

export const profileAdapter = {
  getProfile,
};
