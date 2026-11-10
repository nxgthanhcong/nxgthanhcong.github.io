// Newest first by year. Array.prototype.sort is stable, so items from the
// same year keep their order in the JSON (put the one to feature first).
export const sortByYearDesc = <T extends { year: number }>(items: T[]): T[] =>
  [...items].sort((a, b) => b.year - a.year);
