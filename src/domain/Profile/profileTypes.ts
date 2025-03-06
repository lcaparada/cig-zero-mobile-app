export type ProfileAPI = {
  bio: string;
  location: string;
  visibility_status: VisibilityStatus;
  total_achievements: number;
};

export type Profile = {
  bio: string;
  location: string;
  visibilityStatus: VisibilityStatus;
  totalAchievements: number;
};

export type VisibilityStatus = "ONLY_ME" | "ONLY_FRIENDS" | "ALL";

export namespace GetProfile {
  export type Params = void;
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
