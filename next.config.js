// const path = require('path')
// require('dotenv').config({ path: path.join(__dirname, '/.env.local') })
require('dotenv').config();
// require('dotenv').config({ path: path.join(__dirname, '/.env') })
module.exports = {
  env: {
    PINATA_API_KEY: process.env.PINATA_API_KEY,
    PINATA_SECRET_KEY: process.env.PINATA_SECRET_KEY,
    YOUR_ALCHEMY_MUMBAI_URL: process.env.YOUR_ALCHEMY_MUMBAI_URL,
    HOGE:process.env.HOGE,
  },
  reactStrictMode: true,
  images: {
    domains: ['ipfs.io']
  },
  
}
