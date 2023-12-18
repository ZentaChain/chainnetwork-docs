---
title: Fee
slug: /fee
---

# Fees on CHAIN

## L2 Execution Fee
- **Calculation Method**:
  - Formula: `transaction_gas_price = l2_base_fee + l2_priority_fee`
  - Execution Fee: `l2_execution_fee = transaction_gas_price * l2_gas_used`.
- **Comparison with Ethereum**: 
  - Notably lower gas prices than Ethereum's fee system.

## L1 Data/Security Fee
- **Integration Aspect**:
  - Purpose: Covers costs for publishing transactions on Ethereum.
  - Note: Typically higher due to Ethereum's gas costs.
- **Base Fee Volatility**:
  - Subject to significant short-term fluctuations.
  - Influenced by network congestion and previous block's base fee.
- **Priority Fee**:
  - Paid directly by the user.
  - Recommendation: Keep as low as possible.

## Fee Calculation and Estimation
- **L2 Fee**:
  - Estimation Method: Gas price multiplied by gas limit.
- **L1 Fee**:
  - Calculation Tool: Use of tools like `GasPriceOracle`.
- **Total Fee**:
  - Combination: Sum of L2 execution and L1 data fees.

## Transactions and Software
- **Transaction Process**:
  - Similar to Ethereum, with the addition of L2 and L1 fees.
- **Displaying Fees to Users**:
  - Importance: Show the total of both L2 and L1 fees for accurate cost estimation.
- **Error Prevention**:
  - Strategy: Manage potential insufficient funds errors by accounting for both types of fees.

