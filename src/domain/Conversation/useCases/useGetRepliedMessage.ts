import { useEffect } from "react";

import { useQuery } from "@tanstack/react-query";

import { QueryKeys } from "@infra";
import { useToastService } from "@services";

import { conversationsService } from "../conversationsService";
import { GetRepliedMessage } from "../conversationsTypes";

export const useGetRepliedMessage = (repliedMessageId: string) => {
  const { showToast } = useToastService();

  const { data, isLoading, error } = useQuery<
    unknown,
    Error,
    GetRepliedMessage.Result
  >({
    queryKey: [QueryKeys.GetRepliedMessage, repliedMessageId],
    queryFn: () => conversationsService.getRepliedMessage({ repliedMessageId }),
    enabled: !!repliedMessageId,
  });

  useEffect(() => {
    if (error) {
      showToast({ message: error.message, duration: 5000, type: "error" });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error]);

  return { data, isLoading };
};
