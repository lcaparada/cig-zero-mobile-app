import { supabase } from "@api";

import { PublishFeedback } from "./feedbackTypes";

async function publishFeedback({
  feedback,
  userId,
}: PublishFeedback.Params): Promise<PublishFeedback.Result> {
  try {
    await supabase.from("user_feedback").insert({
      feedback,
      user_id: userId,
    });
  } catch (error) {
    throw error;
  }
}

export const feedbackService = {
  publishFeedback,
};
