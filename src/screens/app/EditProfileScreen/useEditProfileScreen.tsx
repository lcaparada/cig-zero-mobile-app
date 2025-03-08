import { useEffect, useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigation } from "@react-navigation/native";
import { useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";

import { useGetProfile, useUpdateProfile, VisibilityStatus } from "@domain";
import { QueryKeys } from "@infra";
import { useAuth, UserMetaData, useToastService } from "@services";

import { editProfileScreenSchema, EditProfileScreenSchemaType } from "./schema";

export const useEditProfileScreen = () => {
  const { session } = useAuth();

  const userMetaData = session?.user.user_metadata as UserMetaData;
  const { showToast } = useToastService();

  const { profile, isLoading } = useGetProfile(session?.user?.id ?? "");

  const { isUpdating, handleUpdateProfile } = useUpdateProfile();

  const navigation = useNavigation();

  const queryClient = useQueryClient();

  const [profileVisibility, setProfileVisibility] =
    useState<VisibilityStatus>("ALL");

  const { control, setValue, watch, getValues } =
    useForm<EditProfileScreenSchemaType>({
      resolver: zodResolver(editProfileScreenSchema),
      defaultValues: {
        bio: "",
        location: "",
      },
    });

  const canSave =
    profile?.bio !== watch("bio") ||
    profile.location !== watch("location") ||
    profile?.visibilityStatus !== profileVisibility;

  async function updateProfile() {
    const { bio, location } = getValues();
    try {
      await handleUpdateProfile({
        bio,
        location,
        visibilityStatus: profileVisibility,
      });
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
      setValue("bio", profile?.bio ?? "");
      setValue("location", profile?.location ?? "");
      setProfileVisibility(profile?.visibilityStatus ?? "ALL");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  return {
    control,
    canSave,
    isUpdating,
    userMetaData,
    profileVisibility,
    updateProfile,
    setProfileVisibility,
  };
};
