export function swapDotComma(value: string): string {
  return value.replace(/[.,]/g, (match) => (match === "." ? "," : "."));
}
