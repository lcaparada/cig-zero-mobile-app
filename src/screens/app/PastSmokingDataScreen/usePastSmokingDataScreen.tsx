import { useState } from "react";

import { useNavigation } from "@react-navigation/native";
import { useQueryClient } from "@tanstack/react-query";

import { useUpdateUserMetadata } from "@domain";
import { QueryKeys } from "@infra";
import { useAuth, UserMetadata, useToastService } from "@services";

import { IPastSmokingDataState } from "./types";

export const usePastSmokingDataScreen = () => {
  const { session } = useAuth();

  const { showToast } = useToastService();

  const navigation = useNavigation();

  const queryClient = useQueryClient();

  const userMetadata = session?.user.user_metadata as UserMetadata;

  const { handleUpdateUserMetadata, isUpdatingUserMetada } =
    useUpdateUserMetadata();

  async function updateUserMetadata() {
    try {
      await handleUpdateUserMetadata({
        cigarettesPerDay: pastSmokingDataState.howManyCigarettesPerDay,
        pricePackCigarrete: pastSmokingDataState.pricePackCigarrete,
        yearsSmoking: pastSmokingDataState.howManyYearsSmoke,
      });
      queryClient.refetchQueries({ queryKey: [QueryKeys.GetProgressData] });
      queryClient.refetchQueries({ queryKey: [QueryKeys.GetHistoricData] });
      navigation.goBack();
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      showToast({
        message: "Erro ao atualizar",
        duration: 7000,
        type: "error",
      });
    }
  }

  const [pastSmokingDataState, setPastSmokingDataState] =
    useState<IPastSmokingDataState>({
      howManyYearsSmoke: userMetadata.howManyYearsSmoke,
      howManyCigarettesPerDay: userMetadata.howManyCigarettesPerDay,
      pricePackCigarrete: userMetadata.pricePackCigarrete,
    });

  const updateState = (key: keyof IPastSmokingDataState, newValue: string) => {
    setPastSmokingDataState((prev) => ({ ...prev, [key]: newValue }));
  };

  const canSave = Object.entries(pastSmokingDataState).some(
    ([key, pastValue]) => {
      const userKey = key as keyof UserMetadata;
      const userValue = userMetadata?.[userKey];

      return (
        String(pastValue) !== String(userValue) &&
        pastValue !== null &&
        pastValue !== undefined &&
        pastValue !== "" &&
        userValue !== null &&
        userValue !== undefined &&
        userValue !== ""
      );
    }
  );

  return {
    canSave,
    isUpdatingUserMetada,
    pastSmokingDataState,
    updateState,
    updateUserMetadata,
  };
};
