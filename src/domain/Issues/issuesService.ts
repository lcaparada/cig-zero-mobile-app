import { decode } from "base64-arraybuffer";

import { supabase } from "@api";

import { CreateIssue, UploadIssuePhoto } from "./issuesTypes";

const create = async ({
  id,
  userId,
  issueTitle,
  issuePhotos,
  issueDescription,
}: CreateIssue) => {
  const { error } = await supabase.from("issues").insert({
    user_id: userId,
    title: issueTitle,
    id: id ?? undefined,
    photos: issuePhotos,
    description: issueDescription,
  });
  if (error) throw new Error(error.message);
};

const uploadPhoto = async ({
  filePath,
  base64,
  contentType,
}: UploadIssuePhoto) => {
  const { error } = await supabase.storage
    .from("cig-zero-bucket")
    .upload(filePath, decode(base64), {
      contentType,
    });
  const { data } = supabase.storage
    .from("cig-zero-bucket")
    .getPublicUrl(filePath);
  if (error) throw new Error(error.message);
  return data;
};

export const issuesService = {
  create,
  uploadPhoto,
};
