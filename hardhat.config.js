require('@nomiclabs/hardhat-waffle')
require('dotenv').config()
require('hardhat-gas-reporter')

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  defaultNetwork: 'hardhat',
  networks: {
    hardhat: {
      chainId: 1337
    },
    mumbai: {
      url: process.env.YOUR_ALCHEMY_MUMBAI_URL,
      accounts: [process.env.YOUR_TEST_WALLET_PRIVATE_KEY],
      gas: 5500000,
      gasPrice: 7000000000
    },
  },
  solidity: {
    version: '0.8.4',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}
