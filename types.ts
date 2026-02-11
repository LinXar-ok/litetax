export interface FAQItem {
  question: string;
  answer: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export enum PurchaseStatus {
  IDLE = 'IDLE',
  REDIRECTING = 'REDIRECTING',
}