import { Button } from "../Button/Button";
import { IconName } from "../Icon/Icon";
import { Text } from "../Text/Text";

export interface InformationItemProps {
  text: string;
  icon: IconName;
  rightText?: string;
}

export const InformationItem = ({
  icon,
  text,
  rightText,
}: InformationItemProps) => {
  return (
    <Button
      text={text}
      iconName={icon}
      justifyContent={"flex-start"}
      disabledWithPrimaryPreset
      rightComponent={
        <Text preset="paragraphsBig" color={"neutralLighest"} weight="semiBold">
          {rightText}
        </Text>
      }
    />
  );
};
