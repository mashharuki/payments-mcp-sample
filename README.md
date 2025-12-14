# payments-mcp-sample
payments-mcpを使ったサンプル実装です。

## 動かし方

```bash
bun install
```

環境変数ファイルの作成

```bash
cp .env.example .env
```

APIサーバーを起動

```bash
bun run dev
```

`sample.http`ファイルでAPIをテスト可能！

## 実行した例

```bash
Based on the latest AI news, give me a report on the top 3 up and coming tokens on Solana.
```

結果

```bash
✦ Based on my research, here is a report on three promising AI-related tokens on the Solana blockchain. These projects are leveraging Solana's high
  speed and low transaction costs to build innovative applications at the intersection of AI and cryptocurrency.

  1. Nosana (NOS)

  Nosana is building a decentralized GPU grid for AI inference workloads. As AI applications become more widespread, the demand for computational
  power, particularly from GPUs, has skyrocketed. Nosana aims to provide a more cost-effective and efficient solution by creating a distributed
  network of GPUs. This approach can help to democratize access to the computing resources needed to run complex AI models.

  2. io.net (IO)

  io.net is another project focused on decentralized computing, combining AI with what's known as Decentralized Physical Infrastructure (DePIN). The
  goal of io.net is to create a global network of computational resources that are accessible and affordable for AI and machine learning tasks. By
  aggregating underutilized resources, io.net aims to provide a scalable and cost-efficient alternative to centralized cloud providers.

  3. Synesis One (SNS)

  Synesis One is a decentralized AI data marketplace. High-quality data is essential for training and developing AI models, and Synesis One has
  created a platform where users can contribute data and developers can purchase it. By building on Solana, the platform can handle the large volume
  of transactions required for a global data marketplace efficiently. This creates a new economic model for data, where individuals can be rewarded
  for their contributions.

  ---

  Disclaimer: This report is for informational purposes only and should not be considered financial advice. The cryptocurrency market is highly
  volatile, and you should always do your own research before making any investment decisions.
```

```bash
Show me my wallet
```

```bash
Your wallet address is: 0x40aFD6b0F8a5ED3A679c8D3cf9A70EB2a0074116
```

```bash
Please tell me my wallet balance
```

```bash
Your wallet balance for USDC on the Base chain is 0.00 USDC.
```

## 参考文献
- [Payment MCP クイックスタート](https://docs.cdp.coinbase.com/payments-mcp/quickstart)
- [GitHub - Payment MCP](https://github.com/coinbase/payments-mcp)