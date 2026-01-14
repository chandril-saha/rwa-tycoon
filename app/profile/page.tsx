'use client'

import { Navbar } from '@/components/Navbar'
import { useAccount } from 'wagmi'
import { useUserAssets } from '@/hooks/useUserAssets'
import { useState, useEffect } from 'react'

export default function ProfilePage() {
  const { address, isConnected } = useAccount()
  const { assets, balance } = useUserAssets()

  // Realistic Reputation Calculation
  // Base: 100
  // + Yield Bonus: 1 point for every 100 basis points of yield (sum of all assets)
  // + Low Risk Bonus: 5 points per Low risk asset
  // - Frozen Penalty: 20 points per Frozen asset
  // - High Risk Penalty: 5 points per High risk asset

  const reputation = assets ? assets.reduce((acc: number, asset: any) => {
    let score = acc

    // Yield contribution
    score += Math.floor(Number(asset.yieldRate) / 100)

    // Status penalties/bonuses
    if (asset.isFrozen) {
      score -= 20
    } else {
      if (asset.riskLevel === 'Low') score += 5
      if (asset.riskLevel === 'High') score -= 5
    }

    return score
  }, 100) : 100

  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  if (!isConnected) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Navbar />
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <p style={{ fontSize: '1.25rem', color: '#94a3b8' }}>Please connect your wallet.</p>
        </div>
      </div>
    )
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <div className="page-container" style={{ alignItems: 'center' }}>

        <div style={{
          background: 'rgba(30, 41, 59, 0.4)',
          backdropFilter: 'blur(16px)',
          border: '1px solid rgba(255, 255, 255, 0.05)',
          borderRadius: '20px',
          padding: '3rem',
          width: '100%',
          maxWidth: '600px',
          textAlign: 'center'
        }}>
          <div style={{
            width: '100px',
            height: '100px',
            background: 'linear-gradient(135deg, #10b981, #3b82f6)',
            borderRadius: '50%',
            margin: '0 auto 1.5rem auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '2.5rem',
            boxShadow: '0 8px 24px rgba(16, 185, 129, 0.3)'
          }}>
            👤
          </div>

          <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#fff' }}>Tycoon Profile</h1>
          <p style={{ fontFamily: 'monospace', color: '#94a3b8', marginBottom: '2.5rem', background: 'rgba(0,0,0,0.2)', display: 'inline-block', padding: '0.25rem 0.75rem', borderRadius: '4px' }}>
            {address}
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            <div style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '1.5rem', borderRadius: '12px' }}>
              <span style={{ display: 'block', fontSize: '2.5rem', fontWeight: 'bold', color: '#34d399', marginBottom: '0.25rem' }}>
                {balance}
              </span>
              <span style={{ fontSize: '0.8rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Assets Managed
              </span>
            </div>

            <div style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '1.5rem', borderRadius: '12px' }}>
              <span style={{ display: 'block', fontSize: '2.5rem', fontWeight: 'bold', color: '#8b5cf6', marginBottom: '0.25rem' }}>
                {reputation}
              </span>
              <span style={{ fontSize: '0.8rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Reputation Score
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
