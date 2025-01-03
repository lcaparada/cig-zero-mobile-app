import { AuthResponse } from "@supabase/supabase-js";

import { OnboardingScreenSchemaType } from "@screens";

export namespace SignInAnonymously {
  export type Params = OnboardingScreenSchemaType & {
    isNewUser: boolean;
  };
  export type Result = AuthResponse["data"];
}
