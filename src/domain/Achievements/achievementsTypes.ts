import { IconName } from "@components";

export type Achievement = {
  id: string;
  title: string;
  target: number;
  current: number;
  description: string;
  is_completed: boolean;
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
