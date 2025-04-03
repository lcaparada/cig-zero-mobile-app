import { Image, ScrollView } from "react-native";

import * as Haptics from "expo-haptics";

import { Box, Icon, TouchableOpacityBox } from "@components";

import { ImageInput } from "./ImageInput";

type ImageCarouselProps = {
  photos: string[];
  handleSetImage: () => Promise<void>;
  handleRemoveImage: (index: number) => void;
};

export const ImageCarousel = ({
  photos,
  handleSetImage,
  handleRemoveImage,
}: ImageCarouselProps) => {
  return (
    <Box>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ columnGap: 8 }}
      >
        <ImageInput onPress={handleSetImage} />
        {photos.map((uri, index) => (
          <TouchableOpacityBox
            key={index}
            width={100}
            height={100}
            borderWidth={2}
            borderRadius={"s12"}
            onPress={() => {
              Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
              handleRemoveImage(index);
            }}
          >
            <Box
              top={8}
              right={8}
              zIndex={1}
              width={26}
              height={26}
              borderRadius={"s8"}
              alignItems={"center"}
              position={"absolute"}
              justifyContent={"center"}
              backgroundColor={"primary"}
            >
              <Icon name="trash2" color="neutralLighest" strokeWidth={2.5} />
            </Box>
            <Image
              style={{
                width: "100%",
                height: "100%",
                borderRadius: 12,
                resizeMode: "cover",
              }}
              source={{ uri: uri !== null ? uri : "" }}
            />
          </TouchableOpacityBox>
        ))}
      </ScrollView>
    </Box>
  );
};
