import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Zentanetwork",
  tagline: "The Scaled Telecom Blockchain",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://your-docusaurus-site.example.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: "/",
  organizationName: "Zentachain GmbH",
  projectName: "zentanetwork-docs",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          editUrl: "https://github.com/ZentaChain/docs-zentanetwork",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        // title: "Zentanetwork", // Only used if no `logo` image is provided
        logo: {
          alt: "Zentachain Logo",
          src: "img/logo.svg",
          href: "https://zentachain.io/", // `siteConfig.baseUrl`.
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Documentation",
          },
          {
            type: "dropdown",
            label: "Community",
            position: "right",
            items: [
              {
                label: "Telegram",
                href: "https://t.me/ZentachainOfficialChat",
              },
              {
                label: "Discord",
                href: "https://discord.com/invite/TR5bv3e8Ny",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/zentachain",
              },
            ],
          },
          {
            href: "https://github.com/zentachain",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      // colorMode: {
      //   defaultMode: "dark",
      //   disableSwitch: false,
      //   respectPrefersColorScheme: false,
      // },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/docs/intro",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Zentachain`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
