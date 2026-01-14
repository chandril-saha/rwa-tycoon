'use client'

import Link from 'next/link'
import { ConnectWallet } from './ConnectWallet'
import { usePathname } from 'next/navigation'

export function Navbar() {
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link href="/" style={{ fontSize: '1.5rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <img src="/icon.png" alt="Logo" style={{ height: '40px', width: 'auto' }} />
          <span className="text-gradient">RWA Tycoon</span>
        </Link>

        <div className="nav-links">
          <Link href="/dashboard" className={`nav-link ${isActive('/dashboard') ? 'active' : ''}`}>Dashboard</Link>
          <Link href="/mint" className={`nav-link ${isActive('/mint') ? 'active' : ''}`}>Mint RWA</Link>
          <Link href="/learn" className={`nav-link ${isActive('/learn') ? 'active' : ''}`}>Learn</Link>
          <Link href="/profile" className={`nav-link ${isActive('/profile') ? 'active' : ''}`}>Profile</Link>
        </div>

        <ConnectWallet />
      </div>
    </nav>
  )
}
