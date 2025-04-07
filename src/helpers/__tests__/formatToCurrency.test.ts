import { formatToCurrency } from "../formatToCurrency";
describe("formatToCurrency", () => {
  it("should format a number to Brazilian currency format", () => {
    expect(formatToCurrency(1234.56)).toBe("1.234,56");
    expect(formatToCurrency(1000)).toBe("1.000,00");
    expect(formatToCurrency(0)).toBe("0,00");
    expect(formatToCurrency(-1234.56)).toBe("-1.234,56");
  });

  it("should handle large numbers correctly", () => {
    expect(formatToCurrency(1234567890)).toBe("1.234.567.890,00");
  });

  it("should handle decimal values correctly", () => {
    expect(formatToCurrency(1234.5678)).toBe("1.234,57");
  });
  it("should handle negative decimal values correctly", () => {
    expect(formatToCurrency(-1234.5678)).toBe("-1.234,57");
  });
  it("should handle zero correctly", () => {
    expect(formatToCurrency(0)).toBe("0,00");
  });
});
