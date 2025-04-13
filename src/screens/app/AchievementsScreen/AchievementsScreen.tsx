import { Screen } from "@components";

import {
  AchievementHeading,
  AchievementsHeader,
  AchievementsSkeleton,
} from "./components";
import { useAchievementsScreen } from "./useAchievementsScreen";

export const AchievementsScreen = () => {
  const { achievements, isGettingAchievements } = useAchievementsScreen();

  return (
    <Screen
      hasPaddingTop={false}
      scrollable
      insets={{ left: "s0", right: "s0", top: "s0", bottom: "s0" }}
    >
      <AchievementsHeader />
      {isGettingAchievements || !achievements || !achievements.length ? (
        <AchievementsSkeleton />
      ) : (
        achievements.map((achievement, index) => (
          <AchievementHeading
            isLastItem={achievements.length - 1 === index}
            {...achievement}
            key={achievement.id}
          />
        ))
      )}
    </Screen>
  );
};
