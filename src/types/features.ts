import type { ImageMetadata } from "astro";

// Voice Selection Types
export interface Voice {
  src: ImageMetadata;
  alt: string;
}

// Upload Options Types
export interface UploadOption {
  icon: string;
  label: string;
}

// Notes Types
export interface Note {
  text: string;
  subtext: string;
}

// Chrome Extension Types
export interface ChromeExtensionProps {
  defaultUrl: string;
  title: string;
  description: string;
}

// Scroll Row Types
export interface ScrollItem {
  icon: string;
  text: string;
}
