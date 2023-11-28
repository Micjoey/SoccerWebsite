export function formatDate(input: Date | string): string {
  // Convert input to a Date object if it's a string
  const date = typeof input === "string" ? new Date(input) : input;

  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = String(date.getFullYear());

  return `${month}-${day}-${year}`;
}
