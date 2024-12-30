import { IconName } from "@components";

export type AchievementOnUser = {
  achievement_id: string;
  user_id: string;
  id: string;
};

export type Achievement = {
  id: string;
  title: string;
  description: string;
  is_completed: boolean;
  percentage: number;
  data: {
    target: number;
    current: number;
    type?: "hours" | "weeks" | "months" | "years";
  }[];
};

export type AchievementCategory = {
  id: string;
  title: string;
  icon: IconName;
  description: string;
  achievements: Achievement[];
};

export namespace GetAll {
  export type Result = AchievementCategory[];
}

export namespace GetAchievement {
  export type Params = {
    id: string;
  };
  export type Result = Achievement | null;
}
