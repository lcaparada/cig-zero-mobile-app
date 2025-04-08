import { capitalizeFirstLetter } from "../capitalizeFirstLetter";

describe("capitalizeFirstLetter", () => {
  it("should capitalize the first letter of a string", () => {
    expect(capitalizeFirstLetter("hello")).toBe("Hello");
    expect(capitalizeFirstLetter("world")).toBe("World");
    expect(capitalizeFirstLetter("hello world")).toBe("Hello world");
    expect(capitalizeFirstLetter("HELLO")).toBe("Hello");
    expect(capitalizeFirstLetter("capitalize")).toBe("Capitalize");
  });

  it("should return an empty string if the input is empty", () => {
    expect(capitalizeFirstLetter("")).toBe("");
  });

  it("should remove leading and trailing spaces", () => {
    expect(capitalizeFirstLetter("  hello")).toBe("Hello");
    expect(capitalizeFirstLetter("world  ")).toBe("World");
  });

  it("should handle strings with special characters", () => {
    expect(capitalizeFirstLetter("@hello")).toBe("@hello");
    expect(capitalizeFirstLetter("#world")).toBe("#world");
  });
});
