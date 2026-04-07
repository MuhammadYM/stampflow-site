import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { track } from '../analytics'

const logoPath = '/logo.svg'
const navLinks = ['Features', 'How it works', 'Reviews']

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="liquid-glass"
      style={{ position: 'sticky', top: 0, zIndex: 50 }}
    >
      {/* Main row */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '14px 24px',
      }}>
        {/* Logo */}
        <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
          <img src={logoPath} alt="StampFlow" width={26} height={26} />
          <span style={{ fontFamily: "'PT Mono', monospace", fontSize: '17px', color: 'var(--text)', lineHeight: 1 }}>
            StampFlow
          </span>
        </a>

        {/* Center nav links (desktop) */}
        <div style={{ display: 'none', gap: '32px', alignItems: 'center' }} className="md-nav">
          {navLinks.map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/ /g, '-')}`}
              onClick={() => track('nav_link_clicked', { label: link.toLowerCase().replace(/ /g, '_'), location: 'navbar' })}
              style={{ fontSize: '14px', color: 'var(--text-2)', textDecoration: 'none', transition: 'color 0.15s' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-2)')}
            >
              {link}
            </a>
          ))}
        </div>

        {/* Right: CTA + hamburger */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <motion.a
            href="https://app.stampflow.xyz"
            target="_blank"
            rel="noopener noreferrer"
            className="liquid-glass"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => track('cta_clicked', { label: 'open_app', location: 'navbar' })}
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

          {/* Hamburger — mobile only */}
          <button
            className="hamburger-btn"
            onClick={() => { const next = !open; setOpen(next); track('mobile_menu_toggled', { state: next ? 'open' : 'closed' }) }}
            aria-label={open ? 'Close menu' : 'Open menu'}
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '4px',
              color: 'var(--text-2)',
              lineHeight: 0,
            }}
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
              {open ? (
                <>
                  <line x1="4" y1="4" x2="18" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <line x1="18" y1="4" x2="4" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </>
              ) : (
                <>
                  <line x1="3" y1="7" x2="19" y2="7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <line x1="3" y1="13" x2="19" y2="13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: 'easeInOut' }}
            style={{ overflow: 'hidden', borderTop: '1px solid var(--border)' }}
          >
            <div style={{ padding: '8px 24px 16px', display: 'flex', flexDirection: 'column' }}>
              {navLinks.map((link, i) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase().replace(/ /g, '-')}`}
                  onClick={() => { setOpen(false); track('nav_link_clicked', { label: link.toLowerCase().replace(/ /g, '_'), location: 'mobile_menu' }) }}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.18, delay: i * 0.05 }}
                  style={{
                    fontSize: '15px',
                    color: 'var(--text-2)',
                    textDecoration: 'none',
                    padding: '12px 0',
                    borderBottom: i < navLinks.length - 1 ? '1px solid var(--border)' : 'none',
                    transition: 'color 0.15s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-2)')}
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 768px) {
          .md-nav { display: flex !important; }
          .hamburger-btn { display: none !important; }
        }
        @media (max-width: 767px) {
          .hamburger-btn { display: flex !important; }
        }
      `}</style>
    </motion.nav>
  )
}
