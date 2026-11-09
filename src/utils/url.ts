// Hostname of an absolute http(s) URL ("https://www.foo.com/x" -> "foo.com"),
// or null for relative/empty links such as "/" (the data uses "/" as a
// placeholder for "no link yet").
export const getExternalHostname = (href?: string): string | null => {
  if (!href || !/^https?:\/\//i.test(href)) return null;
  try {
    return new URL(href).hostname.replace(/^www\./, "");
  } catch {
    return null;
  }
};

export const isExternalUrl = (href?: string): boolean =>
  getExternalHostname(href) !== null;
