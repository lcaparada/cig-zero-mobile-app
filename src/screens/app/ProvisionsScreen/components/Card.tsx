import { Box, Icon, IconName, Text } from "@components";

import { formatDaysRecovered, formatMinutes } from "@helpers";

interface CardProps {
  total: number;
  title: string;
  value: number;
  iconName: IconName;
  isMoney?: boolean;
  isMinutes?: boolean;
}

interface Items {
  text: string;
  value: number;
  isDay?: boolean;
}

export const Card = ({
  value,
  title,
  total,
  iconName,
  isMoney,
  isMinutes,
}: CardProps) => {
  const itemsData: Items[] = [
    { text: "Total", value: total, isDay: true },
    { text: "Por dia", value: value },
    { text: "Por semana", value: value * 7 },
    { text: "Por mês", value: value * 30 },
    { text: "Por ano", value: value * 365 },
  ];
  return (
    <Box>
      <Box flexDirection={"row"} alignItems={"center"} columnGap={"s8"}>
        <Icon name={iconName} size="s26" />
        <Text
          color={"backgroundConstrast"}
          preset="paragraphsXL"
          weight="medium"
        >
          {title}
        </Text>
      </Box>

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
              ? item.isDay
                ? formatDaysRecovered(item.value)
                : formatMinutes(item.value)
              : item.value.toLocaleString(
                  "pt-BR",
                  isMoney
                    ? {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      }
                    : undefined
                )}
          </Text>
        </Box>
      ))}
    </Box>
  );
};
