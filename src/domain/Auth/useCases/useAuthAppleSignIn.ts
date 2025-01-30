import { useMutation } from "@tanstack/react-query";
import * as AppleAuthentication from "expo-apple-authentication";

import { useToastService } from "@services";

import { SignInWithProvider } from "../authTypes";

import { authService } from "./../authService";

export const useAuthAppleSignIn = () => {
  const { showToast } = useToastService();

  const TOAST_DURATION = 7000; // 7 SEC

  const { mutateAsync, isPending: isAppleSignInPending } = useMutation<
    unknown,
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
        await mutateAsync({
          provider: "apple",
          idToken: credential.identityToken,
        });
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
