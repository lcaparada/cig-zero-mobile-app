import {
  Box,
  HeadingWithDescription,
  InformationCard,
  InformationCardProps,
} from "@components";

const items: InformationCardProps[] = [
  { icon: "calendar", number: "17", label: "dias sem fumar" },
  { icon: "wind", number: "300", label: "cigarros evitados" },
  { icon: "dollarSign", number: "300,42", label: "reais poupados" },
  { icon: "clock", number: "1d", label: "tempo" },
];

export const GeneralProgress = () => {
  return (
    <Box paddingHorizontal={"s24"} paddingVertical={"s30"}>
      <HeadingWithDescription
        title="Progresso Geral"
        description="Sua evolução desde o início"
      />
      <Box
        alignItems={"center"}
        justifyContent={"center"}
        flexDirection={"row"}
        columnGap={"s10"}
        mt={"s20"}
      >
        {items.map((item, index) => (
          <InformationCard key={index} {...item} />
        ))}
      </Box>
    </Box>
  );
};
