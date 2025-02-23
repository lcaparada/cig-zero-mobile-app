import { Message } from "@domain";

function removeMessageFromUI(id: string, messages: Message[]) {
  const updatedMessages = messages.filter((value) => value.id !== id);
  return updatedMessages;
}

function editMessageFromUI(id: string, messages: Message[], newText: string) {
  return messages.map((msg) =>
    msg.id === id ? { ...msg, text: newText } : msg
  );
}

export const chatService = {
  editMessageFromUI,
  removeMessageFromUI,
};
