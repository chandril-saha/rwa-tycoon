# RWA Tycoon 🏙️

**RWA Tycoon** is an educational Web3 simulation platform built on the **Mantle Network**. It gamifies the concept of Real World Assets (RWAs) to teach users about yield, risk, and asset management on-chain.

## 🚀 Vision
Tokenization of Real World Assets is the future of finance. However, the concepts of "Yield", "Liquidity", and "Regulatory Risk" can be daunting. **RWA Tycoon** simplifies this by putting you in the shoes of an asset manager. Mint properties, manage tenants, handle legal crises, and build your reputation on-chain.

## ✨ Key Features

### 1. 🏭 Mint & Manage
- **Mint Assets:** Choose from 4 asset types (Rental Property, Solar Plant, Invoice Pool, Co-working Space).
- **On-Chain Data:** Each asset is an ERC-721 NFT with dynamic metadata (Yield Rate, Risk Level) stored directly on the blockchain.

### 2. 🎮 Interactive Simulation
Experience the life of an asset manager with real-time events:
- **🔴 Missed Payment:** Simulates default risk. Yield drops, Risk spikes to High.
- **🟢 Property Upgrade:** Simulates CAPEX. Yield increases, Risk drops to Low.
- **🟡 Regulation Freeze:** Simulates legal compliance. The asset becomes **FROZEN** and all actions are blocked until a "Resolve Legal Issue" transaction is confirmed.
- **🔵 Maintenance:** Regular upkeep that stabilizes risk and offers loyalty yield boosts.

### 3. 🛡️ Reputation System
Your **Tycoon Score** is dynamically calculated based on your portfolio's health.
- **High Yield + Safe Assets** = High Reputation.
- **Frozen/Risky Assets** = Reputation Penalty.

### 4. 🎓 Built-in Education
- **Learn Hub:** A dedicated section explaining RWA concepts using simple analogies (e.g., "Wallet = Keycard", "Minting = Signing the Deed").
- **Visual Guides:** Color-coded indicators make financial metrics intuitive.

## 🛠️ Tech Stack

- **Blockchain:** Mantle Network (Sepolia Testnet)
- **Framework:** Next.js 14 (App Router)
- **Smart Contracts:** Solidity (OpenZeppelin v5)
- **Interaction:** Wagmi + Viem
- **Styling:** Custom Glassmorphism CSS (Vanilla)

## 📂 Project Structure

- `/contracts`: Solidity smart contracts (`AssetNFT.sol`, `GameEngine.sol`,`PlayerProfile.sol`).
- `/app`: Next.js frontend application.
- `/components`: Reusable UI components (Navbar, Wallet Connect).
- `/public`: Static assets (Logos, Icons).

## ⚡ Getting Started

### Prerequisites
- Node.js (v18+)
- MetaMask (configured for Mantle Sepolia)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/rwa-tycoon.git
    cd rwa-tycoon
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Run the application:**
    ```bash
    npm run dev
    ```

4.  **Open in Browser:**
    Navigate to `https://rwa-tycoon.vercel.app/`.

## 📜 Smart Contracts

Deployed on **Mantle Sepolia Testnet**:

| Contract | Address |
| :--- | :--- |
| **AssetNFT** | `0xf15EE2DadcEf457E6E2b69bb9582f8C43FC4680f` |
| **GameEngine** | `0x56aADf614f1E1aa159336536137f10cC1d76E2A8` |
| **PlayerProfile** | `0x910c3f0af9c52036c366458462d91a3a6742d34c` |

## 🏆 Hackathon Notes
This project was built to demonstrate the power of Mantle's fast interaction speeds for gaming and simulation. By handling complex state changes (Freeze/Unfreeze) and dynamic NFT updates, we showcase how RWAs can be gamified to drive adoption.

---
*Built with ❤️ for the Mantle Hackathon*
