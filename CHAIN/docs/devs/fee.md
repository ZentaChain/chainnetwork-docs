---
title: Fee
slug: /fee
---

# Fees on Chain Network

Chain Network employs a dual-layer fee structure to optimize both execution and security.

### L2 Fee

| **Aspect**              | **Details**                                                                                                           |
| :---------------------- | :-------------------------------------------------------------------------------------------------------------------- |
| **Calculation Formula** | `transaction_gas_price = l2_base_fee + l2_priority_fee`<br />`l2_execution_fee = transaction_gas_price * l2_gas_used` |
| **Ethereum Comparison** | Chain Network's L2 execution fees are significantly lower than Ethereum's fee structure.                              |

### L1 Fee

| **Aspect**       | **Details**                                                                                         |
| :--------------- | :-------------------------------------------------------------------------------------------------- |
| **Purpose**      | Cover costs for publishing transactions on the Ethereum blockchain.                                 |
| **Base Fee**     | Subject to short-term fluctuations, influenced by network congestion and previous block's base fee. |
| **Priority Fee** | User-set fee, advised to be kept as low as possible.                                                |

### Fee Calculation

| **Layer**                 | **Calculation Method**                         |
| :------------------------ | :--------------------------------------------- |
| **Layer 2 (L2)**          | Estimate using: `Gas price × Gas limit`        |
| **Layer 1 (L1)**          | Calculate using tools like `GasPriceOracle`.   |
| **Total Fee Computation** | Sum of L2 execution and L1 data/security fees. |

### Handling

| **Aspect**              | **Details**                                                                        |
| :---------------------- | :--------------------------------------------------------------------------------- |
| **Transaction Process** | Similar to Ethereum, with additional considerations for L2 and L1 fees.            |
| **Displaying Fees**     | Essential to show the total of both L2 and L1 fees for accurate cost estimation.   |
| **Error Prevention**    | Manage potential 'insufficient funds' errors by accounting for both types of fees. |
