import { useMutation } from "@tanstack/react-query";

import { useToastService } from "@services";

import { issuesService } from "../issuesService";
import { CreateIssue } from "../issuesTypes";

export const useCreateIssue = () => {
  const { showToast } = useToastService();

  const { mutateAsync, isPending: isCreateIssuePending } = useMutation<
    unknown,
    Error,
    CreateIssue
  >({
    mutationFn: (params) => issuesService.create(params),
  });

  const handleCreateIssue = async (params: CreateIssue) => {
    try {
      await mutateAsync(params);
    } catch (error: any) {
      showToast({ message: error.message, type: "error", duration: 5000 });
    }
  };

  return {
    isCreateIssuePending,
    handleCreateIssue,
  };
};
