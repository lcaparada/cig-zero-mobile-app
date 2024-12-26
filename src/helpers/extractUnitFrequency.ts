export function extractUnitFrequency(period: string): string {
  if (!period.startsWith("P") || period.length < 3) {
    throw new Error(
      "Invalid format. It must start with 'P' and have at least 3 characters."
    );
  }

  const unit = parseInt(period.slice(1, -1), 10);
  const frequencyChar = period.charAt(period.length - 1);

  const frequencyMapping: { [key: string]: string } = {
    W: "semana",
    M: "mês",
    Y: "ano",
  };

  if (!(frequencyChar in frequencyMapping)) {
    throw new Error(
      "Invalid frequency. Use 'W' for weeks, 'M' for months, or 'Y' for years."
    );
  }

  return `${unit} ${frequencyMapping[frequencyChar]}`;
}
