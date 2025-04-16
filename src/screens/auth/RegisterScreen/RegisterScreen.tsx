import {
  Screen,
  Button,
  OrDivider,
  SocialButtons,
  FormTextInput,
  FormPasswordInput,
  TextTermsOfUseAndPrivacyPolicy,
} from "@components";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema, RegisterSchemaType } from "./registerSchema";
import { useSignUp } from "@domain";

export const RegisterScreen = () => {
  const { handleSignUp, isPending } = useSignUp();

  const { control, formState, handleSubmit } = useForm<RegisterSchemaType>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
  });

  return (
    <Screen screenTitle="Criar conta" scrollable canGoBack>
      <FormTextInput
        control={control}
        name="email"
        label="Endereço de email"
        icon="atSign"
        placeholder="Digite o endereço de email"
      />
      <FormPasswordInput
        boxProps={{ mt: "s20" }}
        control={control}
        name="password"
        label="Senha"
        icon="lock2"
        placeholder="Digite sua senha"
      />
      <Button
        text={"Criar conta"}
        mt={"s20"}
        disabled={!formState.isValid || isPending}
        isLoading={isPending}
        onPress={handleSubmit(handleSignUp)}
      />
      <OrDivider />
      <SocialButtons boxProps={{ mt: "s20" }} />
      <TextTermsOfUseAndPrivacyPolicy />
    </Screen>
  );
};
