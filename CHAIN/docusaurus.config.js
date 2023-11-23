import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Zentachain Devs",
  tagline: "The Scaled Telecom Blockchain",
  favicon: "img/favicon.ico",
  url: "https://devs.zentachain.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: "/",
  organizationName: "Zentachain GmbH",
  projectName: "devs-zentachain",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
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
          editUrl: "https://github.com/ZentaChain/devs-zentachain",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  plugins: [
    async function myPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/zentachain-social-card.jpg",
      navbar: {
        logo: {
          alt: "Zentachain Logo",
          src: "img/zentachain.png",
          href: "/docs/intro", // `siteConfig.baseUrl`.
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

      colorMode: {
        defaultMode: "dark",
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      footer: {
        style: "dark",
        copyright: `Copyright © ${new Date().getFullYear()} Zentachain`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      themes: ["@docusaurus/theme-search-algolia"],
    }),
};

export default config;
