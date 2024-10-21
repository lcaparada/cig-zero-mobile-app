import { Button } from "../Button/Button";
import { IconName } from "../Icon/Icon";

interface InformationItemProps {
  text: string;
  icon: IconName;
}

export const InformationItem = ({ icon, text }: InformationItemProps) => {
  return (
    <Button
      text={text}
      iconName={icon}
      justifyContent={"flex-start"}
      disabledWithPrimaryPreset
    />
  );
};
