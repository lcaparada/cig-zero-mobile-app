import { Session, User } from "@supabase/supabase-js";

export interface SignUp {
  email: string;
  password: string;
}
export interface SignIn {
  email: string;
  password: string;
}

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

export interface SendResetPassword {
  email: string;
}

export namespace CheckUserAccount {
  export type Params = {
    email: string;
  };

  export type Result = boolean;
}
