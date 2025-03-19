import { useState } from "react";

import {
  Box,
  BoxProps,
  Icon,
  IconName,
  TextInput,
  TouchableOpacityBox,
} from "@components";
import { useKeyboard } from "@hooks";

import { useUpdateMessage } from "@domain";
import { useChat, useToastService } from "@services";

interface ChatActionButtonProps {
  iconName: IconName;
  action: () => void;
  disabled: boolean;
}

interface ChatEditMessageProps {
  cancel: () => void;
  setShowEditMessage: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ChatEditMessage = ({
  cancel,
  setShowEditMessage,
}: ChatEditMessageProps) => {
  const keyboardHeight = useKeyboard();

  const { showToast } = useToastService();

  const { messageToOptions, setMessageToOptions, editMessageFromUI } =
    useChat();

  const [newText, setNewText] = useState(messageToOptions?.text ?? "");

  const { updateMessage, isUpdatingMessage } = useUpdateMessage();

  async function handleUpdateMessage() {
    try {
      editMessageFromUI({
        date: messageToOptions?.createdAt.split("T")[0] ?? "",
        id: messageToOptions?.id ?? "",
        newText,
        wasEdited: true,
      });
      await updateMessage({
        conversationMessageId: messageToOptions?.id ?? "",
        newText,
      });
      if (messageToOptions) {
        setMessageToOptions({ ...messageToOptions, text: newText });
      }
      setShowEditMessage(false);
    } catch (error: any) {
      showToast({ message: error.message, duration: 4000, type: "error" });
    }
  }

  return (
    <Box bottom={keyboardHeight + 40} {...$chatEditMessageWrapper}>
      <ChatActionButton
        disabled={isUpdatingMessage}
        iconName="x"
        action={cancel}
      />
      <TextInput
        value={newText}
        onChangeText={setNewText}
        autoFocus
        boxProps={{ flex: 1 }}
      />
      <ChatActionButton
        disabled={isUpdatingMessage}
        iconName="check"
        action={handleUpdateMessage}
      />
    </Box>
  );
};

export const ChatActionButton = ({
  iconName,
  action,
  disabled,
}: ChatActionButtonProps) => {
  return (
    <TouchableOpacityBox
      disabled={disabled}
      {...$actionButtonWrapper}
      onPress={action}
    >
      <Icon name={iconName} size="s24" color="backgroundConstrast" />
    </TouchableOpacityBox>
  );
};

const $actionButtonWrapper: BoxProps = {
  backgroundColor: "primary",
  alignItems: "center",
  width: 55,
  height: 55,
  justifyContent: "center",
  borderRadius: "full",
};

const $chatEditMessageWrapper: BoxProps = {
  flexDirection: "row",
  width: "100%",
  columnGap: "s12",
  paddingHorizontal: "s24",
  alignItems: "center",
  position: "absolute",
};
