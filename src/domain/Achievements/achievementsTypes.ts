import { IconName } from "@components";

export type Achievement = {
  id: string;
  title: string;
  description: string;
  icon_url: string;
  unlocked: boolean;
};

export type AchievementCategory = {
  id: string;
  title: string;
  icon: string;
  description: string;
};

export type AchievementWithCategory = Pick<
  Achievement,
  "id" | "title" | "description" | "icon_url"
> & {
  category: Pick<AchievementCategory, "id" | "title" | "description" | "icon">;
};

export type GroupedCategory = {
  id: string;
  icon: IconName;
  title: string;
  description: string;
  achievements: Achievement[];
};
export namespace GetAchievements {
  export type Params = {
    id: string;
  };
  export type Result = GroupedCategory[];
}
