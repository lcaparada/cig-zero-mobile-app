import { supabaseEdgeFunction } from "@api";

import { GetPhraseOfDay } from "./phraseOfDayTypes";

async function getPhraseOfDay(): Promise<GetPhraseOfDay.Result> {
  try {
    const result = await supabaseEdgeFunction.post("get-phrase-of-day");
    return result.data;
  } catch (error) {
    throw error;
  }
}

export const phraseOfDayService = {
  getPhraseOfDay,
};
