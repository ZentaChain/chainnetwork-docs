---
title: Configuring Hardhat
slug: /tools/hardhat
description: Learn how to set up Hardhat for deploying smart contracts on the Chain network, including detailed instructions for mainnet, testnet, and local development environments.
keywords:
  - Hardhat
  - Chain Network
  - Smart Contract Development
  - Ethereum
  - Deployment
  - Mainnet
  - Testnet
  - Local Development
---

---

Hardhat is a comprehensive Ethereum development framework designed to facilitate the development lifecycle of smart contracts with features for editing, compiling, debugging, and deploying.

Integrate Hardhat seamlessly into your development workflow for the Chain network to leverage its robust toolset for smart contract creation and deployment.

Adapting [Hardhat](https://hardhat.org/) for the deployment of smart contracts on the Chain network involves adding Chain-specific configurations to your `hardhat.config.ts`. This setup enables deployment across different environments, including mainnet, testnet, and a local development network.

### Configurations

Adjust your project's `hardhat.config.ts` with the following network settings tailored for the Chain network:

```typescript
networks: {
   // Sepolia testnet
   "chain-sepolia": {
     url: "https://rpc-sepolia.zentachain.io",
     accounts: [process.env.PRIVATE_KEY as string],
     gasPrice: 1000000000,
   },
   // Local development
   "chain-local": {
     url: "http://localhost:8545",
     accounts: [process.env.PRIVATE_KEY as string],
     gasPrice: 1000000000,
   },
 },
 defaultNetwork: "chain-local",

```
---

