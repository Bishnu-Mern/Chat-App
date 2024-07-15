export function formatDate(date: Date): string {
  return date.toLocaleDateString();
}

export function truncateString(str: string, length: number): string {
  if (str.length > length) {
    return str.substring(0, length) + "...";
  }
  return str;
}

export const splitCamelCase = (str: string): string => {
  return str.replace(/([a-z])([A-Z])/g, '$1 $2');
};
