import { useMutation } from "@tanstack/react-query";

import { secureStorage } from "@services";

import { feedbackService } from "../feedbackService";
import { PublishFeedback } from "../feedbackTypes";

export const usePublishFeedback = () => {
  const { mutateAsync } = useMutation<unknown, Error, PublishFeedback.Params>({
    mutationFn: (params) => feedbackService.publishFeedback(params),
  });

  async function markFeedbackAsAnswered(): Promise<void> {
    try {
      await secureStorage.setItem("feedbackAnswered", "true");
    } catch (error) {
      console.error("Failed to mark feedback as answered:", error);
    }
  }

  const handlePublishFeedback = async (params: PublishFeedback.Params) => {
    try {
      await mutateAsync(params);
      markFeedbackAsAnswered();
    } catch (error: any) {
      throw error;
    }
  };

  return {
    handlePublishFeedback,
  };
};
