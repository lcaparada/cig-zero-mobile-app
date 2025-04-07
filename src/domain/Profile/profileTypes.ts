export type LevelAPI = {
  avatar_icon: null | string;
  number: number;
  description: string;
  icon: string;
  total_acc_xp: number;
  next_level_xp: number;
  title: string;
};

export type Level = {
  title: string;
  icon: string;
  number: number;
  totalAccXp: number;
  avatarIcon: null | string;
  description: string;
  nextLevelXp: number;
};

export type ProfileAPI = {
  bio: string;
  name: string;
  photo: string;
  location: string;
  level: LevelAPI;
  first_app_launch: string;
  visibility_status: VisibilityStatus;
  total_achievements: number;
  total_missions_concluded: number;
};

export type Profile = {
  bio: string;
  name: string;
  photo: string;
  location: string;
  level: Level;
  visibilityStatus: VisibilityStatus;
  totalAchievements: number;
  totalMissionsConcluded: number;
};

export type VisibilityStatus = "ONLY_ME" | "ALL";

export namespace GetProfile {
  export type Params = {
    userId: string;
  };
  export type Result = Profile;
}

export namespace UploadProfilePhoto {
  export type Params = {
    filePath: string;
    base64: string;
    contentType: string;
  };

  export type Result = {
    publicUrl: string;
  };
}

export namespace UpdateProfile {
  export type Params = {
    bio: string;
    photo: string;
    location: string;
    visibilityStatus: VisibilityStatus;
  };
  export type Result = void;
}
