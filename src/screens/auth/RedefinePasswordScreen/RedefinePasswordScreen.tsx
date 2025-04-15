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

const COUNTER_KEY = "resetPasswordCounter";

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
      const storedCounter = await secureStorage.getItem<number>(COUNTER_KEY);
      if (storedCounter) {
        if (storedCounter > 0) {
          setCounter(storedCounter);
        }
      }
    };
    loadCounter();
  }, []);

  useEffect(() => {
    const saveCounter = async () => {
      if (counter > 0) {
        await secureStorage.setItem(COUNTER_KEY, counter);
      } else {
        await secureStorage.removeItem(COUNTER_KEY);
      }
    };
    saveCounter();
  }, [counter]);

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
