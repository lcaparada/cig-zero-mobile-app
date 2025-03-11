export type ConversationTypes = "GLOBAL" | "PRIVATE";

export type Author = {
  id: string;
  name: string;
  photo: string;
};

export type ConversationMessageRealtime = {
  author_id: string;
  conversation_id: string | null;
  created_at: string;
  id: string;
  replied_conversation_message_id: string | null;
  text: string;
  was_edited: boolean;
};

export type MessageAPI = {
  id: string;
  text: string;
  created_at: string;
  replied_message: string;
  author: Author | null;
  was_edited: boolean;
};

export type ConversationMessageAPI = {
  conversation_id: string;
  messages: MessageAPI[];
};

export type Message = {
  id: string;
  text: string;
  createdAt: string;
  repliedMessage?: string | null;
  author: {
    id: string;
    name: string;
    photo: string;
  } | null;
  wasEdited: boolean;
};

export type ConversationMessage = {
  conversationId: string | null;
  messages: Message[];
};
export namespace GetConversationMessage {
  export type Params = {
    userId?: string;
    limit: number;
    offset: number;
    conversationType: ConversationTypes;
  };

  export type Result = ConversationMessage[];
}

export namespace GetAuthorInfo {
  export type Params = {
    authorId: string;
  };
  export type Result = Author;
}

export namespace PublishMessage {
  export type Params = {
    id: string;
    text: string;
    targetUserId?: string;
    repliedConversationMessageId?: string;
  };

  export type Result = void;
}

export namespace DeleteMessage {
  export type Params = {
    conversationMessageId: string;
  };
  export type Result = void;
}

export namespace UpdateMessage {
  export type Params = {
    conversationMessageId: string;
    newText: string;
  };
  export type Result = void;
}

export namespace GetUnreadMessagesCount {
  export type Params = {
    lastTimeOpenedChat: string;
  };
  export type Result = {
    unread_messages_count: number;
  };
}
