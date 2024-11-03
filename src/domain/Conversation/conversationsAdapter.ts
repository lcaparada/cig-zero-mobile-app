import {
  ConversationMessage,
  ConversationMessageAPI,
} from "./conversationsTypes";

const getMessagesFromPrivateConversationAdapter = (
  messagesAPI: ConversationMessageAPI
): ConversationMessage => {
  return {
    conversationId: messagesAPI.conversation_id,
    messages: messagesAPI.messages.map((message) => ({
      text: message.text,
      createdAt: message.created_at,
      authorId: message.author_id,
    })),
  };
};

export const conversationsAdapter = {
  getMessagesFromPrivateConversationAdapter,
};
