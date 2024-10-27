import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  personalInformationSchema,
  PersonalInformationSchemaType,
} from "./schema/personalInformationSchema";

export const usePersonalInformation = () => {
  const { control } = useForm<PersonalInformationSchemaType>({
    resolver: zodResolver(personalInformationSchema),
    defaultValues: {
      name: "",
    },
    mode: "onChange",
  });

  return {
    control,
  };
};
