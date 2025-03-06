import { Profile, ProfileAPI } from "./profileTypes";

function getProfile(profileAPI: ProfileAPI): Profile {
  return {
    bio: profileAPI.bio,
    location: profileAPI.location,
    totalAchievements: profileAPI.total_achievements,
    visibilityStatus: profileAPI.visibility_status,
  };
}

export const profileAdapter = {
  getProfile,
};
