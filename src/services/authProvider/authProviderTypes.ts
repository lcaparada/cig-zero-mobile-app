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
  updateUserShowTutorial: (bool: boolean) => Promise<void>;
  updateUserInformation: (user: User) => void;
  updateUserFromOnboarding: (
    _session: Session,
    params: OnboardingScreenSchemaType
  ) => Promise<void>;
  updateNewUserStatus: (status: boolean) => void;
};

export type UserMetaData = {
  age: AgeRange;
  gender: Gender;
  howManyCigarettesPerDay: CigarettesPerDays;
  howManyYearsSmoke: SmokeYears;
  likeToReceiveDailyReminders: YesNoOption;
  mainReasonForQuitting: MainReasonForQuitting;
  name: string;
  quitImmediatelyOrReduceGradually: QuitMethod;
};

export type AuthProviderProps = { children: React.ReactNode };
