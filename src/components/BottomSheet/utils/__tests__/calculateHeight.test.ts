import { Dimensions } from "react-native";
import { calculateHeight } from "../calculateHeight";

describe("calculateHeight", () => {
  beforeAll(() => {
    jest.spyOn(Dimensions, "get").mockImplementation(() => ({
      height: 200,
      fontScale: 10,
      scale: 10,
      width: 200,
    }));
  });

  afterAll(() => {
    jest.clearAllMocks();
  });
  it("should return error if passed auto as param", () => {
    expect(() => calculateHeight("auto")).toThrow("auto isn't compatible");
  });

  it("should return number if pass number as param", () => {
    expect(calculateHeight(10)).toBe(10);
    expect(calculateHeight(43)).toBe(43);
    expect(calculateHeight(10.5)).toBe(10.5);
  });

  it("should return number if pass a percetange as param", () => {
    expect(calculateHeight("10%")).toBe(200 * (10 / 100));
    expect(calculateHeight("43%")).toBe(200 * (43 / 100));
    expect(calculateHeight("20%")).toBe(200 * (20 / 100));
  });
});
