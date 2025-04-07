import { formatMinutes } from "../formatMinutes";

describe("formatMinutes", () => {
  it("should format minutes into days, hours, and minutes correctly", () => {
    expect(formatMinutes(1440)).toBe("1 dia");
    expect(formatMinutes(1500)).toBe("1 dia 1 hora");
    expect(formatMinutes(60)).toBe("1 hora");
    expect(formatMinutes(120)).toBe("2 horas");
    expect(formatMinutes(61)).toBe("1 hora 1 minuto");
    expect(formatMinutes(121)).toBe("2 horas 1 minuto");
    expect(formatMinutes(0)).toBe("");
  });

  it("should format minutes into hours and minutes correctly", () => {
    expect(formatMinutes(90)).toBe("1 hora 30 minutos");
    expect(formatMinutes(180)).toBe("3 horas");
    expect(formatMinutes(45)).toBe("45 minutos");
    expect(formatMinutes(150)).toBe("2 horas 30 minutos");
    expect(formatMinutes(30)).toBe("30 minutos");
  });

  it("should format minutes into days, hours, and minutes correctly when days are present", () => {
    expect(formatMinutes(2880)).toBe("2 dias");
    expect(formatMinutes(3000)).toBe("2 dias 2 horas");
  });

  it("should format minutes into hours and minutes correctly when days are not present", () => {
    expect(formatMinutes(1200)).toBe("20 horas");
    expect(formatMinutes(1260)).toBe("21 horas");
    expect(formatMinutes(1300)).toBe("21 horas 40 minutos");
    expect(formatMinutes(1400)).toBe("23 horas 20 minutos");
  });

  it("should handle negative minutes correctly", () => {
    expect(() => formatMinutes(-60)).toThrow(
      "Negative minutes are not allowed"
    );
  });
});
