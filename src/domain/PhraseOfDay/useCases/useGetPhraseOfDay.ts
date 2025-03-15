import { useEffect } from "react";

import { useQuery } from "@tanstack/react-query";

import { QueryKeys } from "@infra";
import { useToastService } from "@services";

import { phraseOfDayService } from "../phraseOfDayService";
import { GetPhraseOfDay } from "../phraseOfDayTypes";

export const useGetPhraseOfDay = () => {
  const { showToast } = useToastService();

  const {
    data: phrase,
    isLoading,
    error,
  } = useQuery<unknown, Error, GetPhraseOfDay.Result>({
    queryKey: [QueryKeys.GetPhraseOfDay],
    queryFn: () => phraseOfDayService.getPhraseOfDay(),
  });

  useEffect(() => {
    if (error) {
      showToast({ message: error.message, duration: 7000, type: "error" });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error]);

  return {
    phrase,
    isLoading,
  };
};
