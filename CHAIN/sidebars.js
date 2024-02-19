// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    "intro",
    { type: "doc", id: "chain-networks" },
    {
      type: "category",
      label: "Development",
      items: [
        "devs/networks",
        "devs/fee",
        {
          type: "category",
          label: "Guides",
          items: [
            {
              type: "category",
              label: "Deploying a Smart Contract",
              items: [
                "guides/deploy-smart-contracts",
                // "guides/deploy-with-foundry",
                "guides/deploy-with-remix",
                "guides/deploy-with-thirdweb",
                // "guides/deploy-with-tenderly",
              ],
              collapsible: false,
              collapsed: true,
            },
            "guides/run-a-chain-node",
          ],
          collapsible: false,
          collapsed: true,
        },
      ],
      collapsible: false,
      collapsed: true,
    },
    {
      type: "category",
      label: "Tools",
      items: [
        "tools/blockexplorer",
        {
          type: "category",
          label: "Bridges Chain",
          items: ["tools/bridge-testnet", "tools/bridge-mainnet"],
          collapsible: false,
          collapsed: true,
        },
        "tools/faucets",
        "tools/node-providers",
        "tools/onramps",
        "tools/hardhat",
        "tools/web3",
      ],
      collapsible: false,
      collapsed: true,
    },
    {
      type: "category",
      label: "faq",
      items: [
        {
          type: "category",
          label: "Chain Network",
          items: ["faq/chain-general", "faq/chain-technical"],
          collapsible: true,
          collapsed: true,
        },
        {
          type: "category",
          label: "Bridge Chain",
          items: ["faq/bridge-overview"],
          collapsible: true,
          collapsed: true,
        },
        {
          type: "category",
          label: "Developer ",
          items: ["faq/developer-resources", "faq/developer-tools"],
          collapsible: true,
          collapsed: true,
        },
        {
          type: "category",
          label: "Ecosystem ",
          items: ["faq/ecosystem-partners", "faq/ecosystem-projects"],
          collapsible: true,
          collapsed: true,
        },
      ],
      collapsible: true,
      collapsed: false,
    },
    "contracts",
    "tokens",
    "terms",
    "privacy-policy",
    "cookie",
    "disclaimer",

    {
      type: "link",
      label: "Status",
      href: "https://zentachain.instatus.com/",
    },
  ],
};

export default sidebars;
