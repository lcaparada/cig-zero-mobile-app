import { render, screen } from "test-utils";
import { ScrollViewContainer, ViewContainer } from "../BottomSheetContainer";
import { StyleSheet, Text } from "react-native";

describe("<BottomSheetContainer />", () => {
  describe("<ViewContainer />", () => {
    it("should render children correctly", () => {
      render(
        <ViewContainer backgroundColor="#000">
          <Text>View Child</Text>
        </ViewContainer>
      );

      expect(screen.getByText(/view child/i)).toBeTruthy();
    });

    it("should apply correct styles", () => {
      render(
        <ViewContainer backgroundColor="blue" hasFlexOne>
          <Text testID="child">Child</Text>
        </ViewContainer>
      );

      const viewElement = screen.getByTestId("view-container");

      const viewElementFlattenStyle = StyleSheet.flatten(
        viewElement.props.style
      );

      expect(viewElementFlattenStyle).toEqual({
        backgroundColor: "blue",
        flex: 1,
      });
    });
  });

  describe("<ScrollViewContainer />", () => {
    it("should render children correctly", () => {
      render(
        <ScrollViewContainer backgroundColor="#fff">
          <Text>Test Child</Text>
        </ScrollViewContainer>
      );

      expect(screen.getByText(/test child/i)).toBeTruthy();
    });

    it("should apply backgroundColor and flex when hasFlexOne is true", () => {
      render(
        <ScrollViewContainer backgroundColor="red" hasFlexOne>
          <Text testID="child">Child</Text>
        </ScrollViewContainer>
      );

      const scrollViewElement = screen.getByTestId("scroll-view-container");

      const scrollViewElementFlattenStyle = StyleSheet.flatten(
        scrollViewElement.props.style
      );
      expect(scrollViewElementFlattenStyle).toEqual({
        backgroundColor: "red",
        flex: 1,
      });
    });
  });
});
