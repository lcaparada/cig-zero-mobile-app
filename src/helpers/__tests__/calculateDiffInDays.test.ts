import { calculateDiffInDays } from "../calculateDiffInDays";

describe("calculateDiffInDays", () => {
  it("should return the correct difference in days between two dates", () => {
    const laterDate = new Date("2023-10-10");
    const earlierDate = new Date("2023-10-01");
    const diff = calculateDiffInDays(laterDate, earlierDate);
    expect(diff).toBe(9);
  });
  it("should return a negative difference when the earlier date is later", () => {
    const laterDate = new Date("2023-10-01");
    const earlierDate = new Date("2023-10-10");
    const diff = calculateDiffInDays(laterDate, earlierDate);
    expect(diff).toBe(-9);
  });
  it("should return 0 when both dates are the same", () => {
    const date = new Date("2023-10-10");
    const diff = calculateDiffInDays(date, date);
    expect(diff).toBe(0);
  });
  it("should handle string date inputs", () => {
    const laterDate = "2023-10-10";
    const earlierDate = "2023-10-01";
    const diff = calculateDiffInDays(laterDate, earlierDate);
    expect(diff).toBe(9);
  });
  it("should handle invalid date inputs", () => {
    const laterDate = "invalid-date";
    const earlierDate = "2023-10-01";
    const diff = calculateDiffInDays(laterDate, earlierDate);
    expect(diff).toBeNaN();
  });
  it("should handle invalid date inputs", () => {
    const laterDate = "2023-10-10";
    const earlierDate = "invalid-date";
    const diff = calculateDiffInDays(laterDate, earlierDate);
    expect(diff).toBeNaN();
  });
  it("should handle invalid date inputs", () => {
    const laterDate = "invalid-date";
    const earlierDate = "invalid-date";
    const diff = calculateDiffInDays(laterDate, earlierDate);
    expect(diff).toBeNaN();
  });
  it("should handle leap years correctly", () => {
    const laterDate = new Date("2024-02-29"); // Leap year date
    const earlierDate = new Date("2024-02-28");
    const diff = calculateDiffInDays(laterDate, earlierDate);
    expect(diff).toBe(1);
  });
});
