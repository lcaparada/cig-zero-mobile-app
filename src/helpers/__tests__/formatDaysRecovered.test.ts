import { formatDaysRecovered } from "../formatDaysRecovered";

describe("formatDaysRecovered", () => {
  it("should format days recovered into days, hours, and minutes correctly", () => {
    expect(formatDaysRecovered(1)).toBe("1 dia");
    expect(formatDaysRecovered(2)).toBe("2 dias");
    expect(formatDaysRecovered(0.5)).toBe("12 horas");
    expect(formatDaysRecovered(0.08)).toBe("1 hora 55 minutos");
    expect(formatDaysRecovered(0)).toBe("");
  });

  it("should handle negative minutes correctly", () => {
    expect(() => formatDaysRecovered(-60)).toThrow(
      "Negative days are not allowed"
    );
  });
});
