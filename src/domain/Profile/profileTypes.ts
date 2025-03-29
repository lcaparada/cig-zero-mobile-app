export type LevelAPI = {
  avatar_icon: null | string;
  number: number;
  description: string;
  icon: string;
  title: string;
}

export type Level = {
  avatarIcon: null | string;
  number: number;
  description: string;
  icon: string;
  title: string;
}

export type ProfileAPI = {
  bio: string;
  name: string;
  photo: string;
  location: string;
  level: LevelAPI;
  first_app_launch: string;
  visibility_status: VisibilityStatus;
  total_achievements: number;
};

export type Profile = {
  bio: string;
  name: string;
  photo: string;
  location: string;
  level: Level;
  visibilityStatus: VisibilityStatus;
  totalAchievements: number;
};

export type VisibilityStatus = "ONLY_ME" | "ALL";

export namespace GetProfile {
  export type Params = {
    userId: string;
  };
  export type Result = Profile;
}

export namespace UpdateProfile {
  export type Params = {
    bio: string;
    location: string;
    visibilityStatus: VisibilityStatus;
  };
  export type Result = void;
}
