export type Gender = "MAS" | "FEM" | "NDA";
export type AgeRange = "18_24" | "25_34" | "35_44" | "45+";
export type SmokeYears = "1" | "2_5" | "6_10" | "10";
export type CigarettesPerDays = "1_5" | "6_10" | "11_20" | "21";
export type QuitMethod = "STOP_NOW" | "REDUCE_GRADUALLY";
export type MainReasonForQuitting = "HEALTHY" | "SAVINGS" | "FAMILY" | "OTHER";
export type YesNoOption = "YES" | "NO";

export type OnboardingInputItemValue =
  | Gender
  | AgeRange
  | SmokeYears
  | CigarettesPerDays
  | QuitMethod
  | MainReasonForQuitting
  | YesNoOption;

export interface OnboardingInputItemData {
  emoji?: string;
  text: string;
  value: OnboardingInputItemValue;
}
