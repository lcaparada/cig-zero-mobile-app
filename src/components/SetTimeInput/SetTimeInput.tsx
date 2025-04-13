import { Fragment } from "react";

import { format, set } from "date-fns";
import * as Haptics from "expo-haptics";
import DateTimePickerModal from "react-native-modal-datetime-picker";

import { Box, BoxProps, TouchableOpacityBox } from "../Box/Box";
import { Icon } from "../Icon/Icon";
import { Text } from "../Text/Text";

import { useSetTimeInput } from "./useSetTimeInput";
import { Popup } from "../Popup/Popup";

type SetTimeInputProps = {
  date: Date | null;
  setDate: React.Dispatch<React.SetStateAction<Date | null>>;
};

export const SetTimeInput = ({ date, setDate }: SetTimeInputProps) => {
  const {
    colors,
    appTheme,
    hideDatePicker,
    showDatePicker,
    warningPopupVisible,
    isDatePickerVisible,
    setWarningPopupVisibility,
  } = useSetTimeInput();

  return (
    <Fragment>
      <Box rowGap={"s8"}>
        <TouchableOpacityBox
          {...$boxWrapper}
          onPress={() => {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
            showDatePicker();
          }}
        >
          <Icon name="clock2" color="backgroundConstrast" strokeWidth={2} />
          <Text weight="medium" color={"backgroundSecondConstrast"}>
            {date !== null ? format(date, "HH:mm") : "Insira o horário"}
          </Text>
        </TouchableOpacityBox>
      </Box>
      {warningPopupVisible && (
        <Popup
          setVisible={setWarningPopupVisibility}
          visible={warningPopupVisible}
          title="Horário Inválido"
          description="Não é permitido selecionar um horário no futuro."
        />
      )}
      {isDatePickerVisible && (
        <DateTimePickerModal
          date={date ?? new Date()}
          isVisible={isDatePickerVisible}
          mode="time"
          confirmTextIOS={"Confirmar"}
          cancelTextIOS={"Cancelar"}
          isDarkModeEnabled={appTheme === "dark"}
          maximumDate={new Date()}
          textColor={colors.backgroundConstrast}
          buttonTextColorIOS={colors.backgroundConstrast}
          onConfirm={(selectedDate) => {
            const now = new Date();

            if (
              selectedDate.getHours() > now.getHours() ||
              (selectedDate.getHours() === now.getHours() &&
                selectedDate.getMinutes() > now.getMinutes())
            ) {
              setWarningPopupVisibility(true);
              hideDatePicker();
              return;
            }

            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
            setDate(selectedDate);
            hideDatePicker();
          }}
          onCancel={() => {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
            hideDatePicker();
          }}
        />
      )}
    </Fragment>
  );
};

export const $boxWrapper: BoxProps = {
  padding: "s16",
  columnGap: "s16",
  alignItems: "center",
  borderWidth: 2,
  borderColor: "neutralMedium",
  borderRadius: "s16",
  flexDirection: "row",
};
