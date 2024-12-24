import { useState } from "react";

import {
  Box,
  Icon,
  Reviews,
  Screen,
  Text,
  TouchableOpacityBox,
} from "@components";

import { getBenefits } from "@constraints";

import { BenefitItem } from "./components";

export const SubscriptionScreen = () => {
  const [showAllPlans, setShowAllPlans] = useState(false);

  return (
    <Screen canGoBack overflowVisible scrollable>
      <Box rowGap={"s26"}>
        <Box alignItems={"center"} justifyContent={"center"}>
          <Text color={"primary"} weight="bold" preset="display">
            CigZero Plus
          </Text>
        </Box>
        <Box rowGap={"s8"} overflow={"hidden"}>
          {getBenefits().map((item, index) => (
            <BenefitItem key={index} {...item} />
          ))}
        </Box>
        <Reviews />
        {!showAllPlans && (
          <TouchableOpacityBox
            columnGap={"s8"}
            flexDirection={"row"}
            alignSelf={"center"}
            alignItems={"center"}
            onPress={() => setShowAllPlans((prev) => !prev)}
          >
            <Icon size="s18" name="plus" color="primary" strokeWidth={2.5} />
            <Text textAlign={"center"} weight="medium" color={"primary"}>
              Cheque outros planos
            </Text>
          </TouchableOpacityBox>
        )}
      </Box>
    </Screen>
  );
};
