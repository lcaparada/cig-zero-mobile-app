import { supabaseEdgeFunction } from "@api";

import { conversationsAdapter } from "./conversationsAdapter";
import {
  DeleteMessage,
  GetAuthorInfo,
  UpdateMessage,
  PublishMessage,
  GetConversationMessage,
  GetUnreadMessagesCount,
  GetRepliedMessage,
} from "./conversationsTypes";

async function getConversationMessages(params: GetConversationMessage.Params) {
  try {
    const { data } = await supabaseEdgeFunction.post(
      "get-conversation-messages",
      {
        user_id: params.userId ?? null,
        limit: params.limit,
        offset: params.offset,
        conversation_type: params.conversationType,
      }
    );

    return conversationsAdapter.getConversationMessagesAdapter(data.data);
  } catch (error) {
    throw error;
  }
}

async function getUnreadMessagesCount(
  params: GetUnreadMessagesCount.Params
): Promise<GetUnreadMessagesCount.Result> {
  try {
    const result = await supabaseEdgeFunction.post(
      "get-unread-messages-count",
      {
        last_time_opened_chat: params.lastTimeOpenedChat,
      }
    );
    return result.data;
  } catch (error) {
    throw error;
  }
}

async function getAuthorInfo(
  params: GetAuthorInfo.Params
): Promise<GetAuthorInfo.Result> {
  try {
    const result = await supabaseEdgeFunction.post("get-author-info", {
      author_id: params.authorId,
    });
    return result.data;
  } catch (error) {
    throw error;
  }
}

async function deleteMessage(
  params: DeleteMessage.Params
): Promise<DeleteMessage.Result> {
  try {
    await supabaseEdgeFunction.post("delete-conversation-message", {
      conversation_message_id: params.conversationMessageId,
    });
  } catch (error) {
    throw error;
  }
}

async function getRepliedMessage(
  params: GetRepliedMessage.Params
): Promise<GetRepliedMessage.Result> {
  try {
    const { data } = await supabaseEdgeFunction.post("get-replied-message", {
      replied_message_id: params.repliedMessageId,
    });
    return conversationsAdapter.getRepliedMessageAdapter(data);
  } catch (error) {
    throw error;
  }
}

async function updateMessage(
  params: UpdateMessage.Params
): Promise<UpdateMessage.Result> {
  try {
    await supabaseEdgeFunction.post("update-conversation-message", {
      conversation_message_id: params.conversationMessageId,
      new_text: params.newText,
    });
  } catch (error) {
    throw error;
  }
}

async function publishMessage(
  params: PublishMessage.Params
): Promise<PublishMessage.Result> {
  try {
    const { data } = await supabaseEdgeFunction.post(
      "publish-new-message-to-conversation",
      {
        text: params.text,
        target_user_id: params.targetUserId ?? null,
        replied_conversation_message_id:
          params.repliedConversationMessageId ?? null,
      }
    );
    return data;
  } catch (error) {
    throw error;
  }
}

export const conversationsService = {
  getAuthorInfo,
  deleteMessage,
  updateMessage,
  publishMessage,
  getRepliedMessage,
  getUnreadMessagesCount,
  getConversationMessages,
};
