import type { SliderElements, SliderState } from './types';

export class Slider {
  private elements: SliderElements;
  private state: SliderState;
  private autoPlayInterval!: ReturnType<typeof setInterval>;
  private readonly AUTO_PLAY_DELAY = 5000;

  constructor() {
    this.elements = {
      words: document.querySelectorAll<HTMLButtonElement>('.slider-words button'),
      slides: document.querySelectorAll<HTMLDivElement>('.slide'),
      progress: document.querySelector<HTMLDivElement>('.slider-progress')
    };

    this.state = {
      currentSlide: 0,
      totalSlides: this.elements.words.length,
      progressHeight: 100 / this.elements.words.length
    };

    this.init();
  }

  private updateWords(index: number): void {
    this.elements.words.forEach((word, i) => {
      if (i === index) {
        word.classList.add('active');
        word.classList.remove('text-gray-400');
      } else {
        word.classList.remove('active');
        word.classList.add('text-gray-400');
      }
    });
  }

  private updateSlides(index: number): void {
    this.elements.slides.forEach((slide, i) => {
      if (i === index) {
        slide.style.opacity = '1';
        slide.style.zIndex = '1';
      } else {
        slide.style.opacity = '0';
        slide.style.zIndex = '0';
      }
    });
  }

  private updateProgress(index: number): void {
    if (this.elements.progress) {
      this.elements.progress.style.height = `${this.state.progressHeight}%`;
      this.elements.progress.style.top = `${index * this.state.progressHeight}%`;
    }
  }

  public updateSlider(index: number): void {
    this.updateWords(index);
    this.updateSlides(index);
    this.updateProgress(index);
    this.state.currentSlide = index;
  }

  private startAutoPlay(): void {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
    }
    
    this.autoPlayInterval = setInterval(() => {
      const nextSlide = (this.state.currentSlide + 1) % this.state.totalSlides;
      this.updateSlider(nextSlide);
    }, this.AUTO_PLAY_DELAY);
  }

  private init(): void {
    // Add click handlers to words
    this.elements.words.forEach((word, index) => {
      word.addEventListener('click', () => {
        this.updateSlider(index);
        // Reset the auto-play timer when user clicks
        this.startAutoPlay();
      });
    });

    // Start initial auto-play
    this.startAutoPlay();
  }

  public destroy(): void {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
    }
  }
}
