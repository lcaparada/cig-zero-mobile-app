import { fireEvent, render, screen } from "test-utils";
import { BottomSheet } from "../BottomSheet";
import { Text } from "react-native";
import * as utils from "../utils";

jest.mock("../utils", () => ({
  calculateHeight: jest.fn(),
}));

describe("<BottomSheet />", () => {
  it("should render title and children", () => {
    render(
      <BottomSheet title="test title" setVisible={jest.fn}>
        <Text>Hello World!</Text>
      </BottomSheet>
    );

    expect(screen.getByText(/test title/i)).toBeTruthy();
    expect(screen.getByText(/hello world!/i)).toBeTruthy();
  });

  it("should render right button when passed", () => {
    render(
      <BottomSheet
        title="Sheet"
        setVisible={jest.fn}
        rightButton={{
          text: "Cancel",
          action: jest.fn,
        }}
      >
        <Text>Content</Text>
      </BottomSheet>
    );

    expect(screen.getByText(/Cancel/i)).toBeTruthy();
  });

  it("should call main button action when pressed", () => {
    const mockButtonAction = jest.fn();
    render(
      <BottomSheet
        title="Sheet"
        setVisible={jest.fn}
        button={{
          text: "Save",
          action: mockButtonAction,
          preset: "primary",
        }}
      >
        <Text>Content</Text>
      </BottomSheet>
    );

    fireEvent.press(screen.getByText(/save/i));
    expect(mockButtonAction).toHaveBeenCalled();
  });

  it("should call right button action when pressed", () => {
    const mockRightButtonAction = jest.fn();

    render(
      <BottomSheet
        title="Sheet"
        setVisible={jest.fn}
        rightButton={{
          text: "Cancel",
          action: mockRightButtonAction,
        }}
      >
        <Text>Content</Text>
      </BottomSheet>
    );

    fireEvent.press(screen.getByText(/cancel/i));
    expect(mockRightButtonAction).toHaveBeenCalled();
  });

  it("should not appear icon to close bottom sheet when disabledToClose is true", () => {
    const mockSetVisible = jest.fn();

    render(
      <BottomSheet
        title="Sheet"
        setVisible={mockSetVisible}
        disabledToClose={true}
      >
        <Text>Content</Text>
      </BottomSheet>
    );

    expect(screen.queryByTestId("icon-button")).toBeFalsy();
  });

  it("should close bottom sheet when icon is pressed", () => {
    const mockSetVisible = jest.fn();

    render(
      <BottomSheet title="Sheet" setVisible={mockSetVisible}>
        <Text>Content</Text>
      </BottomSheet>
    );

    const iconButtonElement = screen.getByTestId("icon-button");

    fireEvent.press(iconButtonElement);

    expect(mockSetVisible).toHaveBeenCalled();
  });

  it("should render ScrollViewContainer if scrollable is true", () => {
    render(
      <BottomSheet title="Sheet" setVisible={jest.fn}>
        <Text>Content</Text>
      </BottomSheet>
    );

    expect(screen.getByTestId("scroll-view-container")).toBeTruthy();
  });

  it("should render ViewContainer if scrollable is false", () => {
    render(
      <BottomSheet title="Sheet" scrollable={false} setVisible={jest.fn}>
        <Text>Content</Text>
      </BottomSheet>
    );

    expect(screen.getByTestId("view-container")).toBeTruthy();
  });

  it("should render button outside container when hasKeyboard is false and button is passed", () => {
    render(
      <BottomSheet
        title="Sheet"
        scrollable={false}
        hasKeyboard={false}
        button={{
          text: "Save",
          action: jest.fn,
          preset: "primary",
        }}
        setVisible={jest.fn}
      >
        <Text>Content</Text>
      </BottomSheet>
    );

    expect(screen.queryByTestId("inside-container-button")).toBeFalsy();
    expect(screen.getByTestId("outside-container-button")).toBeTruthy();
  });

  it("should render button inside container when hasKeyboard is true and button is passed", () => {
    render(
      <BottomSheet
        title="Sheet"
        scrollable={false}
        hasKeyboard
        button={{
          text: "Save",
          action: jest.fn,
          preset: "primary",
        }}
        setVisible={jest.fn}
      >
        <Text>Content</Text>
      </BottomSheet>
    );

    expect(screen.getByTestId("inside-container-button")).toBeTruthy();
    expect(screen.queryByTestId("outside-container-button")).toBeFalsy();
  });

  it("should not call the button.action when disabled is true", () => {
    const mockButtonAction = jest.fn();

    render(
      <BottomSheet
        title="Sheet"
        setVisible={jest.fn}
        button={{
          text: "Confirm",
          action: mockButtonAction,
          preset: "primary",
          disabled: true,
        }}
      >
        <Text>Content</Text>
      </BottomSheet>
    );

    const buttonElement = screen.getByText(/confirm/i);

    fireEvent.press(buttonElement);
    expect(mockButtonAction).not.toHaveBeenCalled();
  });

  it("should update bottomSheetLayout on layout if prop height is auto", () => {
    render(
      <BottomSheet title="Sheet" setVisible={jest.fn()} height={"auto"}>
        <Text>Content</Text>
      </BottomSheet>
    );

    const sheet = screen.getByTestId("bottom-sheet");

    fireEvent(sheet, "layout", {
      nativeEvent: {
        layout: {
          height: 200,
          width: 100,
          x: 0,
          y: 0,
        },
      },
    });
    expect(utils.calculateHeight).toHaveBeenCalledWith(200);
  });

  it("should not close when touch in backdrop when disabledToClose is true", () => {
    const mockSetVisible = jest.fn();

    render(
      <BottomSheet
        title="Sheet"
        setVisible={mockSetVisible}
        disabledToClose={true}
      >
        <Text>Content</Text>
      </BottomSheet>
    );

    const backdropElement = screen.getByTestId("backdrop");

    fireEvent.press(backdropElement);

    expect(mockSetVisible).not.toHaveBeenCalled();
  });

  it("should close when touch in backdrop when disabledToClose is false", () => {
    const mockSetVisible = jest.fn();

    render(
      <BottomSheet title="Sheet" setVisible={mockSetVisible}>
        <Text>Content</Text>
      </BottomSheet>
    );

    const backdropElement = screen.getByTestId("backdrop");

    fireEvent.press(backdropElement);

    expect(mockSetVisible).toHaveBeenCalled();
  });
});
