export default interface IEducation {
  // Short label shown in the left column, e.g. "College" or "Certificate".
  kind: string;
  title: string;
  // Absolute URL; makes the title a link.
  href?: string;
  description?: string;
}
