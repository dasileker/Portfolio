export type WorkStatus = "completed" | "current" | "planned" | "historical";

export interface Experience {
  company: string;
  role: string;
  startDate: string;
  endDate?: string;
  current?: boolean;
  location?: string;
  description: string;
  highlights: string[];
  technologies: string[];
  category:
    | "quality-engineering"
    | "software-engineering"
    | "consulting"
    | "mentoring";
  logo?: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  subtitle: string;
  context: string;
  approach: string[];
  technologies: string[];
  visual: "risk" | "automation" | "api" | "performance" | "pipeline";
  company?: string;
  year?: string;
  confidential: boolean;
  status: WorkStatus;
}

export interface Certification {
  name: string;
  issuer: string;
  issued?: string;
  credentialUrl?: string;
  category: string;
  logo?: string;
}

export interface SkillGroup {
  title: string;
  primary: string[];
  supporting?: string[];
  context: string;
}

export interface Project {
  title: string;
  year: string;
  description: string;
  technologies: string[];
  href: string;
}
