// Feature Slide Types
export interface FeatureSlide {
  id: number;
  title: string;
  image: string | ImageMetadata;
  alt: string;
}

// Product Overview Types
export interface ProductOverview {
  title: string;
  description: string;
  ctaText: string;
  features: FeatureSlide[];
}



// Testimonial Types
export interface Testimonial {
  id: number;
  text: string;
  author: {
    name: string;
    position: string;
    avatar: string;
  };
}

// Testimonials Section Types
export interface TestimonialsSection {
  title: string;
  description: string;
  ctaText: string;
  testimonials: Testimonial[];
}

// Component Props Types
export interface OverviewHeaderProps {
  title: string;
  description: string;
  ctaText: string;
}

export interface OverviewSliderProps {
  features: FeatureSlide[];
}

export interface OverviewTestimonialsProps {
  title: string;
  description: string;
  testimonials: Testimonial[];
}
