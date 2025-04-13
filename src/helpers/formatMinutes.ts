export function formatMinutes(minutes: number): string {
  if (minutes < 0) throw new Error("Negative minutes are not allowed");

  const totalMinutes = minutes % 1 !== 0 ? Math.round(minutes * 1440) : minutes;

  const days = Math.floor(totalMinutes / 1440);
  const hours = Math.floor((totalMinutes % 1440) / 60);
  const mins = totalMinutes % 60;

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
