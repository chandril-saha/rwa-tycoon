'use client'

import { Navbar } from '@/components/Navbar'

export default function LearnPage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <div className="page-container">

        {/* Header Section */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h1 className="page-title" style={{ marginBottom: '1rem' }}>RWA Knowledge Hub</h1>
          <p style={{ color: '#94a3b8', maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>
            Master the art of Real World Asset management. Understand the mechanics, risks, and strategies to become a tycoon.
          </p>
        </div>

        {/* Section 1: RWA 101 */}
        <div style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#fff', borderLeft: '4px solid #3b82f6', paddingLeft: '1rem' }}>
            1. What are RWAs?
          </h2>
          <div style={{
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(10px)',
            padding: '2rem',
            borderRadius: '16px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            lineHeight: '1.8',
            color: '#e2e8f0'
          }}>
            <p style={{ marginBottom: '1rem' }}>
              <strong style={{ color: '#93c5fd' }}>Real World Assets (RWAs)</strong> are physical assets—like real estate, commodities, or art—that are tokenized and brought onto the blockchain.
            </p>
            <p>
              By tokenizing them (turning them into NFTs or tokens), we can trade them instantly, fractionalize ownership (so you can buy 1/100th of a house), and automate processes like rent collection and maintenance using smart contracts. In **RWA Tycoon**, you are simulating this role of an Asset Manager on chain.
            </p>
          </div>
        </div>

        {/* Section 2: Getting Started */}
        <div style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#fff', borderLeft: '4px solid #f59e0b', paddingLeft: '1rem' }}>
            2. Getting Started
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>

            {/* Wallet */}
            <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '2rem', borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#fbbf24', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span>👛</span> Connecting Wallet
              </h3>
              <p style={{ color: '#cbd5e1', lineHeight: '1.6', fontSize: '0.95rem' }}>
                <strong style={{ color: '#fff' }}>Think of this as "Logging In" or swiping your keycard.</strong>
                <br /><br />
                Your wallet (like MetaMask) is your digital identity. By connecting it, you prove you are the manager. It holds your funds (ETH/MNT) and stores your Assets (NFTs) safely.
              </p>
            </div>

            {/* Minting */}
            <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '2rem', borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#34d399', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span>✨</span> What is "Minting"?
              </h3>
              <p style={{ color: '#cbd5e1', lineHeight: '1.6', fontSize: '0.95rem' }}>
                <strong style={{ color: '#fff' }}>It implies "Creating the Deed".</strong>
                <br /><br />
                In the real world, you sign papers to buy a house. On the blockchain, you "Mint" a token. This process writes a permanent record on the ledger saying <em>"This asset belongs to YOU."</em>
              </p>
            </div>

          </div>
        </div>

        {/* Section 3: Game Mechanics */}
        <div style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#fff', borderLeft: '4px solid #10b981', paddingLeft: '1rem' }}>
            3. Tycoon Mechanics
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>

            <div style={{ background: 'rgba(16, 185, 129, 0.1)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#34d399', marginBottom: '0.5rem' }}>Yield Rate</h3>
              <p style={{ fontSize: '0.9rem', color: '#d1fae5', lineHeight: '1.6' }}>
                Think of this as your **ROI** (Return on Investment) or Cap Rate. It represents the annual percentage (APY) your asset earns. Higher is better, but often comes with higher risk.
              </p>
            </div>

            <div style={{ background: 'rgba(245, 158, 11, 0.1)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(245, 158, 11, 0.2)' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#fbbf24', marginBottom: '0.5rem' }}>Risk Level</h3>
              <p style={{ fontSize: '0.9rem', color: '#fef3c7', lineHeight: '1.6' }}>
                The stability of your asset.
                <br />• <span style={{ color: '#34d399' }}>Low</span>: Stable, consistent.
                <br />• <span style={{ color: '#facc15' }}>Medium</span>: Standard market volatility.
                <br />• <span style={{ color: '#f87171' }}>High</span>: Prone to defaults or issues.
              </p>
            </div>

            <div style={{ background: 'rgba(139, 92, 246, 0.1)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(139, 92, 246, 0.2)' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#a78bfa', marginBottom: '0.5rem' }}>Reputation</h3>
              <p style={{ fontSize: '0.9rem', color: '#ede9fe', lineHeight: '1.6' }}>
                Your "Credit Score". It grows as you manage more assets effectively. High reputation (High Yield + Safe Assets) proves you are a top-tier manager. Frozen or risky assets hurt your score.
              </p>
            </div>

          </div>
        </div>

        {/* Section 4: Simulation Guide */}
        <div>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#fff', borderLeft: '4px solid #ef4444', paddingLeft: '1rem' }}>
            4. Simulation Intelligence
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

            {/* Event: Missed Payment */}
            <div className="sim-guide-card" style={{ display: 'grid', gridTemplateColumns: 'minmax(200px, 1fr) 2fr', gap: '2rem', background: 'rgba(255,255,255,0.03)', padding: '2rem', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <div>
                <div style={{ display: 'inline-block', padding: '0.5rem 1rem', background: 'rgba(239, 68, 68, 0.2)', color: '#f87171', borderRadius: '8px', fontWeight: 'bold', marginBottom: '1rem' }}>
                  🔴 Missed Payment
                </div>
                <h4 style={{ color: '#94a3b8', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>The Scenario</h4>
                <p style={{ fontSize: '0.95rem', color: '#cbd5e1' }}>
                  A tenant loses their job, a commercial lease defaults, or an invoice is not paid on time.
                </p>
              </div>
              <div style={{ borderLeft: '1px solid rgba(255,255,255,0.1)', paddingLeft: '2rem' }}>
                <h4 style={{ color: '#94a3b8', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>App Consequence</h4>
                <ul style={{ listStyle: 'none', padding: 0, color: '#e2e8f0' }}>
                  <li style={{ marginBottom: '0.5rem' }}>📉 <strong>Yield:</strong> Drops by 1% (100 basis points).</li>
                  <li>⚠️ <strong>Risk:</strong> Immediately spikes to <span style={{ color: '#f87171' }}>HIGH</span>.</li>
                </ul>
                <p style={{ marginTop: '1rem', fontSize: '0.85rem', color: '#64748b', fontStyle: 'italic' }}>
                  "Lesson: Cash flow is crucial. One default can ruin your stability."
                </p>
              </div>
            </div>

            {/* Event: Upgrade */}
            <div className="sim-guide-card" style={{ display: 'grid', gridTemplateColumns: 'minmax(200px, 1fr) 2fr', gap: '2rem', background: 'rgba(255,255,255,0.03)', padding: '2rem', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <div>
                <div style={{ display: 'inline-block', padding: '0.5rem 1rem', background: 'rgba(16, 185, 129, 0.2)', color: '#34d399', borderRadius: '8px', fontWeight: 'bold', marginBottom: '1rem' }}>
                  🟢 Upgrade
                </div>
                <h4 style={{ color: '#94a3b8', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>The Scenario</h4>
                <p style={{ fontSize: '0.95rem', color: '#cbd5e1' }}>
                  You renovate a property, install solar panels, or upgrade facility equipment to increase efficiency.
                </p>
              </div>
              <div style={{ borderLeft: '1px solid rgba(255,255,255,0.1)', paddingLeft: '2rem' }}>
                <h4 style={{ color: '#94a3b8', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>App Consequence</h4>
                <ul style={{ listStyle: 'none', padding: 0, color: '#e2e8f0' }}>
                  <li style={{ marginBottom: '0.5rem' }}>📈 <strong>Yield:</strong> Increases by 1.5%.</li>
                  <li>🛡️ <strong>Risk:</strong> Improves to <span style={{ color: '#34d399' }}>LOW</span>.</li>
                </ul>
                <p style={{ marginTop: '1rem', fontSize: '0.85rem', color: '#64748b', fontStyle: 'italic' }}>
                  "Lesson: Investing in your asset increases value and reduces long-term headaches."
                </p>
              </div>
            </div>

            {/* Event: Freeze */}
            <div className="sim-guide-card" style={{ display: 'grid', gridTemplateColumns: 'minmax(200px, 1fr) 2fr', gap: '2rem', background: 'rgba(255,255,255,0.03)', padding: '2rem', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <div>
                <div style={{ display: 'inline-block', padding: '0.5rem 1rem', background: 'rgba(250, 204, 21, 0.2)', color: '#facc15', borderRadius: '8px', fontWeight: 'bold', marginBottom: '1rem' }}>
                  🟡 Regulation Freeze
                </div>
                <h4 style={{ color: '#94a3b8', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>The Scenario</h4>
                <p style={{ fontSize: '0.95rem', color: '#cbd5e1' }}>
                  Government zoning changes, failed compliance checks, or legal disputes halt operations.
                </p>
              </div>
              <div style={{ borderLeft: '1px solid rgba(255,255,255,0.1)', paddingLeft: '2rem' }}>
                <h4 style={{ color: '#94a3b8', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>App Consequence</h4>
                <ul style={{ listStyle: 'none', padding: 0, color: '#e2e8f0' }}>
                  <li style={{ marginBottom: '0.5rem' }}>❄️ <strong>Status:</strong> Asset becomes <span style={{ color: '#facc15' }}>FROZEN</span>.</li>
                  <li>⛔ <strong>Action:</strong> All simulations BLOCKED until you pay/resolve the legal issue.</li>
                </ul>
                <p style={{ marginTop: '1rem', fontSize: '0.85rem', color: '#64748b', fontStyle: 'italic' }}>
                  "Lesson: Regulatory compliance is not optional. Ignoring it stops business."
                </p>
              </div>
            </div>

            {/* Event: Maintenance */}
            <div className="sim-guide-card" style={{ display: 'grid', gridTemplateColumns: 'minmax(200px, 1fr) 2fr', gap: '2rem', background: 'rgba(255,255,255,0.03)', padding: '2rem', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <div>
                <div style={{ display: 'inline-block', padding: '0.5rem 1rem', background: 'rgba(59, 130, 246, 0.2)', color: '#60a5fa', borderRadius: '8px', fontWeight: 'bold', marginBottom: '1rem' }}>
                  🔵 Maintenance
                </div>
                <h4 style={{ color: '#94a3b8', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>The Scenario</h4>
                <p style={{ fontSize: '0.95rem', color: '#cbd5e1' }}>
                  Routine inspections, painting, cleaning, and minor repairs.
                </p>
              </div>
              <div style={{ borderLeft: '1px solid rgba(255,255,255,0.1)', paddingLeft: '2rem' }}>
                <h4 style={{ color: '#94a3b8', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>App Consequence</h4>
                <ul style={{ listStyle: 'none', padding: 0, color: '#e2e8f0' }}>
                  <li style={{ marginBottom: '0.5rem' }}>🛡️ <strong>Risk Stabilizer:</strong> Reduces Risk (High ➔ Medium ➔ Low).</li>
                  <li>🎁 <strong>Loyalty Bonus:</strong> Every 5th maintenance boosts <span style={{ color: '#34d399' }}>Yield (+0.5%)</span>.</li>
                </ul>
                <p style={{ marginTop: '1rem', fontSize: '0.85rem', color: '#64748b', fontStyle: 'italic' }}>
                  "Lesson: Consistent care prevents disaster and adds long-term value."
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}
