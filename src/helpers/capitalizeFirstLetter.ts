export const capitalizeFirstLetter = (str: string) => {
  if (typeof str !== "string" || str.length === 0) return str;
  return str.trim().charAt(0).toUpperCase() + str.trim().slice(1).toLowerCase();
};
