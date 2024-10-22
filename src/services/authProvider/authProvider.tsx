import React, { createContext, useState, useEffect, useContext } from "react";

import { AuthChangeEvent, Session } from "@supabase/supabase-js";

import { supabase } from "@api";

import { AuthContextParams, AuthProviderProps } from "./authProviderTypes";

const AuthContext = createContext<AuthContextParams>({
  session: null,
  loading: true,
});

export const AuthProvider = ({ children }: AuthProviderProps): JSX.Element => {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event: AuthChangeEvent, session: Session | null) => {
        switch (event) {
          case "SIGNED_IN":
          case "INITIAL_SESSION":
            setSession(session);
            break;
          case "TOKEN_REFRESHED":
            if (session?.access_token) {
              setSession({ ...session, access_token: session.access_token });
            }
            break;
          case "SIGNED_OUT":
            setSession(null);
            break;
        }
        setLoading(false);
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ session, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextParams => useContext(AuthContext);
