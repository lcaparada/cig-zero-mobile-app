import {
  ConversationMessage,
  ConversationMessageAPI,
} from "./conversationsTypes";

const getConversationMessagesAdapter = (
  conversationMessageAPI: ConversationMessageAPI
): ConversationMessage => {
  return {
    conversationId: conversationMessageAPI.conversation_id,
    messages: conversationMessageAPI.messages.map((item) => ({
      id: item.id,
      text: item.text,
      author: item.author,
      wasEdited: item.was_edited,
      createdAt: item.created_at,
      repliedMessage: item.replied_message,
    })),
  };
};

export const conversationsAdapter = {
  getConversationMessagesAdapter,
};
