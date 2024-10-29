import {
  TouchableOpacityBoxProps,
  TouchableOpacityBox,
  Box,
  Icon,
} from "@components";

type PhotoInputProps = TouchableOpacityBoxProps & {
  onPress: () => void;
};

export const ImageInput = ({
  onPress,
  ...touchableOpacityBoxProps
}: PhotoInputProps) => {
  return (
    <TouchableOpacityBox
      {...$touchableWrapper}
      {...touchableOpacityBoxProps}
      onPress={onPress}
    >
      <Box flexDirection={"row"} alignItems={"center"} columnGap={"s16"}>
        <Icon name="camera" strokeWidth={2} color="backgroundConstrast" />
      </Box>
    </TouchableOpacityBox>
  );
};

const $touchableWrapper: TouchableOpacityBoxProps = {
  borderWidth: 2,
  width: 100,
  height: 100,
  columnGap: "s16",
  borderRadius: "s16",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  borderColor: "backgroundSecondConstrast",
  overflow: "hidden",
};
