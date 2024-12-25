export interface SliderElements {
  words: NodeListOf<HTMLButtonElement>;
  slides: NodeListOf<HTMLDivElement>;
  progress: HTMLDivElement | null;
}

export interface SliderState {
  currentSlide: number;
  totalSlides: number;
  progressHeight: number;
}
