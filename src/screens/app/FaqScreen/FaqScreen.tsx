import { Box, Screen } from "@components";

import { FaqItem } from "./components";
import { useFaqScreen } from "./useFaqScreen";

export const FaqScreen = () => {
  const {
    handleGetFaqsQuestionsAndAnswers,
    handleNavigateToReportAnIssueScreen,
  } = useFaqScreen();
  return (
    <Screen
      canGoBack
      scrollable
      screenTitle={"FAQ"}
      insets={{ bottom: "s24", left: "s24", right: "s24", top: "s0" }}
      button={{
        text: "Fale conosco",
        action: handleNavigateToReportAnIssueScreen,
      }}
    >
      <Box rowGap={"s14"}>
        {handleGetFaqsQuestionsAndAnswers().map(
          ({ answers, question }, index) => (
            <FaqItem key={index} question={question} answers={answers} />
          )
        )}
      </Box>
    </Screen>
  );
};
