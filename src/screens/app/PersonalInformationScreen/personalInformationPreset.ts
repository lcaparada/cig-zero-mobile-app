import { UserMetaData } from "@services";

export const gender: Record<UserMetaData["gender"], string> = {
  MAS: "Masculino",
  FEM: "Feminino",
  NDA: "Prefiro não dizer",
};

export const age: Record<UserMetaData["age"], string> = {
  "18_24": "18-24",
  "25_34": "25-34",
  "35_44": "35-44",
  "45+": "45+",
};
