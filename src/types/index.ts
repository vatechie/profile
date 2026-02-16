// Portfolio data types
export interface AboutMe {
  part1: string;
  part2: string;
}

export interface Social {
  github: string;
  linkedin: string;
  email: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  description: string;
  img: string;
  email: string;
  location: string;
  aboutMe: AboutMe;
  social: Social;
}

export interface Experience {
  title: string;
  company: string;
  link: string;
  period: string;
  description: string;
  technologies: string[];
}

export interface Education {
  degree: string;
  link: string;
  school: string;
  period: string;
  description: string;
}

export interface Skill {
  name: string;
  proficiency: number;
}

export interface SkillGroup {
  category: string;
  skills: Skill[];
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  github: string;
  demo: string;
}
