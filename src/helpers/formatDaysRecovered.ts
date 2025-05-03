export function formatDaysRecovered(daysRecovered: number): string {
  if (daysRecovered < 0) throw new Error("Negative days are not allowed");

  const totalMinutesRecovered = daysRecovered * 1440;
  const days = Math.floor(totalMinutesRecovered / 1440);
  const hours = Math.floor((totalMinutesRecovered % 1440) / 60);
  const mins = Math.floor(totalMinutesRecovered % 60);
  const parts: string[] = [];
  if (days > 0) {
    parts.push(`${days} dia${days > 1 ? "s" : ""}`);
    if (hours > 0) parts.push(`${hours} hora${hours > 1 ? "s" : ""}`);
  } else {
    if (hours > 0) parts.push(`${hours} hora${hours > 1 ? "s" : ""}`);
    if (mins > 0) parts.push(`${mins} minuto${mins > 1 ? "s" : ""}`);
  }
  return parts.join(" ");
}
