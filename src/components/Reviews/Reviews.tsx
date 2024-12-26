import { memo } from "react";
import { Dimensions } from "react-native";

import { ScrollView } from "react-native-gesture-handler";

import { getReviews } from "@constraints";
import { Box } from "src/components/Box/Box";

import { ReviewItem } from "../ReviewItem/ReviewItem";

const Reviews = memo(function Reviews() {
  const SCREEN_WIDTH = Dimensions.get("screen").width;

  const offset = 25;
  const columnGap = 10;
  const paddingHorizontal = 30;
  const offsetGap = offset - columnGap;
  const availableSpace = SCREEN_WIDTH - paddingHorizontal * 2;

  const randomReviews = getReviews()
    .sort(() => Math.random() - 0.5)
    .slice(0, 5);

  return (
    <Box>
      <ScrollView
        horizontal
        pagingEnabled
        decelerationRate="fast"
        style={{ overflow: "visible" }}
        contentContainerStyle={{ columnGap }}
        showsHorizontalScrollIndicator={false}
        snapToInterval={availableSpace - offsetGap}
      >
        {randomReviews.map((item, index) => (
          <ReviewItem
            key={index}
            {...item}
            style={{ width: availableSpace - offset }}
          />
        ))}
      </ScrollView>
    </Box>
  );
});

export { Reviews };
