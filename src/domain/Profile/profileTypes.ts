export type ProfileAPI = {
  bio: string;
  name: string;
  photo: string;
  location: string;
  first_app_launch: string;
  visibility_status: VisibilityStatus;
  total_achievements: number;
};

export type Profile = {
  bio: string;
  name: string;
  photo: string;
  location: string;
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
