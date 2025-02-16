import { Session, User } from "@supabase/supabase-js";

import {
  AgeRange,
  CigarettesPerDays,
  Gender,
  MainReasonForQuitting,
  QuitMethod,
  SmokeYears,
  YesNoOption,
} from "@components";
import { OnboardingScreenSchemaType } from "@screens";

export type AuthContextParams = {
  session: Session | null;
  loading: boolean;
  signOut: () => Promise<void>;
  updateUserShowTutorial: (bool: boolean) => void;
  updateUserInformation: (user: User) => void;
  createFirstAppLaunch: () => void;
  updateUserFromOnboarding: (
    _session: Session,
    params: OnboardingScreenSchemaType
  ) => Promise<void>;
  updateNewUserStatus: (status: boolean) => void;
};

export type UserMetaData = {
  age: AgeRange;
  avatar_url: string;
  email: string;
  email_verified: boolean;
  firstAppLaunch: string;
  full_name: string;
  gender: Gender;
  howManyCigarettesPerDay: CigarettesPerDays;
  howManyYearsSmoke: SmokeYears;
  isNewUser: boolean;
  iss: string;
  last_activity_at: string;
  likeToReceiveDailyReminders: YesNoOption;
  mainReasonForQuitting: MainReasonForQuitting;
  name: string;
  phone_verified: boolean;
  picture: string;
  provider_id: string;
  quitImmediatelyOrReduceGradually: QuitMethod;
  showTutorial: boolean;
  sub: string;
};

export type AuthProviderProps = { children: React.ReactNode };
