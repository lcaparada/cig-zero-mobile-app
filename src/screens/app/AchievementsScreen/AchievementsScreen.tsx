import { Screen } from "@components";

import { achievementsPresets } from "./achievementsPresets";
import { AchievementsHeader } from "./components";
import { AchievementHeading } from "./components/AchievementHeading";

export const AchievementsScreen = () => {
  return (
    <Screen
      hasPaddingTop={false}
      scrollable
      insets={{ left: "s0", right: "s0", top: "s0", bottom: "s0" }}
    >
      <AchievementsHeader />
      {achievementsPresets.map((a, i) => (
        <AchievementHeading
          {...a}
          key={i}
          mt={i === 0 ? "s24" : "s30"}
          isLastItem={i === achievementsPresets.length - 1}
        />
      ))}
    </Screen>
  );
};
