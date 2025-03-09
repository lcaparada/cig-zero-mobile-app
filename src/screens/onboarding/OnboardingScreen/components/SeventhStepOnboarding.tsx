import { useState } from "react";

import { format } from "date-fns";
import { Controller } from "react-hook-form";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Easing, FadeIn } from "react-native-reanimated";

import {
  AnimatedBoxRNR,
  BoxProps,
  Icon,
  Text,
  TouchableOpacityBox,
} from "@components";
import { useAppTheme } from "@hooks";

import { useAppColor } from "@services";

import { OnboardingControlBase } from "../types/onboardingScreenTypes";

export const SeventhStepOnboarding = ({
  control,
}: Pick<OnboardingControlBase, "control">) => {
  const [visible, setVisibility] = useState(false);

  const { colors } = useAppTheme();

  const { appTheme } = useAppColor();

  const showDatePicker = () => {
    setVisibility(true);
  };

  const hideDatePicker = () => {
    setVisibility(false);
  };

  return (
    <Controller
      control={control}
      name="lastSmoking"
      render={({ field }) => (
        <AnimatedBoxRNR
          entering={FadeIn.delay(100)
            .duration(500)
            .easing(Easing.inOut(Easing.ease))}
        >
          <Text
            weight="semiBold"
            preset="titleSmall"
            color={"backgroundConstrast"}
            textAlign={"center"}
          >
            Quando foi a última vez que você fumou?
          </Text>
          <TouchableOpacityBox {...$touchableWrapper} onPress={showDatePicker}>
            <Icon name="calendar2" />
            <Text
              color={
                field.value === ""
                  ? "backgroundSecondConstrast"
                  : "backgroundConstrast"
              }
              weight="medium"
            >
              {field.value === ""
                ? "Toque aqui para escolher uma data"
                : format(
                    field.value ?? new Date(),
                    "dd 'de' MMMM 'de' yyyy 'às' HH:mm"
                  )}
            </Text>
          </TouchableOpacityBox>
          {visible && (
            <DateTimePickerModal
              date={field.value === "" ? new Date() : new Date(field.value)}
              isVisible={visible}
              mode="datetime"
              confirmTextIOS={"Confirmar"}
              cancelTextIOS={"Cancelar"}
              isDarkModeEnabled={appTheme === "dark"}
              textColor={colors.backgroundConstrast}
              buttonTextColorIOS={colors.backgroundConstrast}
              onConfirm={(date) => {
                field.onChange(date.toISOString());
                hideDatePicker();
              }}
              onCancel={hideDatePicker}
            />
          )}
        </AnimatedBoxRNR>
      )}
    />
  );
};

export const $touchableWrapper: BoxProps = {
  borderRadius: "s16",
  width: "100%",
  marginTop: "s30",
  borderColor: "backgroundConstrast",
  borderWidth: 2,
  padding: "s16",
  flexDirection: "row",
  alignItems: "center",
  columnGap: "s16",
};
