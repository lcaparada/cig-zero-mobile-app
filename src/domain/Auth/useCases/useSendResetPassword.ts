import { SendResetPassword } from "./../authTypes";
import { useMutation } from "@tanstack/react-query";

import { useToastService } from "../../../services/toast/useToastService";
import { authService } from "../authService";
import { secureStorage } from "@services";
import { COUNTER_KEY } from "@screens";

interface ISendResetPassword {
  setCounter: React.Dispatch<React.SetStateAction<number>>;
}

export const useSendResetPassword = ({ setCounter }: ISendResetPassword) => {
  const { showToast } = useToastService();

  const { mutateAsync, isPending } = useMutation<
    unknown,
    Error,
    SendResetPassword
  >({
    mutationFn: (variables) => authService.sendResetPassword(variables),
    onSuccess: () =>
      showToast({
        message: "Seu email para redefinição de senha foi enviado com sucesso!",
        duration: 7000,
        type: "success",
      }),
  });

  const handleSendResetPassword = async (params: SendResetPassword) => {
    try {
      await mutateAsync(params);
      await secureStorage.setItem(COUNTER_KEY, Date.now());
      setCounter(60);
    } catch (error: any) {
      showToast({
        message: "Não foi possível enviar o email!",
        duration: 7000,
        type: "error",
      });
    }
  };

  return { handleSendResetPassword, isPending };
};
