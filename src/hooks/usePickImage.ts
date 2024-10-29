import { useState } from "react";

import * as ImagePicker from "expo-image-picker";

import { useToastService } from "@services";

type PickImageProps = {
  acceptMultipleImages?: boolean;
  limit?: number;
};

export const usePickImage = ({
  limit = 99,
  acceptMultipleImages = false,
}: PickImageProps) => {
  const [photos, setPhotos] = useState<string[]>([]);

  const { showToast } = useToastService();

  const handleSetImage = async () => {
    if (photos.length !== limit) {
      const result = await ImagePicker.launchImageLibraryAsync({
        quality: 0.5,
        aspect: [4, 3],
        allowsEditing: true,
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
      });

      if (!result.canceled) {
        setPhotos(
          acceptMultipleImages
            ? [result?.assets[0]?.uri, ...photos]
            : [result?.assets[0]?.uri]
        );
      }
    } else {
      showToast({
        type: "error",
        duration: 6000,
        message: `O limite de quantidade de imagem para enviar é de ${limit}`,
      });
    }
  };

  const handleRemoveImage = (index: number) => {
    const photosCloned = [...photos];
    photosCloned.splice(index, 1);
    setPhotos(photosCloned);
  };

  return {
    photos,
    setPhotos,
    handleSetImage,
    handleRemoveImage,
  };
};
