import { AchievementProgressCard, Screen } from "@components";

import { OMSTipsHeader } from "./components";
import { omsTips } from "./OMSTipsPresets";
import { useOMSTipsScreen } from "./useOMSTipsScreen";

export const OMSTipsScreen = () => {
  const { hoursBetweenLastestSmokingRecord } = useOMSTipsScreen();
  return (
    <Screen
      hasPaddingTop={false}
      scrollable
      insets={{ left: "s0", right: "s0", top: "s0", bottom: "s24" }}
    >
      <OMSTipsHeader />
      {omsTips.map((item, index) => {
        const percentage =
          (hoursBetweenLastestSmokingRecord / item.target) * 100;
        return (
          <AchievementProgressCard
            {...item}
            key={index}
            mt={index === 0 ? "s24" : "s30"}
            lastItem={index === omsTips.length - 1}
            current={
              hoursBetweenLastestSmokingRecord > item.target
                ? item.target
                : hoursBetweenLastestSmokingRecord
            }
            percentage={percentage > 100 ? 100 : percentage}
          />
        );
      })}
    </Screen>
  );
};
