# Changelog

## [1.0.0](https://github.com/tentou-tech/cow-sdk/compare/sdk-config-v0.6.1...sdk-config-v1.0.0) (2025-12-09)


### ⚠ BREAKING CHANGES

* release cow-sdk v7

### ✨ Features

* add isUnderDevelopment flag to chain info ([#597](https://github.com/tentou-tech/cow-sdk/issues/597)) ([f502fa9](https://github.com/tentou-tech/cow-sdk/commit/f502fa9aea85915ef92192539ec1ff9f2651e534))
* add monorepo package network images ([#429](https://github.com/tentou-tech/cow-sdk/issues/429)) ([56ef05b](https://github.com/tentou-tech/cow-sdk/commit/56ef05b84a25955cbe6d1f8f74df0ff0fa2bdfff))
* allow changing backoff and limiter per request ([#208](https://github.com/tentou-tech/cow-sdk/issues/208)) ([ebea5ca](https://github.com/tentou-tech/cow-sdk/commit/ebea5ca0858aeb89ae3e5d5407c8903c3ca5178d))
* **bridge:** support Near bridge provider ([#642](https://github.com/tentou-tech/cow-sdk/issues/642)) ([c7d8633](https://github.com/tentou-tech/cow-sdk/commit/c7d86335601cfd772d72dfe65a0e941ce916769a))
* create config package ([212c4a7](https://github.com/tentou-tech/cow-sdk/commit/212c4a74eae46ff6150138300334e0565f581ad1))
* **lib-agnostic:** migrate latest Bridging changes ([#426](https://github.com/tentou-tech/cow-sdk/issues/426)) ([2359d9b](https://github.com/tentou-tech/cow-sdk/commit/2359d9b903e80ae5bab0cdb92d8cf52ae250da36))
* **lib-agnostic:** migrate latest SDK changes ([#427](https://github.com/tentou-tech/cow-sdk/issues/427)) ([323bab6](https://github.com/tentou-tech/cow-sdk/commit/323bab61eb5adeb4a58bc15e25ffb29d2e1afcbf))
* **monorepo-config:** adjust all package.json and scripts ([23dc2a5](https://github.com/tentou-tech/cow-sdk/commit/23dc2a5db02ce3734b55e1151c8579f9a42a4bc5))
* **new-chains:** add q4 chains ([#606](https://github.com/tentou-tech/cow-sdk/issues/606)) ([2501382](https://github.com/tentou-tech/cow-sdk/commit/2501382e80acb7f6bb0f87adbb5a9325de2c56cc))
* refactor config ([f7fcf73](https://github.com/tentou-tech/cow-sdk/commit/f7fcf73a7fde59b47a5aa2432fddea8e1648fd94))
* release cow-sdk v7 ([6cd3e57](https://github.com/tentou-tech/cow-sdk/commit/6cd3e573687b1ffdbc0fdcb8cdbb414d88546e38))
* **sdk-agnostic-lib:** create cow trading package ([#368](https://github.com/tentou-tech/cow-sdk/issues/368)) ([0a4534a](https://github.com/tentou-tech/cow-sdk/commit/0a4534aababce4f5d8bab991cd6ae9f51842d719))
* **sdk-agnostic-lib:** Create weiroll package ([#371](https://github.com/tentou-tech/cow-sdk/issues/371)) ([8f6a2e1](https://github.com/tentou-tech/cow-sdk/commit/8f6a2e16e5e7a43a5afc43cf5faab174be916b2e))
* test release of packages ([#485](https://github.com/tentou-tech/cow-sdk/issues/485)) ([74109d8](https://github.com/tentou-tech/cow-sdk/commit/74109d893417c14c1ee476be8040704183e800c6))
* use aws for token and chain images ([#724](https://github.com/tentou-tech/cow-sdk/issues/724)) ([1b23c5e](https://github.com/tentou-tech/cow-sdk/commit/1b23c5e5f7e1763b710b95f444ad052395808277))
* use aws for token and chain images ([#724](https://github.com/tentou-tech/cow-sdk/issues/724)) ([2a8e220](https://github.com/tentou-tech/cow-sdk/commit/2a8e2205acc5143efecbc9caee89d01f32570e0d))


### 🐛 Bug Fixes

* **config:** make native token address lower in url ([#499](https://github.com/tentou-tech/cow-sdk/issues/499)) ([96e0dc6](https://github.com/tentou-tech/cow-sdk/commit/96e0dc6fd837f9b67025d6e05959ad9b773c0ed4))
* fix gnosis native token url ([#501](https://github.com/tentou-tech/cow-sdk/issues/501)) ([4d5176e](https://github.com/tentou-tech/cow-sdk/commit/4d5176e85594f45d96a5d9d7aa7285cbf3cfebf2))
* linea no longer under dev ([#734](https://github.com/tentou-tech/cow-sdk/issues/734)) ([548bf29](https://github.com/tentou-tech/cow-sdk/commit/548bf2917a71117bf981b254d0211baacdbc9fff))
* migrate lens eth-flow contract address ([#468](https://github.com/tentou-tech/cow-sdk/issues/468)) ([91c87b2](https://github.com/tentou-tech/cow-sdk/commit/91c87b2e31c1b80ef1703d986f4c49811897f3a0))
* use the blue linea logo instead of the yellow one ([#717](https://github.com/tentou-tech/cow-sdk/issues/717)) ([e044446](https://github.com/tentou-tech/cow-sdk/commit/e0444463b7097b8ebc0134aeacfdf460e4b51684))


### ♻️ Refactoring

* move cow-error and wallets.ts and remove duplicate types ([4a7e5d6](https://github.com/tentou-tech/cow-sdk/commit/4a7e5d6d035ccebf05cce437f0409220f39b643a))


### 📚 Documentation

* update README to focus on main use cases ([#493](https://github.com/tentou-tech/cow-sdk/issues/493)) ([a05cb1b](https://github.com/tentou-tech/cow-sdk/commit/a05cb1ba11b5f9895d7cfe6262cf74c4089fd73c))


### 🔧 Miscellaneous

* migrate latest changes from main 26-08-2025 ([#445](https://github.com/tentou-tech/cow-sdk/issues/445)) ([698937c](https://github.com/tentou-tech/cow-sdk/commit/698937c0feff3a254873371bc1ef791917e6294e))
* release main ([#453](https://github.com/tentou-tech/cow-sdk/issues/453)) ([36080c1](https://github.com/tentou-tech/cow-sdk/commit/36080c1955f5f161bebce7867af110f6938e5c95))
* release main ([#467](https://github.com/tentou-tech/cow-sdk/issues/467)) ([ed2977a](https://github.com/tentou-tech/cow-sdk/commit/ed2977a82bb2f4b43de900840848e33532d001f0))
* release main ([#486](https://github.com/tentou-tech/cow-sdk/issues/486)) ([cf53df2](https://github.com/tentou-tech/cow-sdk/commit/cf53df2d0f5e96a544165547958ecc959c1948d7))
* release main ([#500](https://github.com/tentou-tech/cow-sdk/issues/500)) ([76c5185](https://github.com/tentou-tech/cow-sdk/commit/76c5185d4b827d185af11bef9435fbed87484b0b))
* release main ([#502](https://github.com/tentou-tech/cow-sdk/issues/502)) ([c452d8e](https://github.com/tentou-tech/cow-sdk/commit/c452d8e53bc0dcd79052b1877d2c48a32777093e))
* release main ([#503](https://github.com/tentou-tech/cow-sdk/issues/503)) ([532d8eb](https://github.com/tentou-tech/cow-sdk/commit/532d8eb2a0a0f9ec5775e566fe2507f1ccc4f961))
* release main ([#515](https://github.com/tentou-tech/cow-sdk/issues/515)) ([912e315](https://github.com/tentou-tech/cow-sdk/commit/912e31551440ebfa61d7d2f5c846d61162559448))
* release main ([#605](https://github.com/tentou-tech/cow-sdk/issues/605)) ([c9efd22](https://github.com/tentou-tech/cow-sdk/commit/c9efd22e6c934e95cb0e88a684b3a973b7ac3cce))
* release main ([#648](https://github.com/tentou-tech/cow-sdk/issues/648)) ([5dd3bf5](https://github.com/tentou-tech/cow-sdk/commit/5dd3bf5659852590d5d46317bfc19c56e125ca59))
* release main ([#700](https://github.com/tentou-tech/cow-sdk/issues/700)) ([a0ce28d](https://github.com/tentou-tech/cow-sdk/commit/a0ce28d18e51b50e947bc104228686d558861391))
* release main ([#718](https://github.com/tentou-tech/cow-sdk/issues/718)) ([87683ec](https://github.com/tentou-tech/cow-sdk/commit/87683ecc507e59d70a6d623faba83cda65ca44cc))
* release main ([#727](https://github.com/tentou-tech/cow-sdk/issues/727)) ([af17e9a](https://github.com/tentou-tech/cow-sdk/commit/af17e9a772f608c5c2751bce25549062a38702b6))
* release main ([#730](https://github.com/tentou-tech/cow-sdk/issues/730)) ([e7e4157](https://github.com/tentou-tech/cow-sdk/commit/e7e415700724d6cc62f1f0590dbf47d908a9a55e))
* release main ([#735](https://github.com/tentou-tech/cow-sdk/issues/735)) ([c17655c](https://github.com/tentou-tech/cow-sdk/commit/c17655c588a735bd12c1219317f5b290cf9d9a34))
* revert use aws for token and chain images ([#724](https://github.com/tentou-tech/cow-sdk/issues/724)) ([f73bc96](https://github.com/tentou-tech/cow-sdk/commit/f73bc96156796ce4928f64f963295501dfc69a5c))
* **sdk-agnostic-lib:** merge multiple PRs to avoid conflicts and speed up base branch sync ([#354](https://github.com/tentou-tech/cow-sdk/issues/354)) ([55d3068](https://github.com/tentou-tech/cow-sdk/commit/55d3068c52217dd2618d8c180ab4fed8c9334c72))
* update sdk-config tsconfig ([8666af4](https://github.com/tentou-tech/cow-sdk/commit/8666af48c60cd1d6e945f8412b192029299f7c90))

## [0.6.1](https://github.com/cowprotocol/cow-sdk/compare/sdk-config-v0.6.0...sdk-config-v0.6.1) (2025-12-05)


### 🐛 Bug Fixes

* linea no longer under dev ([#734](https://github.com/cowprotocol/cow-sdk/issues/734)) ([548bf29](https://github.com/cowprotocol/cow-sdk/commit/548bf2917a71117bf981b254d0211baacdbc9fff))

## [0.6.0](https://github.com/cowprotocol/cow-sdk/compare/sdk-config-v0.5.0...sdk-config-v0.6.0) (2025-12-04)


### ✨ Features

* use aws for token and chain images ([#724](https://github.com/cowprotocol/cow-sdk/issues/724)) ([1b23c5e](https://github.com/cowprotocol/cow-sdk/commit/1b23c5e5f7e1763b710b95f444ad052395808277))


### 🔧 Miscellaneous

* revert use aws for token and chain images ([#724](https://github.com/cowprotocol/cow-sdk/issues/724)) ([f73bc96](https://github.com/cowprotocol/cow-sdk/commit/f73bc96156796ce4928f64f963295501dfc69a5c))

## [0.5.0](https://github.com/cowprotocol/cow-sdk/compare/sdk-config-v0.4.1...sdk-config-v0.5.0) (2025-12-03)


### ✨ Features

* use aws for token and chain images ([#724](https://github.com/cowprotocol/cow-sdk/issues/724)) ([2a8e220](https://github.com/cowprotocol/cow-sdk/commit/2a8e2205acc5143efecbc9caee89d01f32570e0d))

## [0.4.1](https://github.com/cowprotocol/cow-sdk/compare/sdk-config-v0.4.0...sdk-config-v0.4.1) (2025-11-27)


### 🐛 Bug Fixes

* use the blue linea logo instead of the yellow one ([#717](https://github.com/cowprotocol/cow-sdk/issues/717)) ([e044446](https://github.com/cowprotocol/cow-sdk/commit/e0444463b7097b8ebc0134aeacfdf460e4b51684))

## [0.4.0](https://github.com/cowprotocol/cow-sdk/compare/sdk-config-v0.3.0...sdk-config-v0.4.0) (2025-11-24)


### ✨ Features

* **bridge:** support Near bridge provider ([#642](https://github.com/cowprotocol/cow-sdk/issues/642)) ([c7d8633](https://github.com/cowprotocol/cow-sdk/commit/c7d86335601cfd772d72dfe65a0e941ce916769a))

## [0.3.0](https://github.com/cowprotocol/cow-sdk/compare/sdk-config-v0.2.0...sdk-config-v0.3.0) (2025-11-05)


### ✨ Features

* **new-chains:** add q4 chains ([#606](https://github.com/cowprotocol/cow-sdk/issues/606)) ([2501382](https://github.com/cowprotocol/cow-sdk/commit/2501382e80acb7f6bb0f87adbb5a9325de2c56cc))

## [0.2.0](https://github.com/cowprotocol/cow-sdk/compare/sdk-config-v0.1.0...sdk-config-v0.2.0) (2025-10-24)


### ✨ Features

* add isUnderDevelopment flag to chain info ([#597](https://github.com/cowprotocol/cow-sdk/issues/597)) ([f502fa9](https://github.com/cowprotocol/cow-sdk/commit/f502fa9aea85915ef92192539ec1ff9f2651e534))

## [0.1.0](https://github.com/cowprotocol/cow-sdk/compare/sdk-config-v0.3.3-beta.0...sdk-config-v0.1.0) (2025-09-17)


### ⚠ BREAKING CHANGES

* release cow-sdk v7

### ✨ Features

* release cow-sdk v7 ([6cd3e57](https://github.com/cowprotocol/cow-sdk/commit/6cd3e573687b1ffdbc0fdcb8cdbb414d88546e38))

## [0.3.3-beta.0](https://github.com/cowprotocol/cow-sdk/compare/sdk-config-v0.3.2-beta.0...sdk-config-v0.3.3-beta.0) (2025-09-16)


### 📚 Documentation

* update README to focus on main use cases ([#493](https://github.com/cowprotocol/cow-sdk/issues/493)) ([a05cb1b](https://github.com/cowprotocol/cow-sdk/commit/a05cb1ba11b5f9895d7cfe6262cf74c4089fd73c))

## [0.3.2-beta.0](https://github.com/cowprotocol/cow-sdk/compare/sdk-config-v0.3.1-beta.0...sdk-config-v0.3.2-beta.0) (2025-09-15)


### 🐛 Bug Fixes

* fix gnosis native token url ([#501](https://github.com/cowprotocol/cow-sdk/issues/501)) ([4d5176e](https://github.com/cowprotocol/cow-sdk/commit/4d5176e85594f45d96a5d9d7aa7285cbf3cfebf2))

## [0.3.1-beta.0](https://github.com/cowprotocol/cow-sdk/compare/sdk-config-v0.3.0-beta.0...sdk-config-v0.3.1-beta.0) (2025-09-15)


### 🐛 Bug Fixes

* **config:** make native token address lower in url ([#499](https://github.com/cowprotocol/cow-sdk/issues/499)) ([96e0dc6](https://github.com/cowprotocol/cow-sdk/commit/96e0dc6fd837f9b67025d6e05959ad9b773c0ed4))

## [0.3.0-beta.0](https://github.com/cowprotocol/cow-sdk/compare/sdk-config-v0.2.1-beta.0...sdk-config-v0.3.0-beta.0) (2025-09-11)


### ✨ Features

* test release of packages ([#485](https://github.com/cowprotocol/cow-sdk/issues/485)) ([74109d8](https://github.com/cowprotocol/cow-sdk/commit/74109d893417c14c1ee476be8040704183e800c6))

## [0.2.1-beta.0](https://github.com/cowprotocol/cow-sdk/compare/sdk-config-v0.2.0-beta.0...sdk-config-v0.2.1-beta.0) (2025-09-01)


### 🐛 Bug Fixes

* migrate lens eth-flow contract address ([#468](https://github.com/cowprotocol/cow-sdk/issues/468)) ([91c87b2](https://github.com/cowprotocol/cow-sdk/commit/91c87b2e31c1b80ef1703d986f4c49811897f3a0))

## [0.2.0-beta.0](https://github.com/cowprotocol/cow-sdk/compare/sdk-config-v0.1.0-beta.0...sdk-config-v0.2.0-beta.0) (2025-08-28)


### ✨ Features

* add monorepo package network images ([#429](https://github.com/cowprotocol/cow-sdk/issues/429)) ([56ef05b](https://github.com/cowprotocol/cow-sdk/commit/56ef05b84a25955cbe6d1f8f74df0ff0fa2bdfff))
* allow changing backoff and limiter per request ([#208](https://github.com/cowprotocol/cow-sdk/issues/208)) ([ebea5ca](https://github.com/cowprotocol/cow-sdk/commit/ebea5ca0858aeb89ae3e5d5407c8903c3ca5178d))
* create config package ([212c4a7](https://github.com/cowprotocol/cow-sdk/commit/212c4a74eae46ff6150138300334e0565f581ad1))
* **lib-agnostic:** migrate latest Bridging changes ([#426](https://github.com/cowprotocol/cow-sdk/issues/426)) ([2359d9b](https://github.com/cowprotocol/cow-sdk/commit/2359d9b903e80ae5bab0cdb92d8cf52ae250da36))
* **lib-agnostic:** migrate latest SDK changes ([#427](https://github.com/cowprotocol/cow-sdk/issues/427)) ([323bab6](https://github.com/cowprotocol/cow-sdk/commit/323bab61eb5adeb4a58bc15e25ffb29d2e1afcbf))
* **monorepo-config:** adjust all package.json and scripts ([23dc2a5](https://github.com/cowprotocol/cow-sdk/commit/23dc2a5db02ce3734b55e1151c8579f9a42a4bc5))
* refactor config ([f7fcf73](https://github.com/cowprotocol/cow-sdk/commit/f7fcf73a7fde59b47a5aa2432fddea8e1648fd94))
* **sdk-agnostic-lib:** create cow trading package ([#368](https://github.com/cowprotocol/cow-sdk/issues/368)) ([0a4534a](https://github.com/cowprotocol/cow-sdk/commit/0a4534aababce4f5d8bab991cd6ae9f51842d719))
* **sdk-agnostic-lib:** Create weiroll package ([#371](https://github.com/cowprotocol/cow-sdk/issues/371)) ([8f6a2e1](https://github.com/cowprotocol/cow-sdk/commit/8f6a2e16e5e7a43a5afc43cf5faab174be916b2e))


### ♻️ Refactoring

* move cow-error and wallets.ts and remove duplicate types ([4a7e5d6](https://github.com/cowprotocol/cow-sdk/commit/4a7e5d6d035ccebf05cce437f0409220f39b643a))


### 🔧 Miscellaneous

* migrate latest changes from main 26-08-2025 ([#445](https://github.com/cowprotocol/cow-sdk/issues/445)) ([698937c](https://github.com/cowprotocol/cow-sdk/commit/698937c0feff3a254873371bc1ef791917e6294e))
* **sdk-agnostic-lib:** merge multiple PRs to avoid conflicts and speed up base branch sync ([#354](https://github.com/cowprotocol/cow-sdk/issues/354)) ([55d3068](https://github.com/cowprotocol/cow-sdk/commit/55d3068c52217dd2618d8c180ab4fed8c9334c72))
* update sdk-config tsconfig ([8666af4](https://github.com/cowprotocol/cow-sdk/commit/8666af48c60cd1d6e945f8412b192029299f7c90))
