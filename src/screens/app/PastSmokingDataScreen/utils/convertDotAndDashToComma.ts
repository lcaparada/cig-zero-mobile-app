export function convertDotAndDashToComma(value: string): string {
  return value.replace(/[.-]/g, ",");
}
