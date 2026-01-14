import { Navbar } from '@/components/Navbar'
import Link from 'next/link'

export default function Home() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />

      <main className="hero-section">
        {/* Background Gradients */}
        <div style={{ position: 'absolute', top: '20%', left: '20%', width: '300px', height: '300px', background: 'rgba(16, 185, 129, 0.15)', filter: 'blur(100px)', borderRadius: '50%', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '20%', right: '20%', width: '400px', height: '400px', background: 'rgba(59, 130, 246, 0.15)', filter: 'blur(100px)', borderRadius: '50%', pointerEvents: 'none' }} />

        <div className="hero-badge">
          <span style={{ width: '8px', height: '8px', backgroundColor: '#34d399', borderRadius: '50%' }} />
          Live on Mantle Testnet
        </div>

        <h1 className="hero-title">
          Real World Assets<br />
          <span className="text-gradient">Simulated On-Chain</span>
        </h1>

        <p className="hero-desc">
          Master the complexities of RWA management without the financial risk.
          Mint assets, handle regulations, and optimize your yield in a gamified environment.
        </p>

        <div className="hero-actions">
          <Link href="/mint" className="btn btn-primary">
            Start Simulation
          </Link>
          <Link href="/dashboard" className="btn btn-secondary">
            View Dashboard
          </Link>
        </div>

        <div className="features-grid">
          <FeatureCard
            icon="🏙️"
            title="Asset Tokenization"
            desc="Mint realistic representations of Real Estate, Solar Plants, and Invoice Pools."
          />
          <FeatureCard
            icon="📈"
            title="Yield Dynamics"
            desc="Watch your yield rate fluctuate based on verified on-chain events."
          />
          <FeatureCard
            icon="🚦"
            title="Compliance & Risk"
            desc="Navigate regulation freezes and maintenance costs to maintain your reputation."
          />
        </div>
      </main>
    </div>
  )
}

function FeatureCard({ icon, title, desc }: { icon: string, title: string, desc: string }) {
  return (
    <div className="feature-card">
      <div className="feature-icon">
        {icon}
      </div>
      <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{title}</h3>
      <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>{desc}</p>
    </div>
  )
}
