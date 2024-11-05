import { useMutation } from "@tanstack/react-query";

import { useAuth, useToastService } from "@services";

import { authService } from "../authService";

export const useAuthDeleteAccount = () => {
  const { signOut } = useAuth();
  const { showToast } = useToastService();

  const { mutateAsync, isPending: isDeleteAccountPending } = useMutation<
    unknown,
    Error,
    unknown
  >({
    mutationFn: () => authService.deleteAccount(),
    onSuccess: () => {
      signOut().then(() => {
        showToast({
          duration: 5000,
          type: "success",
          message: "Sua conta foi excluída com sucesso.",
        });
      });
    },
  });

  const handleDeleteAccount = async () => {
    try {
      await mutateAsync({});
    } catch (error: any) {
      console.error(error);
    }
  };

  return { handleDeleteAccount, isDeleteAccountPending };
};
