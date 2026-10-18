export interface PackageOption {
  id: '399' | '699' | '1990' | '4990';
  title: string;
  price: string;
  numericPrice: number;
  featured?: boolean;
  badge?: string;
  features: string[];
}

export interface ModuleItem {
  id: number;
  part: string;
  topic: string;
  details: string;
  lessons: string[];
  duration: string;
  highlight: string;
  badge?: string;
}

export interface RegistrationData {
  fullName: string;
  phone: string;
  industry: string;
  question?: string;
  businessField?: string;
  note?: string;
  registeredAt?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface TestimonialItem {
  name: string;
  channel: string;
  views: string;
  avatar: string;
  quote: string;
  role: string;
}
