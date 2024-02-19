---
title: Running Chain Node
slug: /guides/run-a-chain-node
description: A guide for setting up and running a a single Chain Node.
keywords:
  [
    Chain Node setup,
    running a node,
    Chain node,
    run a Chain node,
    hardware requirements,
    node synchronization,
    node snapshots,
    Chain chain,
    Chain blockchain,
    Chain network,
    node deployment,
    Ethereum node,
  ]
---

---

Dive into the world of blockchain by setting up your Chain Node. This guide aims to equip you with the knowledge to deploy and synchronize a Chain node effectively.

### Objectives

Upon completion, you'll master:

- Deploying your own Chain node.
- Synchronizing the node with the network.

### Considerations

**Running a node is a commitment**—requiring time, substantial computing resources, and potentially incurring costs. Consider your needs carefully. If you're exploring or need a quick start, our free RPC endpoints are a hassle-free alternative:

- **Testnet (Sepolia)**: `https://rpc-sepolia.zentachain.io`

> **Note:** Our RPC endpoints are rate-limited. They're perfect for development but might not suit production needs.

### Hardware

To ensure a smooth operation, your setup should meet the following:

- **Memory:** Minimum of 16 GB RAM.
- **Storage:** SSD with at least 2 TB available space.

> **Tip:** Using Amazon Elastic Block Store (EBS)? Verify that the disk read speeds are compatible with the rapid pace of block additions, especially during the initial sync phase, to prevent any latency issues.

### Software

- **Docker Proficiency:** Familiarity with [Docker](https://www.docker.com/) and its setup on your system is assumed.
- **Ethereum L1 RPC URL:** Access to an Ethereum L1 full node RPC URL is essential, whether self-hosted or via a third-party provider.

## Steps

1. **Repository Cloning:** Start by cloning the Chain Node repository: [GitHub](https://github.com/ZentaChain/chain-node).
2. **Configuration:** Ensure access to an Ethereum L1 full node RPC URL (excluding Chain Network). Configure `OP_NODE_L1_ETH_RPC` in your `.env.*` file for `docker-compose`. The L1 node must be fully synchronized for the Chain node to sync successfully.
3. **Environment Setup:** In `docker-compose.yml`, uncomment your network's corresponding line (`.env.sepolia`) under `env_file`.
4. **Launch:** Execute `docker compose up`. Verify functionality with:

```bash
curl -d '{"id":0,"jsonrpc":"2.0","method":"eth_getBlockByNumber","params":["latest",false]}' \
-H "Content-Type: application/json" -X POST http://localhost:8545
```

:::caution

Syncing your node may take **days** and will consume a vast amount of your requests quota. Be sure to monitor usage and up your plan if needed.

:::

### Syncing

You can monitor the progress of your sync with:

```bash
echo "Latest synced block is behind by: $((($(date +%s)-$( \
curl -d '{"id":0,"jsonrpc":"2.0","method":"optimism_syncStatus"}' \
-H "Content-Type: application/json" -X POST http://localhost:7545 | \
jq -r .result.unsafe_l2.timestamp))/60)) minutes."
```

You'll also know that the sync hasn't completed if you get `Error: nonce has already been used` if you try to deploy using your node.

---

[docker]: https://www.docker.com/
[chain node]: https://github.com/ZentaChain/chain-node
[repo]: https://github.com/ZentaChain/chain-node
[partners]: /tools/node-providers