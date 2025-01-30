import { z } from "zod";

export const onboardingScreenSchema = z.object({
  name: z.string(),
  gender: z.string(),
  age: z.string(),
  howManyYearsSmoke: z.string(),
  howManyCigarettesPerDay: z.string(),
  quitImmediatelyOrReduceGradually: z.string(),
  mainReasonForQuitting: z.string(),
  likeToReceiveDailyReminders: z.string(),
});

export type OnboardingScreenSchemaType = z.infer<typeof onboardingScreenSchema>;
