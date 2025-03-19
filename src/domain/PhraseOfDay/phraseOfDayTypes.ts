import { MainReasonForQuitting } from "@components";

export type PhraseOfDay = {
  phrase: string;
  reason: MainReasonForQuitting;
};

export namespace GetPhraseOfDay {
  export type Params = void;
  export type Result = {
    phrase: string;
  };
}
