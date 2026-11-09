// Company name to show after the role, or null when there is none.
// The data uses the literal "None" while between jobs.
export const displayCompany = (company?: string | null): string | null => {
  const value = company?.trim();
  if (!value || value.toLowerCase() === "none") return null;
  return value;
};
