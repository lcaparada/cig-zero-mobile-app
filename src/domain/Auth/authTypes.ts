import { Session, User } from "@supabase/supabase-js";

export namespace SignInWithProvider {
  export type Params = {
    idToken: string;
    provider: "google" | "apple";
  };
  export type Result = {
    user: User;
    session: Session;
  };
}

export namespace CheckUserAccount {
  export type Params = {
    email: string;
  };

  export type Result = boolean;
}
