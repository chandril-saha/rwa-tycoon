'use client'

import { useState, useEffect } from 'react'
import { Navbar } from '@/components/Navbar'
import { useAccount, useWriteContract, useWaitForTransactionReceipt } from 'wagmi'
import { ASSET_NFT_ABI, ASSET_NFT_ADDRESS } from '@/abis'
import { useRouter } from 'next/navigation'

const ASSET_TYPES = [
  { id: 'rental-property', name: 'Rental Property', yield: 500, risk: 'Medium', icon: '🏠' },
  { id: 'solar-plant', name: 'Solar Power Plant', yield: 800, risk: 'Low', icon: '☀️' },
  { id: 'invoice-pool', name: 'Invoice Factoring Pool', yield: 1200, risk: 'High', icon: '📄' },
  { id: 'coworking', name: 'Co-working Space', yield: 600, risk: 'Medium', icon: '🏢' },
]

export default function MintPage() {
  const [selectedAsset, setSelectedAsset] = useState(ASSET_TYPES[0])
  const { address } = useAccount()
  const { writeContract, data: hash, isPending } = useWriteContract()
  const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({ hash })
  const router = useRouter()

  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  const handleMint = async () => {
    if (!address) return
    writeContract({
      address: ASSET_NFT_ADDRESS,
      abi: ASSET_NFT_ABI,
      functionName: 'mintAsset',
      args: [
        address,
        selectedAsset.name,
        BigInt(selectedAsset.yield),
        selectedAsset.risk,
        'https://example.com/metadata.json'
      ]
    })
  }

  if (!mounted) return null

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <div className="page-container" style={{ alignItems: 'center' }}>
        <h1 className="page-title" style={{ textAlign: 'center', marginTop: '2rem' }}>Mint New RWA</h1>
        <p style={{ color: '#94a3b8', maxWidth: '900px', textAlign: 'center', marginBottom: '1rem', fontSize: '1.15rem' }}>
          Select a Real World Asset type below to tokenize it on the Mantle blockchain.
        </p>

        <div className="mint-grid">
          {ASSET_TYPES.map((asset) => (
            <div
              key={asset.id}
              onClick={() => setSelectedAsset(asset)}
              className={`mint-card ${selectedAsset.id === asset.id ? 'selected' : ''}`}
            >
              <div className="mint-icon">{asset.icon}</div>
              <h3 className="mint-title">{asset.name}</h3>

              <div className="mint-details">
                <div className="mint-row">
                  <span style={{ color: '#94a3b8' }}>Yield</span>
                  <span style={{ color: '#34d399', fontWeight: 'bold' }}>{asset.yield / 100}%</span>
                </div>
                <div className="mint-row">
                  <span style={{ color: '#94a3b8' }}>Risk</span>
                  <span style={{
                    fontWeight: 'bold',
                    color: asset.risk === 'High' ? '#f87171' : asset.risk === 'Medium' ? '#facc15' : '#34d399'
                  }}>
                    {asset.risk}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ width: '100%', maxWidth: '400px', textAlign: 'center', marginBottom: '2rem' }}>
          <button
            disabled={isPending || isConfirming || !address}
            onClick={handleMint}
            className="btn btn-primary"
            style={{ width: '100%', fontSize: '1.2rem', padding: '1.2rem' }}
          >
            {!address ? 'Connect Wallet First' : isPending ? 'Minting...' : isConfirming ? 'Confirming...' : `Mint ${selectedAsset.name}`}
          </button>

          {isSuccess && (
            <div style={{
              marginTop: '1.5rem',
              padding: '1rem',
              background: 'rgba(16, 185, 129, 0.1)',
              border: '1px solid rgba(16, 185, 129, 0.2)',
              borderRadius: '8px',
              color: '#34d399',
              display: 'flex',
              gap: '0.5rem',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <span>✅</span> Successfully minted! Check Dashboard.
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
