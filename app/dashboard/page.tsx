'use client'

import { Navbar } from '@/components/Navbar'
import { useUserAssets } from '@/hooks/useUserAssets'
import { useAccount } from 'wagmi'
import Link from 'next/link'
import { GAME_ENGINE_ABI, GAME_ENGINE_ADDRESS, ASSET_NFT_ABI, ASSET_NFT_ADDRESS } from '@/abis'
import { useWriteContract, useWaitForTransactionReceipt } from 'wagmi'
import { useState, useEffect } from 'react'

export default function DashboardPage() {
  const { assets, isLoading: assetsLoading, refetch } = useUserAssets()
  const { isConnected, address } = useAccount()
  const { writeContract, data: hash, isPending } = useWriteContract()
  const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({ hash })

  // Auto-refresh when transaction confirms
  useEffect(() => {
    if (isSuccess) {
      refetch()
    }
  }, [isSuccess, refetch])

  // Simulator helper
  const triggerEvent = (tokenId: bigint, eventType: number) => {
    writeContract({
      address: GAME_ENGINE_ADDRESS,
      abi: GAME_ENGINE_ABI,
      functionName: 'applyEvent',
      args: [tokenId, eventType]
    })
  }

  const burnAsset = (tokenId: bigint) => {
    if (!address) return
    writeContract({
      address: ASSET_NFT_ADDRESS,
      abi: ASSET_NFT_ABI,
      functionName: 'safeTransferFrom',
      args: [
        address,
        '0x000000000000000000000000000000000000dEaD',
        tokenId
      ]
    })
  }

  const unfreezeAsset = (tokenId: bigint) => {
    writeContract({
      address: ASSET_NFT_ADDRESS,
      abi: ASSET_NFT_ABI,
      functionName: 'unfreezeAsset',
      args: [tokenId]
    })
  }

  const handleMaintenance = (asset: any) => {
    // Logic: Reduce Risk level. Every 5th maintenance, increase yield.
    const key = `maintenance_count_${asset.id}`
    const currentCount = parseInt(localStorage.getItem(key) || '0')
    const newCount = currentCount + 1
    localStorage.setItem(key, newCount.toString())

    // Check for Yield Boost (Every 5th time)
    if (newCount % 5 === 0) {
      const newYield = Number(asset.yieldRate) + 50 // +0.5%
      writeContract({
        address: ASSET_NFT_ADDRESS,
        abi: ASSET_NFT_ABI,
        functionName: 'updateYield',
        args: [asset.id, BigInt(newYield)]
      })
      // Note: We could also update Risk here, but forcing 2 txs is bad UX. 
      // We assume a Yield boost implies the asset is in top shape (Low Risk).
      // Ideally we'd batch, but for this demo, Yield Boost takes precedence.
      return
    }

    // Normal Maintenance: Improve Risk
    let newRisk = asset.riskLevel
    if (asset.riskLevel === 'High') newRisk = 'Medium'
    else if (asset.riskLevel === 'Medium') newRisk = 'Low'
    else {
      // If already Low, maybe trigger the standard event just to log it
      triggerEvent(asset.id, 2)
      return
    }

    writeContract({
      address: ASSET_NFT_ADDRESS,
      abi: ASSET_NFT_ABI,
      functionName: 'updateRisk',
      args: [asset.id, newRisk]
    })
  }

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  if (!isConnected) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Navbar />
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <p style={{ fontSize: '1.25rem', color: '#94a3b8' }}>Please connect your wallet to view dashboard.</p>
        </div>
      </div>
    )
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <div className="page-container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <h1 className="page-title" style={{ marginBottom: 0 }}>Your Assets</h1>
          <Link href="/learn" className="btn-glass">
            <span>Need help understanding?</span>
            <span style={{ fontSize: '1.2rem' }}>💡</span>
          </Link>
        </div>

        {assetsLoading ? (
          <div style={{ textAlign: 'center', padding: '5rem', color: '#94a3b8' }}>Loading assets...</div>
        ) : assets && assets.length > 0 ? (
          <div className="card-grid">
            {assets.map((asset: any, index: number) => (
              <div key={asset.id} className="asset-card">
                <div className={`status-badge ${asset.isFrozen ? 'status-frozen' : 'status-active'}`}>
                  {asset.isFrozen ? 'FROZEN' : 'ACTIVE'}
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.25rem' }}>{asset.assetType}</h3>
                  <p style={{ fontSize: '0.8rem', color: '#64748b' }}>Asset #{index + 1} <span style={{ opacity: 0.5, fontSize: '0.7em' }}>(ID: {asset.id.toString()})</span></p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <div className="detail-row">
                    <span className="detail-label">Yield Rate</span>
                    <span className="detail-value" style={{ color: '#34d399' }}>{(Number(asset.yieldRate) / 100).toFixed(2)}%</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">Risk Level</span>
                    <span className={`detail-value ${asset.riskLevel === 'High' ? 'text-red-400' :
                      asset.riskLevel === 'Medium' ? 'text-yellow-400' : 'text-emerald-400'
                      }`} style={{
                        color: asset.riskLevel === 'High' ? '#f87171' : asset.riskLevel === 'Medium' ? '#facc15' : '#34d399'
                      }}>
                      {asset.riskLevel}
                    </span>
                  </div>
                </div>

                <div className="simulation-controls">
                  {asset.isFrozen ? (
                    <div style={{ textAlign: 'center', padding: '1rem', background: 'rgba(239, 68, 68, 0.1)', borderRadius: '8px', border: '1px solid rgba(239, 68, 68, 0.2)' }}>
                      <p style={{ color: '#ef4444', fontWeight: 'bold', marginBottom: '0.5rem' }}>⚠️ ASSET FROZEN</p>
                      <p style={{ fontSize: '0.8rem', color: '#fca5a5', marginBottom: '1rem' }}>Operations halted due to regulatory freeze.</p>
                      <button
                        onClick={() => unfreezeAsset(asset.id)}
                        className="sim-btn"
                        style={{ width: '100%', background: '#ef4444', color: 'white' }}
                      >
                        ⚖️ Resolve Legal Issue
                      </button>
                    </div>
                  ) : (
                    <>
                      <p style={{ fontSize: '0.75rem', textAlign: 'center', color: '#64748b', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Simulate Event</p>
                      <div className="sim-btn-grid">
                        <button onClick={() => triggerEvent(asset.id, 0)} className="sim-btn sim-btn-red">Missed Payment</button>
                        <button onClick={() => triggerEvent(asset.id, 3)} className="sim-btn sim-btn-emerald">Upgrade</button>
                        <button onClick={() => triggerEvent(asset.id, 1)} className="sim-btn sim-btn-yellow">Reg. Freeze</button>
                        <button onClick={() => handleMaintenance(asset)} className="sim-btn sim-btn-blue">Maintenance</button>
                      </div>
                    </>
                  )}
                </div>

                <div style={{ marginTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '1rem' }}>
                  <button
                    onClick={() => burnAsset(asset.id)}
                    className="sim-btn"
                    style={{
                      width: '100%',
                      background: 'rgba(239, 68, 68, 0.1)',
                      color: '#ef4444',
                      border: '1px solid rgba(239, 68, 68, 0.2)'
                    }}
                  >
                    🗑️ Burn Asset
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div style={{
            textAlign: 'center',
            padding: '5rem',
            background: 'rgba(255,255,255,0.02)',
            borderRadius: '16px',
            border: '1px dashed rgba(255,255,255,0.1)'
          }}>
            <p style={{ fontSize: '1.25rem', marginBottom: '1.5rem', color: '#94a3b8' }}>You don't own any RWA simulations yet.</p>
            <Link href="/mint" className="btn btn-primary">Mint Your First Asset</Link>
          </div>
        )}
      </div>
    </div>
  )
}
