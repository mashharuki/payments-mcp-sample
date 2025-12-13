import { McpClient  } from '@strands-agents/sdk'
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";

/**
 * Payment MCPサーバーを利用するためのMCPクライアントの設定
 */
const paymentTools = new McpClient({
  transport: new StdioClientTransport({
    command: "npx",
    args: ["@coinbase/payments-mcp@latest"],
  }),
});

export {
    paymentTools
}