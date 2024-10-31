import { AchievementProgressCard, Screen } from "@components";

import { OMSTipsHeader } from "./components";
import { omsTips } from "./OMSTipsPresets";
import { useOMSTipsScreen } from "./useOMSTipsScreen";

export const OMSTipsScreen = () => {
  const { hoursBetweenLastestSmokingRecord, isRefetching, refetch } =
    useOMSTipsScreen();
  return (
    <Screen
      hasPaddingTop={false}
      scrollable
      pullToRefresh={{ refreshing: isRefetching, onRefresh: refetch }}
      insets={{ left: "s0", right: "s0", top: "s0", bottom: "s24" }}
    >
      <OMSTipsHeader />
      {omsTips.map(({ target, title, description, type }, index) => {
        const current =
          hoursBetweenLastestSmokingRecord > target
            ? target
            : hoursBetweenLastestSmokingRecord;
        const percentage = (hoursBetweenLastestSmokingRecord / target) * 100;
        return (
          <AchievementProgressCard
            key={index}
            title={title}
            description={description}
            is_completed={current >= target}
            mt={index === 0 ? "s24" : "s30"}
            data={[{ target, current, type }]}
            lastItem={index === omsTips.length - 1}
            percentage={percentage > 100 ? 100 : percentage}
          />
        );
      })}
    </Screen>
  );
};
