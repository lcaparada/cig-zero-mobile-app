import { Button, FormTextInput, Screen, Text } from "@components";
import { useForm } from "react-hook-form";
import {
  redefinePasswordSchema,
  RedefinePasswordSchemaType,
} from "./redefinePasswordSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSendResetPassword } from "@domain";
import { useEffect, useState } from "react";
import { secureStorage } from "@services";

export const COUNTER_KEY = "resetPasswordCounter";

export const RedefinePasswordScreen = () => {
  const [counter, setCounter] = useState(0);

  const { handleSendResetPassword, isPending } = useSendResetPassword({
    setCounter,
  });

  const { control, handleSubmit, formState } =
    useForm<RedefinePasswordSchemaType>({
      resolver: zodResolver(redefinePasswordSchema),
      defaultValues: {
        email: "",
      },
      mode: "onChange",
    });

  useEffect(() => {
    const loadCounter = async () => {
      const storedTimestamp = await secureStorage.getItem<number>(COUNTER_KEY);
      if (storedTimestamp) {
        const currentTime = Date.now();
        const elapsedSeconds = Math.floor(
          (currentTime - storedTimestamp) / 1000
        );
        const remainingSeconds = 60 - elapsedSeconds;
        if (remainingSeconds > 0) {
          setCounter(remainingSeconds);
        }
      }
    };
    loadCounter();
  }, []);

  useEffect(() => {
    if (counter > 0) {
      const interval = setInterval(() => {
        setCounter((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [counter]);

  return (
    <Screen canGoBack scrollable screenTitle={"Redefinir senha"}>
      <FormTextInput
        control={control}
        name="email"
        label={"Endereço de email"}
        placeholder={"Digite o endereço de email"}
      />
      <Button
        mt={"s20"}
        text={"Enviar"}
        isLoading={isPending}
        onPress={handleSubmit(handleSendResetPassword)}
        disabled={!formState.isValid || isPending}
      />
      {counter > 0 && (
        <Text preset="paragraphsBig" color={"backgroundConstrast"} mt={"s18"}>
          Você pode enviar outro email em{" "}
          <Text preset="paragraphsBig" color={"primary"} weight="bold">
            {counter}s
          </Text>
        </Text>
      )}
    </Screen>
  );
};
