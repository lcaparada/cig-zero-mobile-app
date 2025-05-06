import { z } from "zod";

export const onboardingScreenSchema = z.object({
  gender: z.string(),
  age: z.string(),
  howManyYearsSmoke: z.string(),
  pricePackCigarrete: z.string(),
  howManyCigarettesPerDay: z.string(),
  lastSmoking: z.string(),
  quitImmediatelyOrReduceGradually: z.string(),
  mainReasonForQuitting: z.string(),
  likeToReceiveDailyReminders: z.string(),
});

export type OnboardingScreenSchemaType = z.infer<typeof onboardingScreenSchema>;
