import { Message } from "@domain";

type RepliedMessage = Pick<Message, "id" | "author" | "text"> | null;

type MessagePosition = {
  top: number;
  left: number | null;
  right: number | null;
  width: number;
  height: number;
};

interface EditMessageFromUI {
  id: string;
  date: string;
  newText: string;
  wasEdited: boolean;
}

export type ChatStore = {
  repliedMessage: RepliedMessage;
  messageToOptions: Message | null;
  showOptionsMessage: boolean;
  selectedMessagePosition: MessagePosition | null;
  groupedAndSortedMessages: Record<string, Message[]>;
  updateMessageOnUI: (params: Message) => void;
  editMessageFromUI: (params: EditMessageFromUI) => void;
  setRepliedMessage: (args: RepliedMessage) => void;
  removeMessageFromUI: (messageId: string) => void;
  setMessageToOptions: (args: Message | null) => void;
  setShowOptionsMessage: (args: boolean) => void;
  setSelectedMessagePosition: (position: MessagePosition) => void;
  setGroupedAndSortedMessages: (args: Record<string, Message[]>) => void;
};
