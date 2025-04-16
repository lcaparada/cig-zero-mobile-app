import { fireEvent, render, screen } from "test-utils";
import { AddSmokingHourBottomSheet } from "../AddSmokingHourBottomSheet";

const MOCKED_DATE = new Date("2023-10-01T00:00:00Z");

describe("<AddSmokingHourBottomSheet/>", () => {
  it("should render title correct", () => {
    render(
      <AddSmokingHourBottomSheet
        setVisible={jest.fn()}
        calendarDate={MOCKED_DATE}
      />
    );

    expect(screen.findByText("Insira o horário")).toBeTruthy();
  });

  it("should render button correct", () => {
    render(
      <AddSmokingHourBottomSheet
        setVisible={jest.fn()}
        calendarDate={MOCKED_DATE}
      />
    );

    expect(screen.findByText(/adicionar/i)).toBeTruthy();
  });
});
