import { Box, BoxProps } from "src/components/Box/Box";
import { Text } from "src/components/Text/Text";

interface InformationItemsData extends BoxProps {
  text: string;
}

const informationItems: InformationItemsData[] = [
  {
    borderColor: "backgroundSecondConstrast",
    borderStyle: "solid",
    opacity: 0.2,
    text: "Dias de outro mês",
  },
  {
    borderStyle: "solid",
    borderColor: "shadowBlue",
    backgroundColor: "shadowBlue",
    text: "Dia selecionado",
  },
  {
    borderColor: "backgroundSecondConstrast",
    borderStyle: "dashed",
    text: "Dias anteriores ao começo",
  },
  {
    borderColor: "primary",
    borderStyle: "dashed",
    text: "Dia atual não respondido sobre o fumo",
  },
  {
    borderColor: "primary",
    borderStyle: "solid",
    text: "Dias futuros não respondido sobre o fumo",
  },
  {
    borderColor: "primary",
    borderStyle: "solid",
    backgroundColor: "primary",
    text: "Dias que você respondeu não sobre o fumo",
  },
  {
    borderColor: "errorDark",
    borderStyle: "solid",
    backgroundColor: "errorDark",
    text: "Dias que você respondeu sim sobre o fumo",
  },
];

export const CalendarInformations = () => {
  return (
    <Box mt={"s25"} rowGap={"s8"}>
      {informationItems.map((item, index) => (
        <Box
          key={index}
          flexDirection={"row"}
          columnGap={"s8"}
          alignItems={"center"}
        >
          <Box
            width={20}
            height={20}
            borderWidth={2}
            borderColor={item.borderColor}
            borderRadius={"s20"}
            borderStyle={item.borderStyle}
            opacity={item.opacity}
            backgroundColor={item.backgroundColor}
          />
          <Text
            preset="paragraphs"
            weight="medium"
            color={"backgroundSecondConstrast"}
          >
            {item.text}
          </Text>
        </Box>
      ))}
    </Box>
  );
};
