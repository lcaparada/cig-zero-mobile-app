import { z } from "zod";

export const onboardingModalSchema = z.object({
  name: z.string(),
  gender: z.string(),
  age: z.string(),
  howManyYearsSmoke: z.string(),
  howManyCigarettesPerDay: z.string(),
  quitImmediatelyOrReduceGradually: z.string(),
  mainReasonForQuitting: z.string(),
  likeToReceiveDailyReminders: z.string(),
});

export type OnboardingModalSchemaType = z.infer<typeof onboardingModalSchema>;
