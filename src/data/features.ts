import type { Voice, UploadOption, Note, ChromeExtensionProps, ScrollItem } from '@/types/features';
import peterImg from "@assets/peter.png";
import annaImg from "@assets/anna.png";
import simonImg from "@assets/simon.png";
import amandaImg from "@assets/amanda.png";

// Voice data
export const voices: Voice[] = [
  { src: peterImg, alt: "Peter" },
  { src: annaImg, alt: "Anna" },
  { src: simonImg, alt: "Simon" },
  { src: amandaImg, alt: "Amanda" },
];

// Upload options data
export const uploadOptions: UploadOption[] = [
  { icon: 'link', label: 'Web Page' },
  { icon: 'document', label: 'Document' },
  { icon: 'email', label: 'Forward Email' },
  { icon: 'drive', label: 'Google Drive' },
  { icon: 'dropbox', label: 'Dropbox' },
  { icon: 'notion', label: 'Notion' },
  { icon: 'kindle', label: 'Kindle' },
  { icon: 'plus', label: 'and more...' }
];

// Notes data
export const notes: Note[] = [
  {
    text: "Key insights from the document",
    subtext: "The document discusses advanced classification techniques and their practical applications in machine learning."
  },
  {
    text: "Important methodology details",
    subtext: "The approach uses independent logistic classifiers for improved performance and scalability."
  },
  {
    text: "Future research directions",
    subtext: "Potential areas for improvement include optimization techniques and enhanced feature selection."
  }
];

// Chrome extension data
export const chromeExtension: ChromeExtensionProps = {
  defaultUrl: 'https://docs.ultralytics.com/pt/',
  title: 'Chrome extension',
  description: 'Install our Chrome extension for quick access to AI-powered document analysis and note-taking directly from your browser.'
};

// Scroll items data
export const scrollItems: ScrollItem[] = [
  { icon: "🚀", text: "Fast Processing" },
  { icon: "⭐", text: "High Quality" },
  { icon: "🌐", text: "Web Integration" },
  { icon: "🔍", text: "Smart Search" },
  { icon: "🌟", text: "AI Powered" },
  { icon: "🎯", text: "Precise Results" },
  { icon: "⚡", text: "Real-time Updates" }
];
