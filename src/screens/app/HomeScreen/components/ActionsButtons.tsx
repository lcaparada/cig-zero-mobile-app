import { Box, Button, IconName } from "@components";

interface ActionsButtonsData {
  text: string;
  icon: IconName;
}

const actionsButtons: ActionsButtonsData[] = [
  {
    text: "Acesse as dicas da OMS",
    icon: "activity",
  },
  {
    text: "Explorar suas conquistas",
    icon: "star",
  },
];

export const ActionsButtons = () => {
  return (
    <Box paddingHorizontal={"s24"} paddingVertical={"s30"} rowGap={"s10"}>
      {actionsButtons.map((item, index) => (
        <Button
          key={index}
          iconName={item.icon}
          text={item.text}
          hasArrowRight
          justifyContent={"flex-start"}
        />
      ))}
    </Box>
  );
};
