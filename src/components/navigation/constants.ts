export const LTM_PAGES: string[] = [
  "navigation",
  "geography",
  "databases",
  "external_feeds",
  // 'customer_care',
  // 'customer_care2',
  "current_lil_database",
  // 'geography',
  "login",
];

export const SIDE_NAV_LINKS: any = {
  navigation: [
    {
      title: "Main Menu",
      icon: "view-module",
      routeName: "ltm",
    },
    {
      title: "My Preferences",
      icon: "dfw:settings",
      routeName: "preferences",
    },
    {
      title: "Reports",
      icon: "dfw:audit",
      routeName: "reports",
    },
    {
      title: "User Guides",
      icon: "supervisor-account",
      routeName: "guides",
    },
    {
      title: "Glossary of Terms",
      icon: "list",
      routeName: "glossary",
    },
    {
      title: "Exit",
      icon: "dfw:arrow-long-left",
      routeName: "login",
    },
  ],
  geography: [
    {
      title: "States",
      icon: "language",
      routeName: "states",
    },
    {
      title: "Counties",
      icon: "room",
      routeName: "counties",
    },
    {
      title: "Zip Codes",
      icon: "code",
      routeName: "zip_codes",
    },
    {
      title: "DMAs",
      icon: "dns",
      routeName: "dmd",
    },
  ],
  customer_care: [
    {
      title: "DMA Offers",
      icon: "",
      routeName: "external_feeds",
    },
    {
      title: "DMA Messages",
      icon: "",
      routeName: "databases",
    },
    {
      title: "Pro Messages",
      icon: "",
      routeName: "external_feeds",
    },
  ],
  customer_care2: [
    {
      title: "DMA Offers",
      icon: "",
      routeName: "external_feeds",
    },
    {
      title: "DMA Messages",
      icon: "",
      routeName: "databases",
    },
    {
      title: "Pro Messages",
      icon: "",
      routeName: "external_feeds",
    },
  ],
  databases: [
    {
      title: "IT LILN Stage Tables",
      icon: "credit-card",
      routeName: "databases",
    },
  ],
  external_feeds: [
    {
      title: "TMS Stations",
      icon: "",
      routeName: "external_feeds",
    },
  ],
  current_lil_database: [
    {
      title: "Staging",
      icon: "",
      routeName: "current_lil_database",
    },
  ],
};
