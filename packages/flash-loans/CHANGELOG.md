# Changelog

## [1.6.0](https://github.com/tentou-tech/cow-sdk/compare/sdk-flash-loans-v1.5.12...sdk-flash-loans-v1.6.0) (2025-12-09)


### ✨ Features

* allow aave sdk to provide the helper addresses in the construct… ([#666](https://github.com/tentou-tech/cow-sdk/issues/666)) ([828ae7d](https://github.com/tentou-tech/cow-sdk/commit/828ae7d120a06b9d550c9f7c1e52bb86f783d0b8))
* allow changing backoff and limiter per request ([#208](https://github.com/tentou-tech/cow-sdk/issues/208)) ([ebea5ca](https://github.com/tentou-tech/cow-sdk/commit/ebea5ca0858aeb89ae3e5d5407c8903c3ca5178d))
* **flash-loans:** add dappId to aave hooks ([#645](https://github.com/tentou-tech/cow-sdk/issues/645)) ([b5312af](https://github.com/tentou-tech/cow-sdk/commit/b5312af11d2b164c125aa899a56ee0b1645ba18f))
* **flash-loans:** support debtSwap and repayCollateral ([#616](https://github.com/tentou-tech/cow-sdk/issues/616)) ([cdd9f8a](https://github.com/tentou-tech/cow-sdk/commit/cdd9f8a3fdc73be56d727f0ec320c2f11516f778))
* **flash-loans:** support Mainnet, Gnosis, and Base for AAVE ([#657](https://github.com/tentou-tech/cow-sdk/issues/657)) ([c7f2327](https://github.com/tentou-tech/cow-sdk/commit/c7f2327f4672a899c2775dd8ab8d3543ad08cdd6))
* **flash-loans:** update smartcontract addresses ([#676](https://github.com/tentou-tech/cow-sdk/issues/676)) ([3d78116](https://github.com/tentou-tech/cow-sdk/commit/3d781167dfe6a02646c546b481f058d2ed0f664f))


### 🐛 Bug Fixes

* fix lint issues ([#631](https://github.com/tentou-tech/cow-sdk/issues/631)) ([2152be4](https://github.com/tentou-tech/cow-sdk/commit/2152be4f75017f033ca7eba0959d82691cef6ee3))
* **flash-loans:** add hooksGasLimit parameter ([#691](https://github.com/tentou-tech/cow-sdk/issues/691)) ([32ebb2b](https://github.com/tentou-tech/cow-sdk/commit/32ebb2b2ae1a27e31b3ccc141ccf7ec610db2ed6))
* flashloan fee calculation now matches aave's ([#622](https://github.com/tentou-tech/cow-sdk/issues/622)) ([8d11b7f](https://github.com/tentou-tech/cow-sdk/commit/8d11b7fbbc8ff797253f26772a0e5c940286f2d9))
* make adapters hook helpers public ([#639](https://github.com/tentou-tech/cow-sdk/issues/639)) ([f8760ae](https://github.com/tentou-tech/cow-sdk/commit/f8760ae6084f7df729f140f9bea799566c217287))
* pump flashloans sdk version ([#687](https://github.com/tentou-tech/cow-sdk/issues/687)) ([d31fb42](https://github.com/tentou-tech/cow-sdk/commit/d31fb421424ed3df81de09b0e2d36b7023466931))
* **trading:** add EIP1271 signature support ([#584](https://github.com/tentou-tech/cow-sdk/issues/584)) ([ca9e834](https://github.com/tentou-tech/cow-sdk/commit/ca9e834e2b0edf8a757e01383b2218d5ecfbe25e))


### 🔧 Miscellaneous

* allow to set the factory contract and aave pools in the sdk ([#680](https://github.com/tentou-tech/cow-sdk/issues/680)) ([b90529c](https://github.com/tentou-tech/cow-sdk/commit/b90529cd27fdeb4060bc0a53702df6f8104495b7))
* release main ([#605](https://github.com/tentou-tech/cow-sdk/issues/605)) ([c9efd22](https://github.com/tentou-tech/cow-sdk/commit/c9efd22e6c934e95cb0e88a684b3a973b7ac3cce))
* release main ([#618](https://github.com/tentou-tech/cow-sdk/issues/618)) ([c23844f](https://github.com/tentou-tech/cow-sdk/commit/c23844fd8544a29a17e60509d45b544a21dfb7d3))
* release main ([#620](https://github.com/tentou-tech/cow-sdk/issues/620)) ([b36394a](https://github.com/tentou-tech/cow-sdk/commit/b36394a2ba38957edb47ffc4451ea6624d66737b))
* release main ([#635](https://github.com/tentou-tech/cow-sdk/issues/635)) ([bd5c1d9](https://github.com/tentou-tech/cow-sdk/commit/bd5c1d998c17379b2386942a0404ad4e0e232b4c))
* release main ([#637](https://github.com/tentou-tech/cow-sdk/issues/637)) ([6909e8d](https://github.com/tentou-tech/cow-sdk/commit/6909e8d5e97afadc203be2293865bfb2f9338953))
* release main ([#643](https://github.com/tentou-tech/cow-sdk/issues/643)) ([203dbc6](https://github.com/tentou-tech/cow-sdk/commit/203dbc63014f2d03b2affe0d3a09a4d905d4843f))
* release main ([#646](https://github.com/tentou-tech/cow-sdk/issues/646)) ([6e67787](https://github.com/tentou-tech/cow-sdk/commit/6e67787c22bf48d787f9ea42272e1308ca98e50f))
* release main ([#648](https://github.com/tentou-tech/cow-sdk/issues/648)) ([5dd3bf5](https://github.com/tentou-tech/cow-sdk/commit/5dd3bf5659852590d5d46317bfc19c56e125ca59))
* release main ([#650](https://github.com/tentou-tech/cow-sdk/issues/650)) ([2493612](https://github.com/tentou-tech/cow-sdk/commit/24936120e51b0083eda408ab80b8f8ee4115e223))
* release main ([#667](https://github.com/tentou-tech/cow-sdk/issues/667)) ([1b04b9e](https://github.com/tentou-tech/cow-sdk/commit/1b04b9e83e5ee30cc7246dbba04ee3ef0c32c62e))
* release main ([#677](https://github.com/tentou-tech/cow-sdk/issues/677)) ([28c687f](https://github.com/tentou-tech/cow-sdk/commit/28c687fae75ad6a8c7bfc8b98f301de1cb4ce484))
* release main ([#681](https://github.com/tentou-tech/cow-sdk/issues/681)) ([435715a](https://github.com/tentou-tech/cow-sdk/commit/435715a3e8e9559408df1dd1e23080b684650cf8))
* release main ([#688](https://github.com/tentou-tech/cow-sdk/issues/688)) ([5acc4d7](https://github.com/tentou-tech/cow-sdk/commit/5acc4d7109f28cdfca402d8cb44fb029e13392d7))
* release main ([#692](https://github.com/tentou-tech/cow-sdk/issues/692)) ([f67efdb](https://github.com/tentou-tech/cow-sdk/commit/f67efdb64195da1da07570ce249d230d2f5b975c))
* release main ([#700](https://github.com/tentou-tech/cow-sdk/issues/700)) ([a0ce28d](https://github.com/tentou-tech/cow-sdk/commit/a0ce28d18e51b50e947bc104228686d558861391))
* release main ([#702](https://github.com/tentou-tech/cow-sdk/issues/702)) ([1e6b54d](https://github.com/tentou-tech/cow-sdk/commit/1e6b54dbaef21a61c362bc2d1567d87f14d7f8a7))
* release main ([#718](https://github.com/tentou-tech/cow-sdk/issues/718)) ([87683ec](https://github.com/tentou-tech/cow-sdk/commit/87683ecc507e59d70a6d623faba83cda65ca44cc))
* release main ([#720](https://github.com/tentou-tech/cow-sdk/issues/720)) ([c7348b8](https://github.com/tentou-tech/cow-sdk/commit/c7348b8eeaddb371c82631dbf94bfd8b0fb0209b))
* release main ([#721](https://github.com/tentou-tech/cow-sdk/issues/721)) ([d8cb9ec](https://github.com/tentou-tech/cow-sdk/commit/d8cb9ec16d16af35f8c2a1387b82fee472acd380))
* release main ([#726](https://github.com/tentou-tech/cow-sdk/issues/726)) ([a6a51e6](https://github.com/tentou-tech/cow-sdk/commit/a6a51e6ec3edd9fdb6c1384070ad24a5cac3cb98))
* release main ([#727](https://github.com/tentou-tech/cow-sdk/issues/727)) ([af17e9a](https://github.com/tentou-tech/cow-sdk/commit/af17e9a772f608c5c2751bce25549062a38702b6))
* release main ([#730](https://github.com/tentou-tech/cow-sdk/issues/730)) ([e7e4157](https://github.com/tentou-tech/cow-sdk/commit/e7e415700724d6cc62f1f0590dbf47d908a9a55e))
* release main ([#735](https://github.com/tentou-tech/cow-sdk/issues/735)) ([c17655c](https://github.com/tentou-tech/cow-sdk/commit/c17655c588a735bd12c1219317f5b290cf9d9a34))
* revert release ([#634](https://github.com/tentou-tech/cow-sdk/issues/634)) ([fc7bf61](https://github.com/tentou-tech/cow-sdk/commit/fc7bf61444619d4b2c3a3dd55b7ce52c197b1878))
* update debt swap test ([#621](https://github.com/tentou-tech/cow-sdk/issues/621)) ([5e0a66b](https://github.com/tentou-tech/cow-sdk/commit/5e0a66b2d7a8c34adf4dc50e3640f462a1e13188))
* update repay test ([#619](https://github.com/tentou-tech/cow-sdk/issues/619)) ([8c81142](https://github.com/tentou-tech/cow-sdk/commit/8c81142197e0b05c73ac7bf84cb9ccd022171d64))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @cowprotocol/sdk-common bumped to 1.0.0
    * @cowprotocol/sdk-app-data bumped to 5.0.0
    * @cowprotocol/sdk-trading bumped to 1.0.0
    * @cowprotocol/sdk-order-signing bumped to 1.0.0
    * @cowprotocol/sdk-order-book bumped to 1.0.0
    * @cowprotocol/sdk-config bumped to 1.0.0
  * devDependencies
    * @cowprotocol/sdk-ethers-v5-adapter bumped to 1.0.0
    * @cowprotocol/sdk-ethers-v6-adapter bumped to 1.0.0
    * @cowprotocol/sdk-viem-adapter bumped to 1.0.0

## [1.5.12](https://github.com/cowprotocol/cow-sdk/compare/sdk-flash-loans-v1.5.11...sdk-flash-loans-v1.5.12) (2025-12-05)


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @cowprotocol/sdk-app-data bumped to 4.3.5
    * @cowprotocol/sdk-trading bumped to 0.6.3
    * @cowprotocol/sdk-order-signing bumped to 0.1.19
    * @cowprotocol/sdk-order-book bumped to 0.4.3
    * @cowprotocol/sdk-config bumped to 0.6.1

## [1.5.11](https://github.com/cowprotocol/cow-sdk/compare/sdk-flash-loans-v1.5.10...sdk-flash-loans-v1.5.11) (2025-12-04)


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @cowprotocol/sdk-app-data bumped to 4.3.4
    * @cowprotocol/sdk-trading bumped to 0.6.2
    * @cowprotocol/sdk-order-signing bumped to 0.1.18
    * @cowprotocol/sdk-order-book bumped to 0.4.2
    * @cowprotocol/sdk-config bumped to 0.6.0

## [1.5.10](https://github.com/cowprotocol/cow-sdk/compare/sdk-flash-loans-v1.5.9...sdk-flash-loans-v1.5.10) (2025-12-03)


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @cowprotocol/sdk-app-data bumped to 4.3.3
    * @cowprotocol/sdk-trading bumped to 0.6.1
    * @cowprotocol/sdk-order-signing bumped to 0.1.17
    * @cowprotocol/sdk-order-book bumped to 0.4.1
    * @cowprotocol/sdk-config bumped to 0.5.0

## [1.5.9](https://github.com/cowprotocol/cow-sdk/compare/sdk-flash-loans-v1.5.8...sdk-flash-loans-v1.5.9) (2025-12-03)


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @cowprotocol/sdk-app-data bumped to 4.3.2
    * @cowprotocol/sdk-trading bumped to 0.6.0

## [1.5.8](https://github.com/cowprotocol/cow-sdk/compare/sdk-flash-loans-v1.5.7...sdk-flash-loans-v1.5.8) (2025-12-01)


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @cowprotocol/sdk-trading bumped to 0.5.4
    * @cowprotocol/sdk-order-signing bumped to 0.1.16
    * @cowprotocol/sdk-order-book bumped to 0.4.0

## [1.5.7](https://github.com/cowprotocol/cow-sdk/compare/sdk-flash-loans-v1.5.6...sdk-flash-loans-v1.5.7) (2025-11-27)


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @cowprotocol/sdk-trading bumped to 0.5.3
    * @cowprotocol/sdk-order-signing bumped to 0.1.15
    * @cowprotocol/sdk-order-book bumped to 0.3.2

## [1.5.6](https://github.com/cowprotocol/cow-sdk/compare/sdk-flash-loans-v1.5.5...sdk-flash-loans-v1.5.6) (2025-11-27)


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @cowprotocol/sdk-app-data bumped to 4.3.1
    * @cowprotocol/sdk-trading bumped to 0.5.2
    * @cowprotocol/sdk-order-signing bumped to 0.1.14
    * @cowprotocol/sdk-order-book bumped to 0.3.1
    * @cowprotocol/sdk-config bumped to 0.4.1

## [1.5.5](https://github.com/cowprotocol/cow-sdk/compare/sdk-flash-loans-v1.5.4...sdk-flash-loans-v1.5.5) (2025-11-24)


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @cowprotocol/sdk-app-data bumped to 4.3.0
    * @cowprotocol/sdk-trading bumped to 0.5.1
    * @cowprotocol/sdk-order-signing bumped to 0.1.13

## [1.5.4](https://github.com/cowprotocol/cow-sdk/compare/sdk-flash-loans-v1.5.3...sdk-flash-loans-v1.5.4) (2025-11-24)


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @cowprotocol/sdk-common bumped to 0.4.0
    * @cowprotocol/sdk-app-data bumped to 4.2.0
    * @cowprotocol/sdk-trading bumped to 0.5.0
    * @cowprotocol/sdk-order-signing bumped to 0.1.12
    * @cowprotocol/sdk-order-book bumped to 0.3.0
    * @cowprotocol/sdk-config bumped to 0.4.0
  * devDependencies
    * @cowprotocol/sdk-ethers-v5-adapter bumped to 0.3.0
    * @cowprotocol/sdk-ethers-v6-adapter bumped to 0.3.0
    * @cowprotocol/sdk-viem-adapter bumped to 0.3.0

## [1.5.3](https://github.com/cowprotocol/cow-sdk/compare/sdk-flash-loans-v1.5.2...sdk-flash-loans-v1.5.3) (2025-11-20)


### 🐛 Bug Fixes

* **flash-loans:** add hooksGasLimit parameter ([#691](https://github.com/cowprotocol/cow-sdk/issues/691)) ([32ebb2b](https://github.com/cowprotocol/cow-sdk/commit/32ebb2b2ae1a27e31b3ccc141ccf7ec610db2ed6))

## [1.5.2](https://github.com/cowprotocol/cow-sdk/compare/sdk-flash-loans-v1.5.1...sdk-flash-loans-v1.5.2) (2025-11-17)


### 🐛 Bug Fixes

* pump flashloans sdk version ([#687](https://github.com/cowprotocol/cow-sdk/issues/687)) ([d31fb42](https://github.com/cowprotocol/cow-sdk/commit/d31fb421424ed3df81de09b0e2d36b7023466931))

## [1.5.1](https://github.com/cowprotocol/cow-sdk/compare/sdk-flash-loans-v1.5.0...sdk-flash-loans-v1.5.1) (2025-11-17)


### 🔧 Miscellaneous

* allow to set the factory contract and aave pools in the sdk ([#680](https://github.com/cowprotocol/cow-sdk/issues/680)) ([b90529c](https://github.com/cowprotocol/cow-sdk/commit/b90529cd27fdeb4060bc0a53702df6f8104495b7))

## [1.5.0](https://github.com/cowprotocol/cow-sdk/compare/sdk-flash-loans-v1.4.0...sdk-flash-loans-v1.5.0) (2025-11-13)


### ✨ Features

* **flash-loans:** update smartcontract addresses ([#676](https://github.com/cowprotocol/cow-sdk/issues/676)) ([3d78116](https://github.com/cowprotocol/cow-sdk/commit/3d781167dfe6a02646c546b481f058d2ed0f664f))

## [1.4.0](https://github.com/cowprotocol/cow-sdk/compare/sdk-flash-loans-v1.3.0...sdk-flash-loans-v1.4.0) (2025-11-12)


### ✨ Features

* allow aave sdk to provide the helper addresses in the construct… ([#666](https://github.com/cowprotocol/cow-sdk/issues/666)) ([828ae7d](https://github.com/cowprotocol/cow-sdk/commit/828ae7d120a06b9d550c9f7c1e52bb86f783d0b8))

## [1.3.0](https://github.com/cowprotocol/cow-sdk/compare/sdk-flash-loans-v1.2.1...sdk-flash-loans-v1.3.0) (2025-11-07)


### ✨ Features

* **flash-loans:** support Mainnet, Gnosis, and Base for AAVE ([#657](https://github.com/cowprotocol/cow-sdk/issues/657)) ([c7f2327](https://github.com/cowprotocol/cow-sdk/commit/c7f2327f4672a899c2775dd8ab8d3543ad08cdd6))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @cowprotocol/sdk-trading bumped to 0.4.6
    * @cowprotocol/sdk-order-signing bumped to 0.1.11

## [1.2.1](https://github.com/cowprotocol/cow-sdk/compare/sdk-flash-loans-v1.2.0...sdk-flash-loans-v1.2.1) (2025-11-05)


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @cowprotocol/sdk-app-data bumped to 4.1.6
    * @cowprotocol/sdk-trading bumped to 0.4.5
    * @cowprotocol/sdk-order-signing bumped to 0.1.10
    * @cowprotocol/sdk-order-book bumped to 0.2.0
    * @cowprotocol/sdk-config bumped to 0.3.0

## [1.2.0](https://github.com/cowprotocol/cow-sdk/compare/sdk-flash-loans-v1.1.3...sdk-flash-loans-v1.2.0) (2025-11-05)


### ✨ Features

* **flash-loans:** add dappId to aave hooks ([#645](https://github.com/cowprotocol/cow-sdk/issues/645)) ([b5312af](https://github.com/cowprotocol/cow-sdk/commit/b5312af11d2b164c125aa899a56ee0b1645ba18f))

## [1.1.3](https://github.com/cowprotocol/cow-sdk/compare/sdk-flash-loans-v1.1.2...sdk-flash-loans-v1.1.3) (2025-11-04)


### 🐛 Bug Fixes

* make adapters hook helpers public ([#639](https://github.com/cowprotocol/cow-sdk/issues/639)) ([f8760ae](https://github.com/cowprotocol/cow-sdk/commit/f8760ae6084f7df729f140f9bea799566c217287))

## [1.1.2](https://github.com/cowprotocol/cow-sdk/compare/sdk-flash-loans-v1.1.1...sdk-flash-loans-v1.1.2) (2025-10-30)


### 🐛 Bug Fixes

* flashloan fee calculation now matches aave's ([#622](https://github.com/cowprotocol/cow-sdk/issues/622)) ([8d11b7f](https://github.com/cowprotocol/cow-sdk/commit/8d11b7fbbc8ff797253f26772a0e5c940286f2d9))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @cowprotocol/sdk-trading bumped to 0.4.4
    * @cowprotocol/sdk-order-signing bumped to 0.1.9

## [1.1.1](https://github.com/cowprotocol/cow-sdk/compare/sdk-flash-loans-v1.1.0...sdk-flash-loans-v1.1.1) (2025-10-29)


### 🐛 Bug Fixes

* fix lint issues ([#631](https://github.com/cowprotocol/cow-sdk/issues/631)) ([2152be4](https://github.com/cowprotocol/cow-sdk/commit/2152be4f75017f033ca7eba0959d82691cef6ee3))


### 🔧 Miscellaneous

* release main ([#620](https://github.com/cowprotocol/cow-sdk/issues/620)) ([b36394a](https://github.com/cowprotocol/cow-sdk/commit/b36394a2ba38957edb47ffc4451ea6624d66737b))
* revert release ([#634](https://github.com/cowprotocol/cow-sdk/issues/634)) ([fc7bf61](https://github.com/cowprotocol/cow-sdk/commit/fc7bf61444619d4b2c3a3dd55b7ce52c197b1878))
* update debt swap test ([#621](https://github.com/cowprotocol/cow-sdk/issues/621)) ([5e0a66b](https://github.com/cowprotocol/cow-sdk/commit/5e0a66b2d7a8c34adf4dc50e3640f462a1e13188))
* update repay test ([#619](https://github.com/cowprotocol/cow-sdk/issues/619)) ([8c81142](https://github.com/cowprotocol/cow-sdk/commit/8c81142197e0b05c73ac7bf84cb9ccd022171d64))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @cowprotocol/sdk-common bumped to 0.3.0
    * @cowprotocol/sdk-app-data bumped to 4.1.5
    * @cowprotocol/sdk-trading bumped to 0.4.3
    * @cowprotocol/sdk-order-signing bumped to 0.1.8
    * @cowprotocol/sdk-order-book bumped to 0.1.4
  * devDependencies
    * @cowprotocol/sdk-ethers-v5-adapter bumped to 0.2.0
    * @cowprotocol/sdk-ethers-v6-adapter bumped to 0.2.0
    * @cowprotocol/sdk-viem-adapter bumped to 0.2.0

## [1.1.0](https://github.com/cowprotocol/cow-sdk/compare/sdk-flash-loans-v1.0.0...sdk-flash-loans-v1.1.0) (2025-10-24)


### ✨ Features

* **flash-loans:** support debtSwap and repayCollateral ([#616](https://github.com/cowprotocol/cow-sdk/issues/616)) ([cdd9f8a](https://github.com/cowprotocol/cow-sdk/commit/cdd9f8a3fdc73be56d727f0ec320c2f11516f778))

## 1.0.0 (2025-10-24)


### ✨ Features

* allow changing backoff and limiter per request ([#208](https://github.com/cowprotocol/cow-sdk/issues/208)) ([ebea5ca](https://github.com/cowprotocol/cow-sdk/commit/ebea5ca0858aeb89ae3e5d5407c8903c3ca5178d))


### 🐛 Bug Fixes

* **trading:** add EIP1271 signature support ([#584](https://github.com/cowprotocol/cow-sdk/issues/584)) ([ca9e834](https://github.com/cowprotocol/cow-sdk/commit/ca9e834e2b0edf8a757e01383b2218d5ecfbe25e))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @cowprotocol/sdk-common bumped to 0.2.2
    * @cowprotocol/sdk-app-data bumped to 4.1.4
    * @cowprotocol/sdk-trading bumped to 0.4.2
    * @cowprotocol/sdk-order-signing bumped to 0.1.7
    * @cowprotocol/sdk-order-book bumped to 0.1.3
    * @cowprotocol/sdk-config bumped to 0.2.0
  * devDependencies
    * @cowprotocol/sdk-ethers-v5-adapter bumped to 0.1.3
    * @cowprotocol/sdk-ethers-v6-adapter bumped to 0.1.3
    * @cowprotocol/sdk-viem-adapter bumped to 0.1.3
