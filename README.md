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

## 参考文献
- [Payment MCP クイックスタート](https://docs.cdp.coinbase.com/payments-mcp/quickstart)
- [GitHub - Payment MCP](https://github.com/coinbase/payments-mcp)