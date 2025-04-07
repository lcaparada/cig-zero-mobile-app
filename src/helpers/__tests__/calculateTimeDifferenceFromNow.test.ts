import { sub } from "date-fns";

import { calculateTimeDifferenceFromNow } from "../calculateTimeDifferenceFromNow";

const MOCKED_DATE = new Date("2023-10-01T00:00:00Z");

describe("calculateTimeDifferenceFromNow", () => {
  beforeAll(() => {
    jest.spyOn(Date, "now").mockImplementation(() => MOCKED_DATE.getTime());
  });

  afterAll(() => {
    jest.clearAllMocks();
  });
  it("should return the correct time difference from now", () => {
    const date = new Date(
      sub(MOCKED_DATE, { days: 2, hours: 5 })
    ).toISOString();
    const result = calculateTimeDifferenceFromNow(date);
    expect(result).toEqual({ days: 2, hours: 5, minutes: 0 });
  });
  it("should return everything zero if it is not a valid date", () => {
    const result = calculateTimeDifferenceFromNow("2");
    expect(result).toEqual({ days: 0, hours: 0, minutes: 0 });
  });
  it("should return everything zero if the date in timestamp is not a number", () => {
    const result = calculateTimeDifferenceFromNow("22-03-2024");
    expect(result).toEqual({ days: 0, hours: 0, minutes: 0 });
  });

  it("should return everything zero if the date is empty", () => {
    const result = calculateTimeDifferenceFromNow("");
    expect(result).toEqual({ days: 0, hours: 0, minutes: 0 });
  });

  it("should return the correct time difference from now in countdown mode", () => {
    const date = new Date(MOCKED_DATE).toISOString();
    const result = calculateTimeDifferenceFromNow(date, true, 3);
    expect(result).toEqual({ days: 3, hours: 0, minutes: 0 });
  });

  it("should return everything zero if the countdown date is in the past", () => {
    const date = new Date(
      sub(MOCKED_DATE, { days: 5, hours: 0 })
    ).toISOString();
    const result = calculateTimeDifferenceFromNow(date, true, 3);
    expect(result).toEqual({ days: 0, hours: 0, minutes: 0 });
  });
});
