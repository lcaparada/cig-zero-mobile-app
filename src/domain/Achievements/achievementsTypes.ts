import { IconName } from "@components";

export type Achievement = {
  id: string;
  title: string;
  description: string;
  is_completed: boolean;
  percentage: number;
  data: {
    target: number;
    current: number;
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
