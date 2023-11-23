---
title: Fee
slug: /fee
---

# Fees on CHAIN

### L2 Execution Fee
- **Calculation**: `transaction_gas_price = l2_base_fee + l2_priority_fee` and `l2_execution_fee = transaction_gas_price * l2_gas_used`.
- **Similarity to Ethereum**: Lower gas prices compared to Ethereum's gas fee system.

### L1 Data/Security Fee
- **Integration with Ethereum**: Covers the cost of publishing transactions on Ethereum, typically higher due to Ethereum's gas costs.
- **Base Fee Volatility**: Can vary significantly in a short time, influenced by network congestion and previous block's base fee.
- **Priority Fee**: Directly paid by the user, recommended to be as low as possible.

### Fee Calculation and Estimation
- **L2 Fee**: Estimated by gas price times gas limit.
- **L1 Fee**: Calculated using tools like `GasPriceOracle`.
- **Total Fee**: Combination of L2 execution and L1 data fees.

### Sending Transactions and Software Development Considerations
- **Process**: Similar to Ethereum, but requires accounting for both L2 and L1 fees.
- **Displaying Fees to Users**: Important to show the sum of both L2 and L1 fees for accurate cost estimation.
- **Error Prevention**: Manage potential insufficient funds errors by accounting for both fee types.

### Additional Information
For detailed insights and calculations, visit the [Op Developer Documentation](https://community.optimism.io/docs/developers/build/transaction-fees/).
