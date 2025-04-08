import { calculateAverage } from "../calculateAverage";

describe("calculateAverage", () => {
  it('should calculate the average of two numbers separated by "_" and round it', () => {
    expect(calculateAverage("4_6")).toBe(5);
    expect(calculateAverage("2_3")).toBe(3);
    expect(calculateAverage("10_11")).toBe(11);
  });

  it('should return the number directly if there is no "_"', () => {
    expect(calculateAverage("7")).toBe(7);
    expect(calculateAverage("0")).toBe(0);
    expect(calculateAverage("12")).toBe(12);
  });

  it("should handle negative numbers correctly", () => {
    expect(calculateAverage("-4_-6")).toBe(-5);
    expect(calculateAverage("-3_3")).toBe(0);
  });
});
