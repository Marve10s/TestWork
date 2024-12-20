import type { ImageMetadata } from "astro";
import peterImg from "@assets/peter.png";
import annaImg from "@assets/anna.png";
import simonImg from "@assets/simon.png";
import amandaImg from "@assets/amanda.png";

// Types
interface Voice {
  src: ImageMetadata;
  alt: string;
}

interface UploadOption {
  icon: string;
  label: string;
}

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
