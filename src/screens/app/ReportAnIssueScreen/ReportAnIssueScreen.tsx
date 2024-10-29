import { Box, FormTextInput, Screen } from "@components";

import { ImageCarousel } from "./components";
import { useReportAnIssueScreen } from "./useReportAnIssueScreen";

export const ReportAnIssueScreen = () => {
  const {
    photos,
    control,
    formState,
    isCreateIssuePending,
    isUploadIssuePhotoPending,
    handleSetImage,
    handleRemoveImage,
    handleCreateIssueAndUploadPhotos,
  } = useReportAnIssueScreen();
  return (
    <Screen
      canGoBack
      scrollable
      screenTitle={"Reportar um problema"}
      button={{
        text: "Enviar",
        disabled:
          !formState.isValid ||
          isCreateIssuePending ||
          isUploadIssuePhotoPending,
        loading: isCreateIssuePending || isUploadIssuePhotoPending,
        action: handleCreateIssueAndUploadPhotos,
      }}
      insets={{ bottom: "s24", left: "s24", right: "s24", top: "s0" }}
    >
      <Box rowGap={"s30"}>
        <FormTextInput
          control={control}
          name="issueTitle"
          label={"Título"}
          placeholder={"Digite o título"}
        />
        <FormTextInput
          height={160}
          multiline
          control={control}
          numberOfLines={4}
          name="issueDescription"
          alignItems={"flex-start"}
          label={"Descreva o problema"}
          placeholder={"Conte-nos detalhadamente o seu problema"}
        />
        <ImageCarousel
          photos={photos}
          handleSetImage={handleSetImage}
          handleRemoveImage={handleRemoveImage}
        />
      </Box>
    </Screen>
  );
};
