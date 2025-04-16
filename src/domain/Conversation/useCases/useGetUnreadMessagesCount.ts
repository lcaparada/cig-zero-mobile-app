import { useCallback, useEffect } from "react";

import { useFocusEffect } from "@react-navigation/native";
import { useQuery } from "@tanstack/react-query";

import { QueryKeys } from "@infra";
import { useToastService } from "@services";

import { conversationsService } from "../conversationsService";
import { GetUnreadMessagesCount } from "../conversationsTypes";

export const useGetUnreadMessagesCount = (
  lastTimeOpenedChat: string | undefined
) => {
  const { showToast } = useToastService();

  const { data, isLoading, error, refetch } = useQuery<
    unknown,
    Error,
    GetUnreadMessagesCount.Result
  >({
    queryKey: [QueryKeys.GetUnreadMessagesCount, lastTimeOpenedChat],
    queryFn: () =>
      conversationsService.getUnreadMessagesCount({ lastTimeOpenedChat }),
  });

  useFocusEffect(
    useCallback(() => {
      refetch();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
  );

  useEffect(() => {
    if (error) {
      showToast({ message: error.message, duration: 5000, type: "error" });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error]);

  return { data, isLoading };
};
