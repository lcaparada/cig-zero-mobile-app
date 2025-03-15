import { Screen } from "@components";

import { AchievementHeading, AchievementsHeader } from "./components";
import { useAchievementsScreen } from "./useAchievementsScreen";

export const AchievementsScreen = () => {
  const { achievements } = useAchievementsScreen();

  return (
    <Screen
      hasPaddingTop={false}
      scrollable
      insets={{ left: "s0", right: "s0", top: "s0", bottom: "s0" }}
    >
      <AchievementsHeader />
      {achievements &&
        achievements.map((achievement, index) => (
          <AchievementHeading
            isLastItem={achievements.length - 1 === index}
            title={achievement.title}
            key={achievement.id}
            achievements={achievement.achievements}
            icon={achievement.icon}
            description={achievement.description}
          />
        ))}
    </Screen>
  );
};
