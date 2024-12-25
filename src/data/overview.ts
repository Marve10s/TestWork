export interface FeatureSlide {
  id: number;
  title: string;
  image: string;
  alt: string;
}

export interface ProductOverview {
  title: string;
  description: string;
  ctaText: string;
  features: FeatureSlide[];
}

export interface Testimonial {
  id: number;
  text: string;
  author: {
    name: string;
    position: string;
    avatar: string;
  };
  handle: string;
}

export interface TestimonialsSection {
  title: string;
  description: string;
  ctaText: string;
  testimonials: Testimonial[];
}

export const productOverview: ProductOverview = {
  title: "Product Overview",
  description: "Eu risus sed at turpis eu pharetra. Non turpis lectus eleifend nisl fringilla dui mollis lectus. Magna scelerisque ut et donec. Etiam non et eget ullamcorper. Accumsan odio lectus sed nibh",
  ctaText: "Explore all features",
  features: [
    {
      id: 0,
      title: "Easy to use.",
      image: "https://via.placeholder.com/330x720",
      alt: "Easy to use interface"
    },
    {
      id: 1,
      title: "Scan Papers.",
      image: "https://via.placeholder.com/330x720",
      alt: "Scan papers feature"
    },
    {
      id: 2,
      title: "Upload Documents.",
      image: "https://via.placeholder.com/330x720",
      alt: "Upload documents feature"
    },
    {
      id: 3,
      title: "Reading View.",
      image: "https://via.placeholder.com/330x720",
      alt: "Reading view feature"
    },
    {
      id: 4,
      title: "Folders.",
      image: "https://via.placeholder.com/330x720",
      alt: "Folders feature"
    },
    {
      id: 5,
      title: "Integrations",
      image: "https://via.placeholder.com/330x720",
      alt: "Integrations feature"
    }
  ]
};

export const testimonialsSection: TestimonialsSection = {
  title: "What customers are saying",
  description: "Eu risus sed at turpis eu pharetra. Non turpis lectus eleifend nisl fringilla dui mollis lectus. Magna scelerisque ut et donec. Etiam non et eget ullamcorper. Accumsan odio lectus sed nibh",
  ctaText: "See all reviews",
  testimonials: [
    {
      id: 1,
      text: "Non viverra vel luctus pellentesque lorem iaculis dictum congue tellus dolor congue eua tcu ac elit velit laoreet vel ac blandit ipsum egel velit felis magna sit.",
      author: {
        name: "Kierra Torff",
        position: "HR Manager",
        avatar: "/images/avatar.png"
      },
      handle: "@pitchperfect"
    },
    {
      id: 2,
      text: "Mattis dolor quam lectus ac. Vitae eget nunc morbi enim diam. Tempus augue elit posuere in amet cursus ac habitant. Tincidunt amet tristique donec consequat lorem massa. Turpis purus mattis consectetur nulla.",
      author: {
        name: "Kierra Torff",
        position: "HR Manager",
        avatar: "/images/avatar.png"
      },
      handle: "@pitchperfect"
    },
    {
      id: 3,
      text: "Non viverra vel luctus pellentesque lorem iaculis dictum congue tellus dolor congue eua tcu ac elit velit laoreet vel ac blandit ipsum egel velit felis.",
      author: {
        name: "Kierra Torff",
        position: "HR Manager",
        avatar: "/images/avatar.png"
      },
      handle: "@pitchperfect"
    }
  ]
}