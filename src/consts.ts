// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

interface SocialLink {
  href: string;
  label: string;
}

interface Site {
  website: string;
  author: string;
  profile: string;
  desc: string;
  title: string;
  ogImage: string;
  lightAndDarkMode: boolean;
  postPerIndex: number;
  postPerPage: number;
  scheduledPostMargin: number;
  showArchives: boolean;
  showBackButton: boolean;
  editPost: {
    enabled: boolean;
    text: string;
    url: string;
  };
  dynamicOgImage: boolean;
  lang: string;
  timezone: string;
}

// Site configuration
export const SITE: Site = {
  website: "https://idsme.dev/",
  author: "Ids Achterhof",
  profile: "https://upload.wikimedia.org/wikipedia/commons/7/72/NIH_IT_Enterprise_Architecture_Framework.jpg",
  desc: "Enterprise Architect building scalable digital solutions. Bridging technology and business with pragmatic, innovative approaches.",
  title: "Ids Achterhof",
  ogImage: "ids-profile.jpg",
  lightAndDarkMode: true,
  postPerIndex: 10,
  postPerPage: 10,
  scheduledPostMargin: 15 * 60 * 1000,
  showArchives: false,
  showBackButton: false,
  editPost: {
    enabled: true,
    text: "Edit on GitHub",
    url: "https://github.com/idsme/ids.me/edit/main/",
  },
  dynamicOgImage: true,
  lang: "en",
  timezone: "Europe/Amsterdam",
};

export const SITE_TITLE = SITE.title;
export const SITE_DESCRIPTION = SITE.desc;

// Navigation links
export const NAV_LINKS: SocialLink[] = [
  {
    href: "/",
    label: "Blog",
  },
  {
    href: "/about",
    label: "About",
  },
];

// Social media links
export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: "https://github.com/idsme",
    label: "GitHub",
  },
  {
    href: "https://x.com/IdsAchterhof",
    label: "Twitter",
  },
  {
    href: "https://www.linkedin.com/in/idsachterhof/",
    label: "LinkedIn",
  },
  {
    href: "/rss.xml",
    label: "RSS",
  },
];

// Icon map for social media
export const ICON_MAP: Record<string, string> = {
  GitHub: "github",
  Twitter: "twitter",
  LinkedIn: "linkedin",
  RSS: "rss",
  Email: "mail",
};
