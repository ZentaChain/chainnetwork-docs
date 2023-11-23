// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    "intro",

    { type: "doc", id: "connect-chain" },
    {
      type: "category",
      label: "Development",
      items: ["devs/fee"],
      collapsible: false,
      collapsed: false,
    },
    {
      type: "category",
      label: "Tools",
      collapsible: false,
      collapsed: false,
      items: [
        "tools/blockexplorer",
        {
          type: "category",
          label: "Bridges",
          collapsible: true,
          collapsed: true,
          items: [
            // "tools/bridges-mainnet",
            "tools/bridge-testnet",
            "tools/bridge-mainnet",
            "tools/bridge-faq",
          ],
        },
        "tools/faucets",
      ],
    },
    {
      type: "doc",
      id: "contracts",
    },
    { type: "doc", id: "terms" },
    { type: "doc", id: "privacy-policy" },
    // { type: "doc", id: "cookie-policy" },
    // { type: "doc", id: "disclaimer" },
    // { type: "doc", id: "contact" },
    { type: "doc", id: "imprint" },
    { type: "doc", id: "faq" },
  ],
};

export default sidebars;
