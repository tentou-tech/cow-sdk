import { ChainInfo, SupportedChainId } from '../types'
import { nativeCurrencyTemplate } from '../../constants/tokens'
import { RAW_CHAINS_FILES_PATH } from '../../constants/paths'

const hyperEvmTestnetLogo = `${RAW_CHAINS_FILES_PATH}/images/hyper-evm-testnet-logo.svg`

/**
 * Hyper EVM Testnet chain info.
 *
 * Hyper EVM testnet is a testnet for Hyper EVM, providing EVM compatibility
 * for testing and development purposes.
 */
export const hyperEvmTestnet: ChainInfo = {
  id: SupportedChainId.HYPER_EVM_TESTNET,
  label: 'Hyper EVM Testnet',
  eip155Label: 'Hyper EVM Testnet',
  nativeCurrency: {
    ...nativeCurrencyTemplate,
    chainId: SupportedChainId.HYPER_EVM_TESTNET,
    name: 'Hyper',
    symbol: 'HYPE',
    logoUrl: hyperEvmTestnetLogo,
  },
  addressPrefix: 'hyper',
  isTestnet: true,
  isUnderDevelopment: true,
  contracts: {
    multicall3: {
      address: '0xDB2b93F421C5D1b3Dc5763B841652aA68Fa9A373',
      blockCreated: 1, // Placeholder - update with actual block number
    },
  },
  rpcUrls: {
    default: {
      http: ['http://34.146.110.209:3001/evm'],
    },
  },
  color: '#FF6B35',
  logo: { light: hyperEvmTestnetLogo, dark: hyperEvmTestnetLogo },

  website: {
    name: 'Hyper EVM',
    url: 'https://hyperliquid.xyz',
  },
  docs: {
    name: 'Hyper EVM Docs',
    url: 'https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/hyperevm',
  },
  blockExplorer: {
    name: 'Hyper EVM Explorer',
    url: 'https://explorer.hyperliquid-testnet.xyz', // Placeholder - update with actual explorer URL
  },
}
