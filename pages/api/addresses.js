export default function handler (req, res) {
  const network = req.query.network
  const marketplace_contract_address = "0x544d0759F94d2eDaEb0f723f80892D35e96a827A"
  const nft_contract_address = "0x8f8f6B043E393B806CC2172D4209E653c5829BB3"
  res.status(200).json({
    marketplaceAddress: marketplace_contract_address,
    nftAddress: nft_contract_address
  })
}
