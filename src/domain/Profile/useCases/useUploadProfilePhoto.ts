import { useMutation } from "@tanstack/react-query";
import * as FileSystem from "expo-file-system";
import uuid from "react-native-uuid";

import { profileService } from "../profileService";
import { UploadProfilePhoto } from "../profileTypes";

export const useUploadProfilePhoto = () => {
  const { mutateAsync, isPending } = useMutation<
    UploadProfilePhoto.Result,
    Error,
    UploadProfilePhoto.Params
  >({
    mutationFn: (params) => profileService.uploadProfilePhoto(params),
  });

  const handleUploadProfilePhoto = async ({ photo }: { photo: string }) => {
    try {
      const id = uuid.v4();

      const base64 = await FileSystem.readAsStringAsync(photo, {
        encoding: "base64",
      });
      const filePath = `profiles-photos/${id}/${new Date().getTime()}.jpeg`;
      const contentType = "image/jpeg";
      const result = await mutateAsync({ base64, contentType, filePath });
      return result;
    } catch (error) {
      console.error("Error uploading profile photo:", error);
    }
  };

  return {
    handleUploadProfilePhoto,
    isUpdating: isPending,
  };
};
