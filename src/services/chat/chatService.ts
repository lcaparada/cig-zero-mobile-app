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

function updateMessageOnUI(
  msg: Message,
  groupedAndSortedMessages: Record<string, Message[]>
) {
  const dateString = msg.createdAt.split("T")[0];

  const updatedMessages = {
    ...groupedAndSortedMessages,
    [dateString]: [...(groupedAndSortedMessages[dateString] || []), msg],
  };
  const sortedEntries = Object.entries(updatedMessages).sort(([a], [b]) =>
    a > b ? -1 : 1
  );
  const sortedMessages = Object.fromEntries(sortedEntries);
  return sortedMessages;
}

export const chatService = {
  editMessageFromUI,
  updateMessageOnUI,
  removeMessageFromUI,
};
