import { ITag, ILink } from ".";

export default interface IExperience {
  startDate: string;
  endDate: string;
  position: string;
  company: string;
  // Company website; makes the title a link when it is an absolute URL.
  href?: string;
  description: string;
  tags?: ITag[];
  links?: ILink[];
}
