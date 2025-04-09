import { StyleSheet, Text } from "react-native";
import { Button, ButtonProps } from "../Button";

import { render, fireEvent, screen } from "test-utils";
import { theme } from "@theme";

function renderComponent(props?: Partial<ButtonProps>) {
  const buttonText = "button text";

  render(<Button text={buttonText} {...props} />);

  const titleElement = screen.getByText(buttonText);

  return {
    titleElement,
  };
}

describe("<Button/>", () => {
  it("should call onPress when the button is pressed", () => {
    const mockedOnPress = jest.fn();
    const { titleElement } = renderComponent({ onPress: mockedOnPress });

    fireEvent.press(titleElement);

    expect(mockedOnPress).toHaveBeenCalled();
  });

  it("should not call onPress when disabled is true", () => {
    const mockedOnPress = jest.fn();

    const { titleElement } = renderComponent({
      onPress: mockedOnPress,
      disabled: true,
    });

    fireEvent.press(titleElement);

    expect(mockedOnPress).not.toHaveBeenCalled();
  });

  it("should render button title in neutralDarkest when disabled", () => {
    const { titleElement } = renderComponent({ disabled: true });

    const titleStyle = StyleSheet.flatten(titleElement.props.style);

    expect(titleStyle.color).toEqual(theme.colors.neutralDarkest);
  });

  it("should show activity indicator when isLoading is true", () => {
    render(<Button text={"button text"} isLoading={true} />);

    expect(screen.getByTestId("activity-indicator-button")).toBeDefined();
  });

  it("should render icon if iconName is defined", () => {
    renderComponent({ iconName: "apple" });

    expect(screen.getByTestId("icon-button")).toBeDefined();
  });

  it("should render the rightComponent when provided", () => {
    renderComponent({
      rightComponent: <Text testID="right-component">Hello World!</Text>,
    });

    expect(screen.getByTestId("right-component")).toBeTruthy();
    expect(screen.getByText("Hello World!")).toBeTruthy();
  });

  it("should render the arrowRight when provided", () => {
    renderComponent({ hasArrowRight: true });

    expect(screen.getByTestId("arrow-right-button")).toBeTruthy();
  });
});
