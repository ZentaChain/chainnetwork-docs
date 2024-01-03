// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    "intro",

    { type: "doc", id: "chain-networks" },
    {
      type: "category",
      label: "Development",
      items: ["devs/networks", "devs/fee"],
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
          label: "Bridges Chain",
          collapsible: false,
          collapsed: true,
          items: ["tools/bridge-testnet", "tools/bridge-mainnet"],
        },
        "tools/faucets",
        "tools/node-providers",
        "tools/onramps",
      ],
    },
    {
      type: "doc",
      id: "contracts",
    },
    { type: "doc", id: "tokens" },
    { type: "doc", id: "terms" },
    { type: "doc", id: "privacy-policy" },
    // { type: "doc", id: "cookie-policy" },
    // { type: "doc", id: "disclaimer" },
    { type: "doc", id: "faq" },
    {
      type: "link",
      label: "Status",
      href: "https://zentachain.instatus.com/",
    },
  ],
};

export default sidebars;
