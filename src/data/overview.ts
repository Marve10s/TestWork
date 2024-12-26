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
  description: "Eu risus sed at turpis eu pharetra. Non turpis lectus eleifend nisl fringilla dui mollis lectus. Magna scelerisque ut et donec.Etiam non et eget ullamcorper. Accumsan odio lectus sed nibh ",
  ctaText: "See all reviews",
  testimonials: [
    {
      id: 1,
      text: "Using @cascade has completely transformed how we write code. The AI assistance is incredibly intuitive! Using @cascade has completely transformed how we write code. The AI assistance is incredibly intuitive!",
      author: {
        name: "Sarah Chen",
        position: "Senior Developer at TechCorp",
        avatar: "https://randomuser.me/api/portraits/women/1.jpg"
      }
    },
    {
      id: 2,
      text: "Using @cascade has completely transformed how we write code. The AI assistance is incredibly intuitive! Using @cascade has completely transformed how we write code. The AI assistance is incredibly intuiti Using @cascade has completely transformed how we write code. The AI assistance is incredibly intuitive! Using @cascade has completely transformed how we write code. The AI assistance is incredibly intuiti ",
      author: {
        name: "Michael Rodriguez",
        position: "Full Stack Engineer",
        avatar: "https://randomuser.me/api/portraits/men/2.jpg"
      }
    },
    {
      id: 3,
      text: "Switched from @copilot to @codeium and never looked back. The speed and accuracy are unmatched!",
      author: {
        name: "Emma Wilson",
        position: "Lead Developer",
        avatar: "https://randomuser.me/api/portraits/women/3.jpg"
      }
    },
    {
      id: 4,
      text: "As a team lead, @cascade has significantly improved our code review process. @codeium's suggestions are always spot on. @codeium's enterprise features have revolutionized how our entire development team collaborates.",
      author: {
        name: "James Thompson",
        position: "Tech Lead",
        avatar: "https://randomuser.me/api/portraits/men/4.jpg"
      }
    },
    {
      id: 5,
      text: "The way @cascade handles complex refactoring tasks is incredible. It's like having an expert pair programmer always available. @codeium's enterprise features have revolutionized how our entire development team collaborates.",
      author: {
        name: "Lisa Park",
        position: "Software Architect",
        avatar: "https://randomuser.me/api/portraits/women/5.jpg"
      }
    },
    {
      id: 6,
      text: "Moving from @intellij to @vscode with @codeium was the best decision for our team's productivity.",
      author: {
        name: "David Miller",
        position: "Backend Developer",
        avatar: "https://randomuser.me/api/portraits/men/6.jpg"
      }
    },
    {
      id: 7,
      text: "The AI capabilities of @cascade are mind-blowing. It understands context better than any other tool I've used. @Ibrahim",
      author: {
        name: "Anna Kowalski",
        position: "Frontend Developer",
        avatar: "https://randomuser.me/api/portraits/women/7.jpg"
      }
    },
    {
      id: 8,
      text: "@codeium's enterprise features have revolutionized how our entire development team collaborates. @codeium's enterprise features have revolutionized how our entire development team collaborates. @codeium's enterprise features have revolutionized how our entire development team collaborates. ",
      author: {
        name: "Tom Anderson",
        position: "DevOps Engineer",
        avatar: "https://randomuser.me/api/portraits/men/8.jpg"
      }
    }
  ]
};