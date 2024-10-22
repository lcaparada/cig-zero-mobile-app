import { Session } from "@supabase/supabase-js";

export type AuthContextParams = {
  session: Session | null;
  loading: boolean;
};

export type AuthProviderProps = { children: React.ReactNode };
