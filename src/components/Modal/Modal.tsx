// Modal.tsx
import React, { forwardRef, useImperativeHandle } from "react";
import { KeyboardAvoidingView, Platform, Modal as RNModal } from "react-native";

import { useAnimationModal } from "@hooks";

import {
  AnimatedTouchableOpacityBox,
  AnimatedTouchableOpacityBoxProps,
  TouchableOpacityBox,
  TouchableOpacityBoxProps,
} from "../Box/Box";
import { Button } from "../Button/Button";
import { ButtonPresetType } from "../Button/buttonPreset";

import { ModalHeader, ScrollViewContainer, ViewContainer } from "./components";

export interface ModalProps {
  title: string;
  visible: boolean;
  rightButton?: {
    text: string;
    action: () => void;
  };
  disabledToClose?: boolean;
  scrollable?: boolean;
  children: React.ReactNode;
  hasFlexOne?: boolean;
  button?: {
    action: () => void;
    text: string;
    preset?: ButtonPresetType;
    disabled?: boolean;
    isLoading?: boolean;
  };
  height?: AnimatedTouchableOpacityBoxProps["height"];
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}
export interface ModalHandle {
  closeModal: (onComplete?: () => void) => void;
}

// eslint-disable-next-line react/display-name
export const Modal = forwardRef<ModalHandle, ModalProps>(
  (
    {
      title,
      button,
      visible,
      children,
      hasFlexOne = false,
      scrollable = true,
      height = "70%",
      disabledToClose = false,
      setVisible,
      rightButton,
    },
    ref
  ) => {
    const { position, colors, closeModal } = useAnimationModal({
      visible,
      setVisible,
    });

    useImperativeHandle(ref, () => ({
      closeModal,
    }));

    const Container = scrollable ? ScrollViewContainer : ViewContainer;

    return (
      <RNModal transparent animationType="fade" visible={visible}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : undefined}
          style={{ flex: 1 }}
        >
          <TouchableOpacityBox
            {...$touchableWrapper}
            disabled={disabledToClose}
            onPress={() => closeModal()}
          >
            <AnimatedTouchableOpacityBox
              activeOpacity={1}
              height={height}
              style={{ top: position }}
              {...$animatedTouchableWrapper}
            >
              <ModalHeader
                title={title}
                closeModal={closeModal}
                rightButton={rightButton}
                disabledToClose={disabledToClose}
              />
              <Container
                backgroundColor={colors.background}
                hasFlexOne={hasFlexOne}
              >
                {children}
              </Container>
              {button && (
                <Button
                  text={button.text}
                  preset={button.preset}
                  disabled={button.disabled}
                  isLoading={button.isLoading}
                  onPress={button.action}
                />
              )}
            </AnimatedTouchableOpacityBox>
          </TouchableOpacityBox>
        </KeyboardAvoidingView>
      </RNModal>
    );
  }
);

const $animatedTouchableWrapper: AnimatedTouchableOpacityBoxProps = {
  width: "100%",
  maxHeight: "95%",
  padding: "s30",
  borderTopLeftRadius: "s25",
  borderTopRightRadius: "s25",
  backgroundColor: "background",
};

const $touchableWrapper: TouchableOpacityBoxProps = {
  flex: 1,
  activeOpacity: 1,
  justifyContent: "flex-end",
  backgroundColor: "backgroundModal",
};
