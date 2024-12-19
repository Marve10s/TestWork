interface NavItem {
  title: string;
  href: string;
}

interface SiteConfig {
  nav: {
    links: NavItem[];
    cta: NavItem;
  };
}

export const siteConfig: SiteConfig = {
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
};