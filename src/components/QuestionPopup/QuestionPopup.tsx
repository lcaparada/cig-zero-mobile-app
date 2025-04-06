import { useEffect, useState } from "react";
import { Modal, StyleSheet } from "react-native";

import { usePopupAnimated } from "@hooks";

import { usePublishFeedback } from "@domain";
import { useAuth } from "@services";

import { AnimatedBoxRNR, Box, BoxProps } from "../Box/Box";
import { Button } from "../Button/Button";
import { Text } from "../Text/Text";
import { TextInput } from "../TextInput/TextInput";

export interface QuestionPopupProps {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export const QuestionPopup = ({ visible, setVisible }: QuestionPopupProps) => {
  const { session } = useAuth();

  const [answer, setAnswer] = useState("");

  const { showPopup, hidePopup, animatedStyles } = usePopupAnimated({
    setVisible,
  });

  const { handlePublishFeedback } = usePublishFeedback();

  useEffect(() => {
    if (visible) {
      showPopup();
    }
  }, [showPopup, visible]);

  return (
    <Modal transparent visible={visible} animationType="fade">
      <Box style={StyleSheet.absoluteFillObject} {...$boxWrapper}>
        <AnimatedBoxRNR {...$animatedBoxWrapper} style={[animatedStyles]}>
          <Text weight="semiBold" color={"backgroundConstrast"}>
            Como tem sido sua experiência com o CigZero? Compartilhe com a
            gente!
          </Text>
          <TextInput
            multiline
            height={200}
            placeholder="Conte para nós..."
            value={answer}
            onChangeText={(text) => setAnswer(text)}
          />
          <Box flexDirection={"row"} columnGap={"s10"}>
            <Button
              text="Enviar"
              preset="outline"
              onPress={() => {
                hidePopup();
                handlePublishFeedback({
                  feedback: answer,
                  userId: session?.user.id ?? "",
                });
              }}
              flex={1}
              disabled={answer.length === 0}
            />
            <Button text={"Fechar"} onPress={hidePopup} flex={1} />
          </Box>
        </AnimatedBoxRNR>
      </Box>
    </Modal>
  );
};

const $boxWrapper: BoxProps = {
  backgroundColor: "backgroundModal",
  justifyContent: "center",
  alignItems: "center",
  paddingHorizontal: "s35",
};

const $animatedBoxWrapper: BoxProps = {
  borderRadius: "s20",
  padding: "s20",
  rowGap: "s20",
  backgroundColor: "background",
};
