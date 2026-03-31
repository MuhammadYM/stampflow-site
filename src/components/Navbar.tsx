import { motion } from 'framer-motion'

const logoPath = '/logo.svg'

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="liquid-glass"
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '14px 24px',
      }}
    >
      {/* Logo */}
      <a
        href="/"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          textDecoration: 'none',
        }}
      >
        <img src={logoPath} alt="StampFlow" width={26} height={26} />
        <span style={{
          fontFamily: "'PT Mono', monospace",
          fontSize: '17px',
          color: 'var(--text)',
          lineHeight: 1,
        }}>
          StampFlow
        </span>
      </a>

      {/* Center nav links */}
      <div style={{
        display: 'none',
        gap: '32px',
        alignItems: 'center',
      }} className="md-nav">
        {['Features', 'How it works', 'Reviews'].map(link => (
          <a
            key={link}
            href={`#${link.toLowerCase().replace(/ /g, '-')}`}
            style={{
              fontSize: '14px',
              color: 'var(--text-2)',
              textDecoration: 'none',
              transition: 'color 0.15s',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-2)')}
          >
            {link}
          </a>
        ))}
      </div>

      {/* CTA */}
      <motion.a
        href="https://app.stampflow.xyz"
        target="_blank"
        rel="noopener noreferrer"
        className="liquid-glass"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        style={{
          borderRadius: '9999px',
          padding: '8px 20px',
          fontSize: '14px',
          fontWeight: 500,
          color: 'var(--text)',
          textDecoration: 'none',
          cursor: 'pointer',
        }}
      >
        Open App →
      </motion.a>

      <style>{`
        @media (min-width: 768px) {
          .md-nav { display: flex !important; }
        }
      `}</style>
    </motion.nav>
  )
}
