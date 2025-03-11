import {
  ConversationMessage,
  ConversationMessageAPI,
  RepliedMessage,
  RepliedMessageAPI,
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
      repliedConversationMessageId: item.replied_conversation_message_id,
    })),
  };
};

const getRepliedMessageAdapter = (
  repliedMessageAPI: RepliedMessageAPI
): RepliedMessage => {
  return {
    text: repliedMessageAPI.text,
    authorName: repliedMessageAPI.author_name,
  };
};

export const conversationsAdapter = {
  getRepliedMessageAdapter,
  getConversationMessagesAdapter,
};
