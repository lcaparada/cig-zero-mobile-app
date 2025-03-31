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
      totalAccXp: profileAPI.level.total_acc_xp,
      nextLevelXp: profileAPI.level.next_level_xp,
    },
    visibilityStatus: profileAPI.visibility_status,
    totalAchievements: profileAPI.total_achievements,
    totalMissionsConcluded: profileAPI.total_missions_concluded,
  };
}

export const profileAdapter = {
  getProfile,
};
