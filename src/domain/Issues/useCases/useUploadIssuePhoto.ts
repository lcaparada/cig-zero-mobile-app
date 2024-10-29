import { useMutation } from "@tanstack/react-query";

import { useToastService } from "../../../services/toast/useToastService";
import { issuesService } from "../issuesService";
import { UploadIssuePhoto } from "../issuesTypes";

export const useUploadIssuePhoto = () => {
  const { showToast } = useToastService();

  const { mutateAsync, isPending: isUploadIssuePhotoPending } = useMutation<
    { publicUrl: string },
    Error,
    UploadIssuePhoto
  >({
    mutationFn: (params) => issuesService.uploadPhoto(params),
  });

  const handleUploadIssuePhoto = async (params: UploadIssuePhoto) => {
    try {
      const { publicUrl } = await mutateAsync(params);
      return publicUrl;
    } catch (error: any) {
      showToast({ message: error.message, type: "error", duration: 5000 });
    }
  };

  return {
    handleUploadIssuePhoto,
    isUploadIssuePhotoPending,
  };
};
