import { useEffect, useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigation } from "@react-navigation/native";
import { useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";

import { usePickImage } from "@hooks";

import {
  UploadProfilePhoto,
  useGetProfile,
  useUpdateProfile,
  useUploadProfilePhoto,
  VisibilityStatus,
} from "@domain";
import { QueryKeys } from "@infra";
import { useAuth, UserMetadata, useToastService } from "@services";

import { editProfileScreenSchema, EditProfileScreenSchemaType } from "./schema";
import { supabase } from "@api";

export const useEditProfileScreen = () => {
  const { session, updateUserMetadata, updateUserName } = useAuth();

  const userMetaData = session?.user.user_metadata as UserMetadata;
  const { showToast } = useToastService();

  const { profile, isLoading } = useGetProfile(session?.user?.id ?? "");

  const { isUpdating, handleUpdateProfile } = useUpdateProfile();

  const { handleUploadProfilePhoto } = useUploadProfilePhoto();

  const { photos, handleSetImage } = usePickImage({
    acceptMultipleImages: false,
  });

  const navigation = useNavigation();

  const queryClient = useQueryClient();

  const [profileVisibility, setProfileVisibility] =
    useState<VisibilityStatus>("ALL");

  const { control, watch, getValues, reset } =
    useForm<EditProfileScreenSchemaType>({
      resolver: zodResolver(editProfileScreenSchema),
      defaultValues: {
        bio: "",
        location: "",
        name: "",
      },
    });

  const canSave =
    profile?.name !== watch("name") ||
    profile?.bio !== watch("bio") ||
    profile?.location !== watch("location") ||
    profile?.visibilityStatus !== profileVisibility ||
    photos.length !== 0;

  async function updateProfile() {
    const { bio, location, name } = getValues();
    let data: UploadProfilePhoto.Result | undefined = undefined;
    try {
      if (photos.length > 0) {
        data = await handleUploadProfilePhoto({ photo: photos[0] });
      }

      await handleUpdateProfile({
        bio,
        location,
        photo: data?.publicUrl ?? profile?.photo ?? "",
        visibilityStatus: profileVisibility,
      });

      await updateUserName(name);
      if (data?.publicUrl) {
        updateUserMetadata({ ...userMetaData, avatar_url: data.publicUrl });
        await supabase.auth.updateUser({
          data: { avatar_url: data.publicUrl },
        });
      }
      queryClient.refetchQueries({ queryKey: [QueryKeys.GetProfile] });
      navigation.goBack();
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      showToast({
        duration: 7000,
        message: "Erro ao salvar seu perfil",
        type: "error",
      });
    }
  }

  useEffect(() => {
    if (!isLoading) {
      reset(profile);
      setProfileVisibility(profile?.visibilityStatus ?? "ALL");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  return {
    photos,
    control,
    canSave,
    profile,
    isUpdating,
    userMetaData,
    handleSetImage,
    profileVisibility,
    updateProfile,
    setProfileVisibility,
  };
};
