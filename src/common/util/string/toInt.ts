export function toInt(s: string): number {
  if (!s.length || s === "e") {
    return 0;
  }
  return parseInt(s);
}
