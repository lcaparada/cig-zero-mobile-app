import { Fragment } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  useWindowDimensions,
} from "react-native";

import { BlurView } from "expo-blur";
import {
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from "react-native-reanimated";

import {
  Icon,
  Box,
  Text,
  BoxProps,
  IconName,
  AnimatedBoxRNR,
  TouchableOpacityBox,
  AnimatedPressableBox,
} from "@components";
import { ThemeColors } from "@theme";

import { ChatEditMessage } from "../ChatEditMessage";
import { ChatMessage } from "../ChatMessage";

import { useMessageOptions } from "./useMessageOptions";

interface OptionsButton {
  icon: {
    name: IconName;
    color: ThemeColors;
  };
  text: {
    value: string;
    color: ThemeColors;
  };
  onPress: () => void;
}

export const MessageOptions = () => {
  const {
    width,
    opacity,
    appTheme,
    scaleValue,
    handleClose,
    keyboardHeight,
    showEditMessage,
    messageToOptions,
    setShowEditMessage,
    handleDeleteMessage,
    removeMessageFromUI,
    selectedMessagePosition,
  } = useMessageOptions();

  const options: OptionsButton[] = [
    {
      icon: {
        name: "edit2",
        color: "backgroundConstrast",
      },
      text: {
        value: "Editar",
        color: "backgroundConstrast",
      },
      onPress: () => {
        setShowEditMessage(true);
      },
    },
    {
      icon: {
        name: "trash2",
        color: "roseTerracotta",
      },
      text: {
        value: "Apagar",
        color: "roseTerracotta",
      },
      onPress: () => {
        handleDeleteMessage({
          conversationMessageId: messageToOptions?.id ?? "",
        });
        handleClose();
        setTimeout(() => {
          removeMessageFromUI(messageToOptions?.id ?? "");
        }, 400);
      },
    },
  ];

  const { height } = useWindowDimensions();

  const animatedTop = useDerivedValue(() => {
    return withTiming(
      showEditMessage
        ? keyboardHeight === 0
          ? height * 0.8
          : keyboardHeight
        : (selectedMessagePosition?.top ?? 0)
    );
  });

  const animatedBoxStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scaleValue.value }],
    };
  });

  const animatedPressableStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });

  const animatedMessageStyle = useAnimatedStyle(() => {
    return {
      top: animatedTop.value === -1 ? undefined : animatedTop.value,
    };
  });

  return (
    <KeyboardAvoidingView style={[StyleSheet.absoluteFillObject]}>
      <AnimatedPressableBox
        style={[StyleSheet.absoluteFillObject, animatedPressableStyle]}
        onPress={() =>
          showEditMessage ? setShowEditMessage(false) : handleClose()
        }
      >
        <BlurView tint={appTheme} intensity={100} style={{ flex: 1 }} />
      </AnimatedPressableBox>
      {messageToOptions && (
        <AnimatedBoxRNR
          style={animatedMessageStyle}
          right={selectedMessagePosition?.right ?? 0}
          position={"absolute"}
        >
          <ChatMessage {...messageToOptions} />
        </AnimatedBoxRNR>
      )}
      <AnimatedBoxRNR
        width={width * 0.5}
        top={
          (selectedMessagePosition?.top ?? 0) +
          (selectedMessagePosition?.height ?? 0) +
          10
        }
        right={(selectedMessagePosition?.left ?? 0) + 76}
        {...$optionsBox}
        style={[animatedBoxStyle]}
      >
        {options.map((opt, ind) => (
          <OptionButton
            key={ind}
            isLastIndex={options.length - 1 === ind}
            optionButton={opt}
          />
        ))}
      </AnimatedBoxRNR>

      {showEditMessage && (
        <ChatEditMessage
          setShowEditMessage={setShowEditMessage}
          cancel={() => setShowEditMessage(false)}
        />
      )}
    </KeyboardAvoidingView>
  );
};

interface OptionButtonProps {
  isLastIndex: boolean;
  optionButton: OptionsButton;
}

const OptionButton = ({ optionButton, isLastIndex }: OptionButtonProps) => {
  return (
    <Fragment>
      <TouchableOpacityBox
        alignItems={"center"}
        flexDirection={"row"}
        justifyContent={"space-between"}
        paddingVertical={"s8"}
        onPress={optionButton.onPress}
        paddingHorizontal={"s12"}
      >
        <Text color={optionButton.text.color}>{optionButton.text.value}</Text>
        <Icon name={optionButton.icon.name} color={optionButton.icon.color} />
      </TouchableOpacityBox>
      {!isLastIndex && (
        <Box
          width={"100%"}
          height={0.3}
          backgroundColor={"backgroundConstrast"}
        />
      )}
    </Fragment>
  );
};

const $optionsBox: BoxProps = {
  position: "absolute",
  borderRadius: "s8",
  backgroundColor: "chatMessageBackground",
};
