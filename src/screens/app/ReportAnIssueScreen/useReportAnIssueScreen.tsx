import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigation } from "@react-navigation/native";
import * as FileSystem from "expo-file-system";
import { useForm } from "react-hook-form";
import uuid from "react-native-uuid";

import { usePickImage } from "@hooks";

import { useCreateIssue, useUploadIssuePhoto } from "@domain";
import { useAuth } from "@services";

import {
  reportAnIssueScreenSchema,
  ReportAnIssueScreenSchemaType,
} from "./reportAnIssueScreenSchema";

export const useReportAnIssueScreen = () => {
  const { session } = useAuth();

  const { photos, handleSetImage, handleRemoveImage } = usePickImage({
    limit: 3,
    acceptMultipleImages: true,
  });

  const { isUploadIssuePhotoPending, handleUploadIssuePhoto } =
    useUploadIssuePhoto();
  const { isCreateIssuePending, handleCreateIssue } = useCreateIssue();

  const navigation = useNavigation();

  const { control, getValues, formState } =
    useForm<ReportAnIssueScreenSchemaType>({
      resolver: zodResolver(reportAnIssueScreenSchema),
      defaultValues: {
        issueTitle: "",
        issueDescription: "",
      },
    });

  const handleCreateIssueAndUploadPhotos = async () => {
    const { issueTitle, issueDescription } = getValues();

    let issuePhotos = [];

    const id = uuid.v4();

    for (const photo of photos) {
      const base64 = await FileSystem.readAsStringAsync(photo, {
        encoding: "base64",
      });
      const filePath = `issues-photos/${id}/${new Date().getTime()}.jpeg`;
      const contentType = "image/jpeg";
      const publicUrl = await handleUploadIssuePhoto({
        base64,
        filePath,
        contentType,
      });
      if (publicUrl) {
        issuePhotos.push(publicUrl);
      }
    }

    await handleCreateIssue({
      issueTitle,
      issuePhotos,
      issueDescription,
      id: id as string,
      userId: session?.user?.id ?? "",
    });

    navigation.goBack();
  };

  return {
    photos,
    control,
    formState,
    isCreateIssuePending,
    isUploadIssuePhotoPending,
    handleSetImage,
    handleRemoveImage,
    handleCreateIssueAndUploadPhotos,
  };
};
