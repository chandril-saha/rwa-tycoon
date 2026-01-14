export const ASSET_NFT_ABI = [
  {
    "inputs": [
      { "internalType": "address", "name": "recipient", "type": "address" },
      { "internalType": "string", "name": "assetType", "type": "string" },
      { "internalType": "uint256", "name": "yieldRate", "type": "uint256" },
      { "internalType": "string", "name": "riskLevel", "type": "string" },
      { "internalType": "string", "name": "tokenURI", "type": "string" }
    ],
    "name": "mintAsset",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }],
    "name": "getAssetDetails",
    "outputs": [
      {
        "components": [
          { "internalType": "string", "name": "assetType", "type": "string" },
          { "internalType": "uint256", "name": "yieldRate", "type": "uint256" },
          { "internalType": "string", "name": "riskLevel", "type": "string" },
          { "internalType": "bool", "name": "isFrozen", "type": "bool" },
          { "internalType": "bool", "name": "isExpired", "type": "bool" },
          { "internalType": "uint256", "name": "timestamp", "type": "uint256" }
        ],
        "internalType": "struct AssetNFT.Asset",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "owner", "type": "address" }
    ],
    "name": "balanceOf",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "owner", "type": "address" },
      { "internalType": "uint256", "name": "index", "type": "uint256" }
    ],
    "name": "tokenOfOwnerByIndex",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "from", "type": "address" },
      { "internalType": "address", "name": "to", "type": "address" },
      { "internalType": "uint256", "name": "tokenId", "type": "uint256" }
    ],
    "name": "safeTransferFrom",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }],
    "name": "unfreezeAsset",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint256", "name": "tokenId", "type": "uint256" },
      { "internalType": "uint256", "name": "newYield", "type": "uint256" }
    ],
    "name": "updateYield",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint256", "name": "tokenId", "type": "uint256" },
      { "internalType": "string", "name": "newRisk", "type": "string" }
    ],
    "name": "updateRisk",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
] as const

export const GAME_ENGINE_ABI = [
  {
    "inputs": [
      { "internalType": "uint256", "name": "tokenId", "type": "uint256" },
      { "internalType": "uint8", "name": "eventType", "type": "uint8" }
    ],
    "name": "applyEvent",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
] as const

// Placeholder addresses - User will need to replace these
export const ASSET_NFT_ADDRESS = "0xf15EE2DadcEf457E6E2b69bb9582f8C43FC4680f"
export const GAME_ENGINE_ADDRESS = "0x56aADf614f1E1aa159336536137f10cC1d76E2A8"
