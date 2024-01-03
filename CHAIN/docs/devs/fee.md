---
title: Fee
slug: /fee
---

# Fees on Chain Network

Chain Network employs a dual-layer fee structure to optimize both execution and security.

## Layer 2 (L2) Execution Fee
- **Formula for Calculation**:
  - `transaction_gas_price = l2_base_fee + l2_priority_fee`
  - `l2_execution_fee = transaction_gas_price * l2_gas_used`
- **Ethereum Comparison**:
  - Chain Network's L2 execution fees are significantly lower compared to Ethereum's fee structure, offering a more cost-efficient alternative.

## Layer 1 (L1) Data/Security Fee
- **Purpose**:
  - These fees cover the costs associated with publishing transactions on the Ethereum blockchain.
- **Factors Influencing the Fee**:
  - **Base Fee**: Can fluctuate considerably in the short term, influenced by network congestion and the base fee of the preceding block.
  - **Priority Fee**: A user-set fee that should be minimized to reduce overall cost.

## Accurate Fee Calculation and Estimation
- **For Layer 2 (L2)**:
  - Estimate using the formula: `Gas price × Gas limit`.
- **For Layer 1 (L1)**:
  - Calculate using tools like `GasPriceOracle`.
- **Total Fee Computation**:
  - The total cost of a transaction is the sum of both L2 execution fees and L1 data/security fees.

## Transaction Handling and User Interface
- **Processing Transactions**:
  - The Chain Network processes transactions similarly to Ethereum but with additional considerations for both L2 and L1 fees.
- **Displaying Fees**:
  - It's crucial to present users with the combined total of L2 and L1 fees for accurate cost estimation.
- **Error Management**:
  - Anticipate and manage potential 'insufficient funds' errors by considering the total fee impact, encompassing both L2 and L1 charges.
