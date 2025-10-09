export type LoginSchemaType = {
  email: string;
  password: string;
};
export interface Blog {
  id: number;
  title: string;
  content: string;
  excerpt: string;
  slug: string;
  published: boolean;
  featured: boolean;
  thumbnail: string | null;
  tags: string[];
  metaTitle: string | null;
  metaDescription: string | null;
  readingTime: number;
  createdAt: string;
  updatedAt: string;
  author: {
    id: number;
    name: string;
  };
}

export interface Project {
  id: number;
  title: string;
  description: string;
  shortDesc: string;
  thumbnail: string | null;
  images: string[];
  technologies: string[];
  features: string[];
  liveUrl: string | null;
  githubUrl: string | null;
  projectUrl: string | null;
  status: "IN_PROGRESS" | "COMPLETED" | "ARCHIVED";
  featured: boolean;
  order: number;
  createdAt: string;
  updatedAt: string;
}

export interface AboutMe {
  id: number;
  name: string;
  title: string;
  bio: string;
  email: string;
  phone: string | null;
  location: string | null;
  website: string | null;
  profileImage: string | null;
  resume: string | null;
  linkedin: string | null;
  github: string | null;
  twitter: string | null;
  instagram: string | null;
  skills: Skill[];
  experience: Experience[];
  education: Education[];
}

export interface Skill {
  name: string;
  level: number;
  category: string;
}

export interface Experience {
  company: string;
  position: string;
  startDate: string;
  endDate: string | null;
  description: string;
  current: boolean;
}

export interface Education {
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  description: string | null;
}

export interface DashboardStats {
  totalBlogs: number;
  publishedBlogs: number;
  totalProjects: number;
  featuredProjects: number;
  totalViews: number;
}

export interface Activity {
  id: number;
  type: string;
  description: string;
  timestamp: string;
}

export interface QuickAction {
  id: string;
  title: string;
  description: string;
  action: string;
  icon: string;
}
