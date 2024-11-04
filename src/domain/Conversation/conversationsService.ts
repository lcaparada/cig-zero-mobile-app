import { supabaseEdgeFunction } from "@api";

import { conversationsAdapter } from "./conversationsAdapter";
import {
  AddMessageToPrivateConversation,
  GetMessagesFromPrivateConversation,
} from "./conversationsTypes";

const getMessagesFromPrivateConversation =
  async (): Promise<GetMessagesFromPrivateConversation.Result> => {
    try {
      const { data } = await supabaseEdgeFunction.post(
        "get-private-conversation"
      );
      return conversationsAdapter.getMessagesFromPrivateConversationAdapter(
        data
      );
    } catch (error) {
      throw error;
    }
  };

const addMessageToPrivateConversation = async (
  params: AddMessageToPrivateConversation.Params
): Promise<AddMessageToPrivateConversation.Result> => {
  try {
    const { data } = await supabaseEdgeFunction.post(
      "add-new-message-to-private-conversation",
      {
        text: params.text,
        conversation_id: params.conversationId,
      }
    );
    return data;
  } catch (error) {
    throw error;
  }
};

export const conversationsService = {
  addMessageToPrivateConversation,
  getMessagesFromPrivateConversation,
};
