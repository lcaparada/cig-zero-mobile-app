import {
  Text,
  Button,
  Screen,
  OrDivider,
  SocialButtons,
  FormTextInput,
  FormPasswordInput,
  TouchableOpacityBox,
  TextTermsOfUseAndPrivacyPolicy,
} from "@components";
import { useForm } from "react-hook-form";
import { loginSchema, LoginSchemaType } from "./loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSignIn } from "@domain";
import { useNavigation } from "@react-navigation/native";

export const LoginScreen = () => {
  const { handleSignIn, isPending } = useSignIn();

  const { navigate } = useNavigation();

  const { control, formState, handleSubmit } = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
  });

  return (
    <Screen screenTitle="Entrar" scrollable canGoBack>
      <FormTextInput
        label="Endereço de email"
        icon="atSign"
        control={control}
        name="email"
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
      <TouchableOpacityBox
        mt={"s20"}
        onPress={() => navigate("RedefinePasswordScreen")}
      >
        <Text weight="medium" color={"primary"}>
          Esqueci minha senha
        </Text>
      </TouchableOpacityBox>
      <Button
        text="Entrar"
        disabled={!formState.isValid || isPending}
        isLoading={isPending}
        onPress={handleSubmit(handleSignIn)}
        mt={"s20"}
      />
      <OrDivider />
      <SocialButtons boxProps={{ mt: "s20" }} />
      <TextTermsOfUseAndPrivacyPolicy />
    </Screen>
  );
};
