import { useState } from "react";

import { useAuthDeleteAccount } from "src/domain/Auth/useCases/useAuthDeleteAccount";

export const useAdjustmentsScreen = () => {
  const [confirmDeleteAccountModal, setConfirmDeleteAccountModal] =
    useState(false);

  const { handleDeleteAccount, isDeleteAccountPending } =
    useAuthDeleteAccount();

  return {
    handleDeleteAccount,
    isDeleteAccountPending,
    confirmDeleteAccountModal,
    setConfirmDeleteAccountModal,
  };
};
