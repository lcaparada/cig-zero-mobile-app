import { supabaseEdgeFunction } from "@api";

import { profileAdapter } from "./profileAdapter";
import { GetProfile, UpdateProfile } from "./profileTypes";

async function getProfile(
  params: GetProfile.Params
): Promise<GetProfile.Result> {
  try {
    const { data } = await supabaseEdgeFunction.post("get-profile", {
      user_id: params.userId,
    });

    return profileAdapter.getProfile(data);
  } catch (error) {
    throw error;
  }
}

async function updateProfile(
  params: UpdateProfile.Params
): Promise<UpdateProfile.Result> {
  try {
    await supabaseEdgeFunction.post("update-profile", {
      bio: params.bio,
      location: params.location,
      visibility_status: params.visibilityStatus,
    });
  } catch (error) {
    throw error;
  }
}

export const profileService = {
  getProfile,
  updateProfile,
};
