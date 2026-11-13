// public/data/get-resume.json: resume-only content. Experiences and education
// come from their own files so the home page and /resume never drift apart.
export interface IResumeContact {
  label: string;
  href: string;
}

export interface ISkillGroup {
  group: string;
  items: string[];
}

export default interface IResume {
  title: string;
  location: string;
  contacts: IResumeContact[];
  summary: string;
  skills: ISkillGroup[];
}
