import { Session, User } from "@supabase/supabase-js";

import {
  AgeRange,
  Gender,
  MainReasonForQuitting,
  QuitMethod,
  YesNoOption,
} from "@components";
import { OnboardingScreenSchemaType } from "@screens";

export type AuthContextParams = {
  session: Session | null;
  loading: boolean;
  signOut: () => Promise<void>;
  updateUserShowTutorial: (bool: boolean) => void;
  updateUserMetadata: (userMetadata: UserMetaData) => void;
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
  howManyCigarettesPerDay: string;
  howManyYearsSmoke: string;
  lastSmoking: string;
  pricePackCigarrete: string;
  isNewUser: boolean;
  iss: string;
  last_activity_at: string;
  likeToReceiveDailyReminders: YesNoOption;
  mainReasonForQuitting: MainReasonForQuitting;
  name: string;
  phone_verified: boolean;
  picture: string;
  provider_id: string;
  lastTimeOpenedChat?: string;
  quitImmediatelyOrReduceGradually: QuitMethod;
  showTutorial: boolean;
  sub: string;
};

export type AuthProviderProps = { children: React.ReactNode };
