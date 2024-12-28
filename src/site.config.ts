interface NavItem {
  title: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: NavItem[];
}

interface SiteConfig {
  name: string;
  tagline: string;
  nav: {
    links: NavItem[];
    cta: NavItem;
  };
  footer: {
    sections: FooterSection[];
    bottomLinks: NavItem[];
  };
}

export const siteConfig: SiteConfig = {
  name: "Listening",
  tagline: "Listen to research papers, anywhere.",
  nav: {
    links: [
      {
        title: "Home",
        href: "/home",
      },
      {
        title: "Features",
        href: "/features",
      },
      {
        title: "Pricing",
        href: "/pricing",
      },
      {
        title: "Login",
        href: "/login",
      },
    ],
    cta: {
      title: "Try the app free for 3 days",
      href: "/try",
    },
  },
  footer: {
    sections: [
      {
        title: "Download",
        links: [
          { title: "iOS App", href: "#" },
          { title: "Android App", href: "#" },
          { title: "Chrome Extension", href: "#" },
          { title: "Web Login", href: "#" },
        ],
      },
      {
        title: "Product",
        links: [
          { title: "Listen to Papers", href: "#" },
          { title: "1-Click Note Taking", href: "#" },
          { title: "Free Trial", href: "#" },
          { title: "Affiliates", href: "#" },
        ],
      },
      {
        title: "Web",
        links: [
          { title: "Login", href: "#" },
          { title: "Settings", href: "#" },
          { title: "Upload PDF", href: "#" },
        ],
      },
      {
        title: "Support",
        links: [
          { title: "Contact Us", href: "#" },
          { title: "Help Center", href: "#" },
          { title: "Privacy", href: "#" },
          { title: "Terms of Service", href: "#" },
        ],
      },
    ],
    bottomLinks: [
      { title: "Privacy Policy", href: "#" },
      { title: "Terms of Service", href: "#" },
    ],
  },
};