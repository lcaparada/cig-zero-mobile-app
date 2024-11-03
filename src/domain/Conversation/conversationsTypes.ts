export type MessageAPI = {
  text: string;
  created_at: string;
  author_id: string | null;
};

export type ConversationMessageAPI = {
  conversation_id: string;
  messages: MessageAPI[];
};

export type Message = {
  text: string;
  createdAt: string;
  authorId: string | null;
};

export type ConversationMessage = {
  conversationId: string;
  messages: Message[];
};

export namespace GetMessagesFromPrivateConversation {
  export type Result = ConversationMessage;
}

export namespace AddMessageToPrivateConversation {
  export type Params = Pick<Message, "text"> & {
    conversationId: string;
  };

  export type Result = MessageAPI;
}
