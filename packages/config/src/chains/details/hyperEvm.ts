import { ChainInfo, SupportedChainId } from '../types'
import { nativeCurrencyTemplate } from '../../constants/tokens'
import { RAW_CHAINS_FILES_PATH } from '../../constants/paths'

const hyperEvmLogo = `${RAW_CHAINS_FILES_PATH}/images/hyper-evm-logo.svg`

/**
 * Hyper EVM chain info.
 *
 * Hyper EVM testnet is a testnet for Hyper EVM, providing EVM compatibility
 * for testing and development purposes.
 */
export const hyperEvm: ChainInfo = {
  id: SupportedChainId.HYPER_EVM,
  label: 'Hyper EVM',
  eip155Label: 'Hyper EVM',
  nativeCurrency: {
    ...nativeCurrencyTemplate,
    chainId: SupportedChainId.HYPER_EVM,
    name: 'Hyper',
    symbol: 'HYPE',
    logoUrl: hyperEvmLogo,
  },
  addressPrefix: 'hyper',
  isTestnet: true,
  isUnderDevelopment: true,
  contracts: {
    multicall3: {
      address: '0xD86d0F9419FfE3c81dAa7621ec1809127e7Da315',
      blockCreated: 11710,
    },
  },
  rpcUrls: {
    default: {
      http: ['https://rpc.hyperliquid.xyz/evm'],
    },
  },
  color: '#FF6B35',
  logo: { light: hyperEvmLogo, dark: hyperEvmLogo },

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
    url: 'https://explorer.hyperliquid.xyz',
  },
}
