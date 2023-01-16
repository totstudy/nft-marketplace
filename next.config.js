require('dotenv').config()

module.exports = {
  env: {
    PINATA_API_KEY: process.env.PINATA_API_KEY,
    PINATA_SECRET_KEY: process.env.PINATA_SECRET_KEY,
    YOUR_ALCHEMY_MUMBAI_URL: process.env.YOUR_ALCHEMY_MUMBAI_URL,
  },
  reactStrictMode: true,
  images: {
    domains: ['ipfs.io']
  },
}
