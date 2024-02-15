import ILink from "./link";
import ITag from "./tag";

export default interface IProject {
  year: number;
  imgUrl: string;
  title: string;
  madeAt: string;
  href: string;
  description: string;
  links: ILink[];
  tags: ITag[];
}
