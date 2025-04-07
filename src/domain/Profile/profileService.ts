import { decode } from "base64-arraybuffer";

import { supabase, supabaseEdgeFunction } from "@api";

import { profileAdapter } from "./profileAdapter";
import { GetProfile, UpdateProfile, UploadProfilePhoto } from "./profileTypes";

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

async function uploadProfilePhoto(
  params: UploadProfilePhoto.Params
): Promise<UploadProfilePhoto.Result> {
  const { error } = await supabase.storage
    .from("cig-zero-bucket")
    .upload(params.filePath, decode(params.base64), {
      contentType: params.contentType,
    });
  const { data } = supabase.storage
    .from("cig-zero-bucket")
    .getPublicUrl(params.filePath);
  if (error) throw error;

  return data;
}

async function updateProfile(
  params: UpdateProfile.Params
): Promise<UpdateProfile.Result> {
  try {
    await supabaseEdgeFunction.post("update-profile", {
      bio: params.bio,
      photo: params.photo,
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
  uploadProfilePhoto,
};
