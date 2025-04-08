import { extractUnitFrequency } from "../extractUnitFrequency";

describe("extractUnitFrequency", () => {
  it("should extract the unit frequency from a string", () => {
    expect(extractUnitFrequency("P2D")).toBe("2 dias");
    expect(extractUnitFrequency("P1W")).toBe("1 semana");
    expect(extractUnitFrequency("P3M")).toBe("3 meses");
    expect(extractUnitFrequency("P5Y")).toBe("5 anos");
  });

  it("should throw an error for invalid formats", () => {
    expect(() => extractUnitFrequency("2D")).toThrow(
      "Invalid format. It must start with 'P' and have at least 3 characters."
    );
    expect(() => extractUnitFrequency("P2")).toThrow(
      "Invalid format. It must start with 'P' and have at least 3 characters."
    );
  });
});
