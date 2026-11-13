import { ITag, ILink } from ".";

export default interface IExperience {
  startDate: string;
  endDate: string;
  position: string;
  company: string;
  // Company website; makes the title a link when it is an absolute URL.
  href?: string;
  description: string;
  // Side work: listed under its own heading on /resume, not in the job timeline.
  freelance?: boolean;
  // Resume bullets (shown on /resume only).
  highlights?: string[];
  tags?: ITag[];
  links?: ILink[];
}
