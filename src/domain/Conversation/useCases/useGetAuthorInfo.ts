import { useQuery } from "@tanstack/react-query";

import { QueryKeys } from "@infra";

import { conversationsService } from "../conversationsService";
import { GetAuthorInfo } from "../conversationsTypes";

export const useGetAuthorInfo = (authorId: string) => {
  const { data, isLoading } = useQuery<unknown, Error, GetAuthorInfo.Params>({
    queryKey: [QueryKeys.GetAuthorInfo, authorId],
    queryFn: () => conversationsService.getAuthorInfo({ authorId }),
  });

  return { data, isLoading };
};
