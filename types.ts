
export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  featured?: boolean;
  link?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location: string;
  achievements: string[];
}

export interface Testimonial {
  text: string;
  author: string;
  role: string;
  company: string;
  image: string;
}
