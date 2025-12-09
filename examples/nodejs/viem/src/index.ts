import 'dotenv/config'
import { createPublicClient, http } from 'viem'
import { privateKeyToAccount } from 'viem/accounts'
import { hyperliquidEvmTestnet } from 'viem/chains'
import {
  setGlobalAdapter,
  SupportedChainId,
  TradingSdk,
  OrderKind,
  WRAPPED_NATIVE_CURRENCIES,
  hyperEvmTestnet,
  OrderSigningUtils,
  COW_PROTOCOL_SETTLEMENT_CONTRACT_ADDRESS,
  OrderStatus,
  OrderBookApi,
} from '@tentou-tech/cowprotocol-cow-sdk'
import dotenv from 'dotenv'
dotenv.config()
import { ViemAdapter } from '@cowprotocol/sdk-viem-adapter'

// =================== Config ===================
const RPC_URL = 'https://hyperliquid-testnet.core.chainstack.com/0b233cece9b7758165e2d75ed9c8605d/evm'
const PRIVATE_KEY = '' // private key here (0x...)
const DEFAULT_SELL_AMOUNT = 0.1 // WETH amount
// 1000000000000000n
// 1000000000000000000
// ===============================================================

async function main() {
  const chainId = 999

  if (!PRIVATE_KEY) {
    console.log('Set PRIVATE_KEY to run this example')
    process.exit(0)
  }

  const publicClient = createPublicClient({
    chain: hyperliquidEvmTestnet,
    transport: http(RPC_URL),
  })

  const account = privateKeyToAccount(PRIVATE_KEY as `0x${string}`)

  const adapter = new ViemAdapter({ provider: publicClient, signer: account })
  setGlobalAdapter(adapter)

  const sdk = new TradingSdk({
    chainId,
    appCode: 'CoWSdkNodeExampleViem',
    signer: account,
    env: 'prod',
  })

  const orderBookApi = new OrderBookApi({ chainId: SupportedChainId.HYPER_EVM })

  const userHistory = await orderBookApi.getTrades({
    owner: '0x1a7e7011627f93ced9b8cf39a4c60df78f2d21c6',
  })
  console.log('User history: ', userHistory)

  return

  // print the domain separator
  const domainSeparator = await OrderSigningUtils.getDomainSeparator(chainId)
  console.log('Domain separator: ', domainSeparator)

  // print the settlement contract address
  const settlementContract = COW_PROTOCOL_SETTLEMENT_CONTRACT_ADDRESS[chainId]
  console.log('Settlement contract: ', settlementContract)
  console.log('Chain ID: ', chainId)

  console.log('SDK: url: ', sdk.options.orderBookApi?.context.baseUrls?.[chainId])

  const WETH = WRAPPED_NATIVE_CURRENCIES[chainId]
  const USDC = { address: '0xb88339CB7199b77E23DB6E890353E22632Ba630f', decimals: 6 }
  const USDT = { address: '0xb8ce59fc3717ada4c02eadf9682a9e934f625ebb', decimals: 6 }

  const owner = account.address
  const amount = BigInt(Math.floor(DEFAULT_SELL_AMOUNT * 10 ** USDT.decimals)) // 0.1 USDT
  const slippageBps = 100

  console.log('Owner:', owner)
  console.log('Getting quote...')
  console.log('USDT: ', USDT)
  console.log('USDC: ', USDC)
  console.log('amount: ', amount)
  console.time('getQuote')
  const quoteAndPost = await sdk.getQuote({
    chainId,
    kind: OrderKind.SELL,
    owner,
    amount: amount.toString(),
    sellToken: USDC.address,
    sellTokenDecimals: USDC.decimals,
    buyToken: USDT.address,
    buyTokenDecimals: USDT.decimals,
    slippageBps,
  })
  console.timeEnd('getQuote')

  // console.log('Quote: ', quoteAndPost)
  // console.log('amountsAndCosts: ', quoteAndPost.quoteResults.amountsAndCosts)
  // console.log('quoteResponse: ', quoteAndPost.quoteResults.quoteResponse)

  console.log('Posting order...')
  // Wait for order to be filled
  console.log('Waiting for order to be filled...')
  console.time('orderFillTime')
  const res = await quoteAndPost.postSwapOrderFromQuote({})
  console.log('res: ', res.orderId)
  // console.log('Posted:', res)
  console.log('tx hash: ', res.txHash || 'No tx hash')

  let isFilled = false
  while (!isFilled) {
    const orderStatus = await sdk.getOrder({ orderUid: res.orderId })
    console.log('orderStatus: ', orderStatus.status)

    if (
      orderStatus.status == OrderStatus.FULFILLED ||
      orderStatus.status == OrderStatus.EXPIRED ||
      orderStatus.status == OrderStatus.CANCELLED
    ) {
      isFilled = true
      console.timeEnd('orderFillTime')
      console.log('Final order status: ', orderStatus.status)
    } else {
      // Wait 1 second before checking again
      await new Promise((resolve) => setTimeout(resolve, 1000))
    }
  }
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
