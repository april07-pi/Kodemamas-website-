export interface BlogArticle {
  id: string;
  title: string;
  author: string;
  category: string;
  readTime: string;
  date: string;
  excerpt: string;
  link?: string;
}

export interface Stats {
  learners: number;
  communitiesReached: number;
  activeBetaTesters: number;
  languagesSupported: number;
  hoursLearned: number;
  mentorsJoined: number;
  partnerOrganizations: number;
  scholarshipsAwarded: number;
}

export interface HeroContent {
  title: string;
  subtitle: string;
}

export interface CmsContent {
  hero: HeroContent;
  stats: Stats;
  blog: BlogArticle[];
  visitorCount: number;
}

export interface Inquiry {
  id: string;
  name: string;
  email: string;
  type: string;
  message: string;
  date: string;
}

export interface ChatMessage {
  id: string;
  sender: "user" | "tutor";
  text: string;
  timestamp: string;
  sources?: Array<{ title: string; uri: string }>;
}
