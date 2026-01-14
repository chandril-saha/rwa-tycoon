'use client'

import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { useState, useEffect } from 'react'

export function ConnectWallet() {
  const { address, isConnected } = useAccount()
  const { connectors, connect } = useConnect()
  const { disconnect } = useDisconnect()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Prevent hydration mismatch by rendering default state until mounted
  if (!mounted) {
    return (
      <button
        className="btn btn-primary"
      >
        Connect Wallet
      </button>
    )
  }

  if (isConnected) {
    return (
      <div className="wallet-box">
        <span className="address-pill">
          {address?.slice(0, 6)}...{address?.slice(-4)}
        </span>
        <button
          onClick={() => disconnect()}
          className="btn-outline-danger"
          style={{ padding: '0.4rem 0.8rem', fontSize: '0.85rem' }}
        >
          Disconnect
        </button>
      </div>
    )
  }

  return (
    <button
      onClick={() => connect({ connector: connectors[0] })}
      className="btn btn-primary"
    >
      Connect Wallet
    </button>
  )
}
