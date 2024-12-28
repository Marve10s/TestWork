// FAQ Item Types
export interface FAQItem {
  question: string;
  answer: string;
}

// Component Props Types
export interface FAQProps {
  questions: FAQItem[];
}

export interface FAQItemProps {
  item: FAQItem;
  index: number;
}

export interface FAQNavigationProps {
  className?: string;
}

// DOM Element Types
export type FAQButton = HTMLElement & {
  nextElementSibling: HTMLElement;
}
