import { Screen } from "@components";

import { AchievementsHeader, AchievementsSkeleton } from "./components";
import { AchievementHeading } from "./components/AchievementHeading";
import { useAchievementsScreen } from "./useAchievementsScreen";

export const AchievementsScreen = () => {
  const { current, achievements, isLoading, isRefetching, refetch } =
    useAchievementsScreen();
  return (
    <Screen
      hasPaddingTop={false}
      scrollable
      pullToRefresh={{ refreshing: isRefetching, onRefresh: refetch }}
      insets={{ left: "s0", right: "s0", top: "s0", bottom: "s0" }}
    >
      <AchievementsHeader
        count={{ target: achievements?.length ?? 0, current }}
      />
      {!isLoading && achievements ? (
        achievements.map((a, i) => (
          <AchievementHeading
            {...a}
            key={i}
            mt={i === 0 ? "s24" : "s30"}
            isLastItem={i === achievements.length - 1}
          />
        ))
      ) : (
        <AchievementsSkeleton />
      )}
    </Screen>
  );
};
