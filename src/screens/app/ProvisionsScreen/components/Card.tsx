import { Box, Text } from "@components";

import { formatMinutes } from "@helpers";

interface CardProps {
  title: string;
  value: number;
  isMoney?: boolean;
  isMinutes?: boolean;
}

interface Items {
  text: string;
  value: number;
}

export const Card = ({ value, title, isMoney, isMinutes }: CardProps) => {
  const itemsData: Items[] = [
    { text: "Por dia", value: value },
    { text: "Por semana", value: value * 7 },
    { text: "Por mês", value: value * 30 },
    { text: "Por ano", value: value * 365 },
  ];
  return (
    <Box>
      <Text color={"backgroundConstrast"} preset="paragraphsXL" weight="medium">
        {title}
      </Text>
      {itemsData.map((item, index) => (
        <Box
          mt={"s16"}
          flexDirection={"row"}
          key={index}
          justifyContent={"space-between"}
        >
          <Text color={"backgroundConstrast"}>{item.text}</Text>
          <Text color={"backgroundConstrast"} weight="bold">
            {isMoney && "R$"}{" "}
            {isMinutes
              ? formatMinutes(item.value)
              : item.value.toLocaleString("pt-BR")}
          </Text>
        </Box>
      ))}
    </Box>
  );
};
