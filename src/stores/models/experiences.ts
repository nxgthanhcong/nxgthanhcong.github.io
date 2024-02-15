import { ITag, ILink } from ".";

export default interface IExperience {
  startDate: string;
  endDate: string;
  position: string;
  company: string;
  description: string;
  tags: ITag[];
  links?: ILink[];
}
