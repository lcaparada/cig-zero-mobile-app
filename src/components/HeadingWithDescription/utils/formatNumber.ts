export const formatNumber = (num: number) => {
  return num < 10 ? String(num).padStart(2, "0") : String(num);
};
