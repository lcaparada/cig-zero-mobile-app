import { format } from "date-fns";
import DateTimePickerModal from "react-native-modal-datetime-picker";

import { Box, BoxProps, TouchableOpacityBox } from "../Box/Box";
import { Icon } from "../Icon/Icon";
import { Text } from "../Text/Text";

import { useSetTimeInput } from "./useSetTimeInput";

type SetTimeInputProps = {
  date: Date | null;
  setDate: React.Dispatch<React.SetStateAction<Date | null>>;
};

export const SetTimeInput = ({ date, setDate }: SetTimeInputProps) => {
  const { colors, isDatePickerVisible, hideDatePicker, showDatePicker } =
    useSetTimeInput();

  return (
    <>
      <Box rowGap={"s8"} mb={"s20"}>
        <TouchableOpacityBox {...$boxWrapper} onPress={showDatePicker}>
          <Icon name="clock" color="backgroundConstrast" strokeWidth={2} />
          <Text weight="medium" color={"backgroundSecondConstrast"}>
            {date !== null ? format(date, "HH:mm") : "Insira o horário"}
          </Text>
        </TouchableOpacityBox>
      </Box>
      {isDatePickerVisible ? (
        <DateTimePickerModal
          date={date ?? new Date()}
          isVisible={isDatePickerVisible}
          mode="time"
          confirmTextIOS={"Confirmar"}
          cancelTextIOS={"Cancelar"}
          textColor={colors.backgroundConstrast}
          buttonTextColorIOS={colors.backgroundConstrast}
          onConfirm={(date) => {
            setDate(date);
            hideDatePicker();
          }}
          onCancel={hideDatePicker}
        />
      ) : null}
    </>
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
