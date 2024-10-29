import { useState } from "react";

import { Box, Icon, Text, TouchableOpacityBox } from "@components";

type FaqItemProps = {
  question: string;
  answers: string[];
};

export const FaqItem = ({ question, answers }: FaqItemProps) => {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <Box
      rowGap={"s14"}
      borderBottomWidth={isOpened ? 2 : 0}
      borderBottomColor={"bluePrimaryWith25PercentOpacity"}
    >
      <TouchableOpacityBox
        columnGap={"s8"}
        flexDirection={"row"}
        alignItems={"center"}
        borderBottomWidth={2}
        paddingVertical={"s8"}
        backgroundColor={"background"}
        justifyContent={"space-between"}
        onPress={() => setIsOpened(!isOpened)}
        borderColor={
          isOpened ? "background" : "bluePrimaryWith25PercentOpacity"
        }
      >
        <Box flex={1}>
          <Text
            weight={"medium"}
            preset="paragraphsLarge"
            color={"backgroundConstrast"}
          >
            {question}
          </Text>
        </Box>
        <Icon
          size={"s24"}
          strokeWidth={2}
          name={isOpened ? "minus" : "plus"}
          color="bluePrimaryWith25PercentOpacity"
        />
      </TouchableOpacityBox>
      {isOpened && (
        <Box rowGap={"s8"} marginBottom={"s22"}>
          {answers.map((answer, index) =>
            answers.length !== 1 ? (
              <Box key={index} flexDirection={"row"} columnGap={"s8"}>
                <Text color={"backgroundConstrast"}>{index + 1}.</Text>
                <Text color={"backgroundConstrast"} style={{ flex: 1 }}>
                  {answer}
                </Text>
              </Box>
            ) : (
              <Text
                style={{ flexWrap: "wrap" }}
                key={index}
                color={"backgroundConstrast"}
              >
                {answer}
              </Text>
            )
          )}
        </Box>
      )}
    </Box>
  );
};
