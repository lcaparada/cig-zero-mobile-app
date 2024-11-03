import { useKeyboardStatus } from "@hooks";
import { useEffect, useRef } from "react";
import { ScrollView } from "react-native";

type Message = {
  text: string;
  isMine: boolean;
  sentAt: Date;
};

type Data = {
  [date: string]: Message[];
};

export const useChatBody = () => {
  const { isKeyboardOpen } = useKeyboardStatus();

  const data: Data = {
    "2024-10-02": [
      { text: "Test", isMine: true, sentAt: new Date() },
      { text: "Test", isMine: false, sentAt: new Date() },
      { text: "Test", isMine: true, sentAt: new Date() },
    ],
    "2024-10-03": [
      { text: "Test", isMine: true, sentAt: new Date() },
      { text: "Test da sda sa das das d", isMine: false, sentAt: new Date() },
      {
        text: "Test dakw jdakwdj kawjd kawjd",
        isMine: true,
        sentAt: new Date(),
      },
    ],
  };

  const scrollViewRef = useRef<ScrollView>(null);

  const handleScrollToBottom = () => {
    setTimeout(
      () => scrollViewRef?.current?.scrollToEnd({ animated: true }),
      50
    );
  };

  useEffect(() => {
    if (isKeyboardOpen) {
      handleScrollToBottom();
    }
  }, [isKeyboardOpen]);

  return { data, scrollViewRef, handleScrollToBottom };
};
