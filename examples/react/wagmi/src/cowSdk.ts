import { SupportedChainId, TradingSdk } from '@tentou-tech/cowprotocol-cow-sdk'

export const tradingSdk = new TradingSdk({
  chainId: SupportedChainId.MAINNET, // Default chain, can be changed JIT
  appCode: 'CoWSdkReactExampleWagmi',
})
