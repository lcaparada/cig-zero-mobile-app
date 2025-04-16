import { fireEvent, render, screen } from "test-utils";
import { BottomSheetHeader } from "../BottomSheetHeader";

describe("<BottomSheetHeader />", () => {
  it("should render title on the screen", () => {
    render(
      <BottomSheetHeader
        title="test title"
        closeModal={jest.fn}
        disabledToClose={true}
      />
    );

    expect(screen.getByText(/test title/i)).toBeTruthy();
  });

  it("should call the function when closing the modal if disabledToClose is false", () => {
    const mockedFunction = jest.fn();

    render(
      <BottomSheetHeader
        title="test title"
        closeModal={mockedFunction}
        disabledToClose={false}
      />
    );

    const iconButton = screen.getByTestId("icon-button");

    fireEvent.press(iconButton);

    expect(mockedFunction).toHaveBeenCalled();
  });

  it("should not render the back icon on the screen", () => {
    render(
      <BottomSheetHeader
        title="test title"
        closeModal={jest.fn}
        disabledToClose={true}
      />
    );

    expect(screen.queryByTestId("close-box")).toBeFalsy();
  });

  it("should render the right button on the screen", () => {
    render(
      <BottomSheetHeader
        title="test title"
        closeModal={jest.fn}
        rightButton={{ text: "test right button", action: jest.fn }}
        disabledToClose={true}
      />
    );

    expect(screen.getByText(/test right button/)).toBeTruthy();
  });

  it("should call function when the right button is pressed", () => {
    const mockedRightButtonFn = jest.fn();

    render(
      <BottomSheetHeader
        title="test title"
        closeModal={jest.fn}
        rightButton={{ text: "test right button", action: mockedRightButtonFn }}
        disabledToClose={true}
      />
    );

    const rightButtonElement = screen.getByTestId("right-button");

    fireEvent.press(rightButtonElement);

    expect(mockedRightButtonFn).toHaveBeenCalled();
  });
});
