import { create } from "zustand";

import { chatService } from "./chatService";
import { ChatStore } from "./chatTypes";

const useChatStore = create<ChatStore>((set, get) => ({
  groupedAndSortedMessages: {
    "2099-12-12": [
      {
        author: { id: "", name: "", photo: "" },
        text: "",
        createdAt: new Date().toISOString(),
        id: "",
      },
    ],
  },
  repliedMessage: null,
  messageToOptions: null,
  showOptionsMessage: false,
  selectedMessagePosition: null,
  setMessageToOptions(args) {
    set({ messageToOptions: args });
  },
  editMessageFromUI(params) {
    const { groupedAndSortedMessages, setGroupedAndSortedMessages } = get();
    const updatedConversationMessages = chatService.editMessageFromUI(
      params.id,
      groupedAndSortedMessages[params.date],
      params.newText
    );

    setGroupedAndSortedMessages({
      ...groupedAndSortedMessages,
      [params.date]: updatedConversationMessages,
    });
  },
  removeMessageFromUI(id, date) {
    const { groupedAndSortedMessages, setGroupedAndSortedMessages } = get();

    const updatedConversationMessages =
      groupedAndSortedMessages[date]?.filter((message) => message.id !== id) ??
      [];

    const updatedGroupedMessages = { ...groupedAndSortedMessages };

    if (updatedConversationMessages.length === 0) {
      delete updatedGroupedMessages[date];
    } else {
      updatedGroupedMessages[date] = updatedConversationMessages;
    }

    setGroupedAndSortedMessages(updatedGroupedMessages);
  },
  setGroupedAndSortedMessages(args) {
    set({ groupedAndSortedMessages: args });
  },
  setSelectedMessagePosition(args) {
    set({ selectedMessagePosition: args });
  },
  setRepliedMessage(args) {
    set({ repliedMessage: args });
  },
  setShowOptionsMessage(args) {
    set({ showOptionsMessage: args });
  },
}));

export function useChat() {
  const repliedMessage = useChatStore((state) => state.repliedMessage);
  const messageToOptions = useChatStore((state) => state.messageToOptions);
  const setRepliedMessage = useChatStore((state) => state.setRepliedMessage);
  const showOptionsMessage = useChatStore((state) => state.showOptionsMessage);
  const editMessageFromUI = useChatStore((state) => state.editMessageFromUI);
  const removeMessageFromUI = useChatStore(
    (state) => state.removeMessageFromUI
  );
  const setGroupedAndSortedMessages = useChatStore(
    (state) => state.setGroupedAndSortedMessages
  );
  const groupedAndSortedMessages = useChatStore(
    (state) => state.groupedAndSortedMessages
  );
  const setMessageToOptions = useChatStore(
    (state) => state.setMessageToOptions
  );

  const selectedMessagePosition = useChatStore(
    (state) => state.selectedMessagePosition
  );
  const setSelectedMessagePosition = useChatStore(
    (state) => state.setSelectedMessagePosition
  );
  const setShowOptionsMessage = useChatStore(
    (state) => state.setShowOptionsMessage
  );

  return {
    repliedMessage,
    messageToOptions,
    setRepliedMessage,
    editMessageFromUI,
    showOptionsMessage,
    setMessageToOptions,
    removeMessageFromUI,
    setShowOptionsMessage,
    selectedMessagePosition,
    groupedAndSortedMessages,
    setSelectedMessagePosition,
    setGroupedAndSortedMessages,
  };
}
