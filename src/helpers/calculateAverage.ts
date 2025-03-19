export const calculateAverage = (value: string): number => {
  if (value.includes("_")) {
    const [first, second] = value.split("_").map(Number);
    return Math.round((first + second) / 2);
  }
  return Number(value);
};
