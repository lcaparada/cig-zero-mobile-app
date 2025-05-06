import { useMutation } from "@tanstack/react-query";
import * as AppleAuthentication from "expo-apple-authentication";

import { useAuth, useToastService } from "@services";

import { SignInWithProvider } from "../authTypes";

import { authService } from "./../authService";
import { usernames } from "src/constants";

export const useAuthAppleSignIn = () => {
  const { showToast } = useToastService();

  const { updateUserName } = useAuth();

  const TOAST_DURATION = 7000; // 7 SEC

  const { mutateAsync, isPending: isAppleSignInPending } = useMutation<
    SignInWithProvider.Result,
    Error,
    SignInWithProvider.Params
  >({
    mutationFn: (variables) => authService.signInWithProvider(variables),
  });

  const handleSignInWithApple = async () => {
    try {
      const isAvailable = await AppleAuthentication.isAvailableAsync();
      if (!isAvailable) {
        return showToast({
          type: "error",
          duration: TOAST_DURATION,
          message:
            "Seu dispositivo não está apto a autenticar com o provedor da Apple.",
        });
      }
      const credential = await AppleAuthentication.signInAsync({
        requestedScopes: [
          AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
          AppleAuthentication.AppleAuthenticationScope.EMAIL,
        ],
      });
      if (!credential.identityToken) {
        return showToast({
          type: "error",
          duration: TOAST_DURATION,
          message: "Não é possível obter o token para autenticação.",
        });
      }
      if (credential.identityToken) {
        const data = await mutateAsync({
          provider: "apple",
          idToken: credential.identityToken,
        });
        if (!data.session.user.user_metadata.name) {
          const randomNumber = Math.floor(Math.random() * usernames.length);
          const randomName = usernames[randomNumber];

          await updateUserName(randomName);
        }
      }
    } catch (error) {
      throw error;
    }
  };

  return {
    isAppleSignInPending,
    handleSignInWithApple,
  };
};
