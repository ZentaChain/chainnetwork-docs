---
title: Using Hardhat
slug: /guides/deploy-smart-contracts
description: "A guide on deploying a smart contract on the Chain test network using Remix IDE. Includes instructions for
setting up the environment, compiling, and deploying the smart contract."
keywords: ["Remix", "Remix IDE", "smart contract", "Chain", "Chain test network", "Chain testnet", "Solidity", "smart contract deployment", "deploy a smart contract", "write smart contract", "smart contract development", "online IDE"]
---

---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This section will guide you through deploying an MyToken a token smart contract (ERC-20) on the Chain test network using [Hardhat](https://hardhat.org/).

Hardhat is a developer tool that provides a simple way to deploy, test, and debug smart contracts.

---

## Objectives

By the end of this guide, you should be able to do the following:

- Setup Hardhat for Chain
- Create an ERC20 smart contract for Chain
- Compile a smart contract for Chain
- Deploy a smart contract to Chain
- Interact with a smart contract deployed on Chain

---

## Prerequisites

### Node v18+

This guide requires you have Node version 18+ installed.

- Download [Node v18+](https://nodejs.org/en/download/)

If you are using `nvm` to manage your node versions, you can just run `nvm install 18`.

### Coinbase Wallet

To deploy a smart contract, you'll need a web3 wallet. **Coinbase Wallet** is a user-friendly option that integrates seamlessly with numerous blockchain applications. Create your wallet by installing the Coinbase Wallet browser extension, enabling direct interaction with decentralized applications (DApps) from your browser.

- **Download**: [Coinbase Wallet Browser Extension](https://chrome.google.com/webstore/detail/coinbase-wallet-extension/hnfanknocfeofbddgcijnmhnfnkdnaad?hl=en)

### MetaMask Wallet

**MetaMask** is a widely adopted and easy-to-use web3 wallet. It provides users with the ability to manage their Ethereum and other blockchain network keys through a convenient browser extension or mobile app, facilitating secure interactions with DApps. MetaMask serves as a gateway to the decentralized web, offering tools for identity management and secure login to various platforms.

- **Download**: [MetaMask Browser Extension](https://metamask.io/download.html)

### Wallet funds

Deploying contracts to the blockchain requires a gas fee. Therefore, you will need to fund your wallet with ETH to cover those gas fees.

For this guide, you will be deploying a contract to the Chain Sepolia test network. You can fund your wallet with Chain Sepolia ETH using one of the faucets listed on the Chain [Network Faucets](https://devs-chain.zentachain.io/docs/tools/faucets) page.

---

## Creating a project

Before you can begin deploying smart contracts to Chain, you need to set up your development environment by creating a Node.js project.

To create a new Node.js project, run:

```bash
npm init --y
```

Next, you will need to install Hardhat and create a new Hardhat project

To install Hardhat, run:

```bash
npm install --save-dev hardhat
```

To create a new Hardhat project, run:

```bash
npx hardhat init
```

Select `Create a TypeScript project` then press _enter_ to confirm the project root.

Select `y` for both adding a `.gitignore` and loading the sample project. It will take a moment for the project setup process to complete.

---

## Configuring Hardhat with Chain

In order to deploy smart contracts to the Chain network, you will need to configure your Hardhat project and add the Chain network.

To configure Hardhat to use Chain, add Chain as a network to your project's `hardhat.config.ts` file:

```typescript
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

require("dotenv").config();

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.23",
  },
  networks: {
    // Sepolia Testnet
    "chain-sepolia": {
      url: "https://rpc-sepolia.zentachain.io",
      accounts: [process.env.WALLET_KEY as string],
      gasPrice: 1000000000,
    },
    // Local Dev
    "chain-local": {
      url: "http://localhost:8545",
      accounts: [process.env.WALLET_KEY as string],
      gasPrice: 1000000000,
    },
  },
  defaultNetwork: "hardhat",
};

export default config;
```

### Install Hardhat toolbox

The above configuration uses the `@nomicfoundation/hardhat-toolbox` plugin to bundle all the commonly used packages and Hardhat plugins recommended to start developing with Hardhat.

To install `@nomicfoundation/hardhat-toolbox`, run:

```bash
npm install --save-dev @nomicfoundation/hardhat-toolbox
```

### Loading environment variables

The above configuration also uses [dotenv](https://www.npmjs.com/package/dotenv) to load the `WALLET_KEY` environment variable from a `.env` file to `process.env.WALLET_KEY`. You should use a similar method to avoid hardcoding your private keys within your source code.

To install `dotenv`, run:

```bash
npm install --save-dev dotenv
```

Once you have `dotenv` installed, you can create a `.env` file with the following content:

```text
WALLET_KEY="<YOUR_PRIVATE_KEY>"
```

Substituting `<YOUR_PRIVATE_KEY>` with the private key for your wallet.

:::caution

`WALLET_KEY` is the private key of the wallet to use when deploying a contract. For instructions on how to get your private key from Coinbase Wallet, visit the [Coinbase Wallet documentation](https://docs.cloud.coinbase.com/wallet-sdk/docs/developer-settings#show-private-key). **It is critical that you do NOT commit this to a public repo**

:::

:::caution

`WALLET_KEY` is the private key of the wallet to use when deploying a contract. For instructions on how to export your private key from MetaMask, follow these steps:

1. Open MetaMask and log in to your wallet.
2. Click on the account icon at the top right corner, then select "Account Details".
3. Click on "Export Private Key", verify your password, and your private key will be displayed.

**It is critical that you do NOT commit this key to a public repo. Always keep your private key secure and never share it.**

:::

### Local Networks

You can run the Chain network locally, and deploy using it. If this is what you are looking to do, see the [repo containing the relevant Docker builds](https://github.com/ZentaChain/chain-node).

It will take a **very** long time for your node to sync with the network. If you get errors that the `nonce has already been used` when trying to deploy, you aren't synced yet.

For quick testing, such as if you want to add unit tests to the below MyToken contract, you may wish to leave the `defaultNetwork` as `'hardhat'`.

---

## Compiling the smart contract

Below is a simple MyToken smart contract (ERC-20) written in the Solidity programming language:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Permit.sol";

contract MyToken is ERC20, Ownable, ERC20Permit {
    constructor(address initialOwner)
        ERC20("MyToken", "MTK")
        Ownable(initialOwner)
        ERC20Permit("MyToken")
    {}

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}
```

The Solidity code above defines a smart contract named `MyToken`. The code uses the `ERC20` interface provided by the [OpenZeppelin Contracts library](https://docs.openzeppelin.com/contracts/5.x/) to create an Token smart contract. OpenZeppelin allows developers to leverage battle-tested smart contract implementations that adhere to official ERC standards.

To add the OpenZeppelin Contracts library to your project, run:

```bash
npm install --save @openzeppelin/contracts
```

In your project, delete the `contracts/Lock.sol` contract that was generated with the project and add the above code in a new file called `contracts/MyToken`. (You can also delete the `test/Lock.ts` test file, but you should add your own tests ASAP!).

To compile the contract using Hardhat, run:

```bash
npx hardhat compile
```

---

## Deploying the smart contract

Once your contract has been successfully compiled, you can deploy the contract to the Chain Sepolia test network.

To deploy the contract to the Chain Sepolia test network, you'll need to modify the `scripts/deploy.ts` in your project:

```typescript
import { ethers } from "hardhat";

async function main() {
  const erc = await ethers.deployContract("MyToken");

  await erc.waitForDeployment();

  console.log("MyToken Contract Deployed at " + erc.target);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
```

You'll also need testnet ETH in your wallet. See the [prerequisites](#prerequisites) if you haven't done that yet. Otherwise, the deployment attempt will fail.

Finally, run:

```bash
npx hardhat run scripts/deploy.ts --network chain-sepolia
```

The contract will be deployed on the Chain Sepolia test network. You can view the deployment status and contract by using a [block explorer](/tools/blockexplorer) and searching for the address returned by your deploy script. If you've deployed an exact copy of the ERC20 contract above, it will already be verified and you'll be able to read and write to the contract using the web interface.

:::info

If you'd like to deploy to mainnet, you'll modify the command like so:

```bash
npx hardhat run scripts/deploy.ts --network chain-mainnet
```

:::

Regardless of the network you're deploying to, if you're deploying a new or modified contract, you'll need to verify it first.

---

## Verifying the Smart Contract

If you want to interact with your contract on the block explorer, you, or someone, needs to verify it first. The above contract has already been verified, so you should be able to view your version on a block explorer already. For the remainder of this guide, we'll walk through how to verify your contract on Chain Sepolia testnet.

In `hardhat.config.ts`, configure Chain Sepolia as a custom network. Add the following to your `HardhatUserConfig`:

:::info

When verifying a contract with Blockscout on testnet (Sepolia), an API key is not required. You can leave the value as `PLACEHOLDER_STRING`.

:::

```typescript
// Hardhat expects etherscan here, even if you're using Blockscout.
etherscan: {
   apiKey: {
    "chain-sepolia": process.env.BLOCKSCOUT_KEY as string
   },
   customChains: [
     {
       network: "chain-sepolia",
       chainId: 1432,
       urls: {
        apiURL: "https://explorer-sepolia.zentachain.io/api",
        browserURL: "https://explorer-sepolia.zentachain.io"
       }
     }
   ]
 },
```

:::info

You can get your Blockscout API key from [here](https://explorer-sepolia.zentachain.io/account/api_key) after you sign up for an account.

:::

Now, you can verify your contract. Grab the deployed address and run:

```bash
npx hardhat verify --network chain-sepolia <deployed address>
```

You should see an output similar to:

```text
Nothing to compile
No need to generate any newer typings.
Successfully submitted source code for contract
contracts/MyToken: at 0x45212E5052de5521fE370AE5ec0abdeC6cD5a221ab
for verification on the block explorer. Waiting for verification result...

Successfully verified contract MyToken on Etherscan.
```

:::info

You can't re-verify a contract identical to one that has already been verified. If you attempt to do so, such as verifying the above contract, you'll get an error similar to:

```text
Error in plugin @nomiclabs/hardhat-etherscan: The API responded with an unexpected message.
Contract verification may have succeeded and should be checked manually.
Message: Already Verified
```

:::

Search for your contract on [Blockscout](https://explorer-sepolia.zentachain.io/) to confirm it is verified.

## Interacting with the Smart Contract

If you verified on Blockscout, you can use the `Read Contract` and `Write Contract` tabs to interact with the deployed contract. You'll need to connect your wallet first, by clicking the Connect button.

---
