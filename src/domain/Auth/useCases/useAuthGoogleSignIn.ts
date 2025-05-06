import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { useMutation } from "@tanstack/react-query";

import { SignInWithProvider } from "../authTypes";

import { authService } from "./../authService";

GoogleSignin.configure({
  // @ts-ignore
  iosClientId: process.env.EXPO_PUBLIC_GOOGLE_IOS_CLIENT_ID,
  // @ts-ignore
  webClientId: process.env.EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID,
});

export const useAuthGoogleSignIn = () => {
  const { mutateAsync, isPending: isGoogleSignInPending } = useMutation<
    SignInWithProvider.Result,
    Error,
    SignInWithProvider.Params
  >({
    mutationFn: (variables) => authService.signInWithProvider(variables),
  });

  const handleSignInWithGoogle = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      await GoogleSignin.signIn();
      const tokens = await GoogleSignin.getTokens();
      if (tokens.idToken) {
        await mutateAsync({
          provider: "google",
          idToken: tokens.idToken,
        });
      }
    } catch (error) {
      throw error;
    }
  };

  return { handleSignInWithGoogle, isGoogleSignInPending };
};
