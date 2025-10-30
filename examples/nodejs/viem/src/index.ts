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
} from '@cowprotocol/cow-sdk'
import { ViemAdapter } from '@cowprotocol/sdk-viem-adapter'

// =================== Config ===================
const RPC_URL = ''
const PRIVATE_KEY = '' // private key here (0x...)
const DEFAULT_SELL_AMOUNT = 0.01 // WETH amount
// ===============================================================

async function main() {
  const chainId = SupportedChainId.HYPER_EVM_TESTNET

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
    env: 'staging',
  })

  // print the domain separator
  const domainSeparator = await OrderSigningUtils.getDomainSeparator(chainId)
  console.log('Domain separator: ', domainSeparator)

  // print the settlement contract address
  const settlementContract = COW_PROTOCOL_SETTLEMENT_CONTRACT_ADDRESS[chainId]
  console.log('Settlement contract: ', settlementContract)
  console.log('Chain ID: ', chainId)

  console.log('SDK: url: ', sdk.options.orderBookApi?.context.baseUrls?.[chainId])

  const WETH = WRAPPED_NATIVE_CURRENCIES[chainId]
  const USDC = { address: '0xC003D79B8a489703b1753711E3ae9fFDFC8d1a82', decimals: 18 }

  const owner = account.address
  const amount = BigInt(Math.floor(DEFAULT_SELL_AMOUNT * 10 ** WETH.decimals)) // 0.1 WETH
  const slippageBps = 50

  console.log('Owner:', owner)
  console.log('Getting quote...')
  console.log('WETH: ', WETH)
  console.log('USDC: ', USDC)
  console.log('amount: ', amount)
  const quoteAndPost = await sdk.getQuote({
    chainId,
    kind: OrderKind.SELL,
    owner,
    amount: amount.toString(),
    sellToken: WETH.address,
    sellTokenDecimals: WETH.decimals,
    buyToken: USDC.address,
    buyTokenDecimals: USDC.decimals,
    slippageBps,
  })

  console.log('Quote: ', quoteAndPost)

  console.log('Posting order...')
  const res = await quoteAndPost.postSwapOrderFromQuote({})
  console.log('Posted:', res)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
