export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      padding: '40px 24px',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '20px',
      }}>
        {/* Left: logo + name */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <img src="/logo.svg" alt="StampFlow" width={20} height={20} />
          <span style={{
            fontFamily: "'PT Mono', monospace",
            fontSize: '14px',
            color: 'var(--text-2)',
          }}>
            StampFlow
          </span>
        </div>

        {/* Center: copyright */}
        <p style={{
          fontSize: '12px',
          color: 'var(--text-3)',
        }}>
          © 2025 StampFlow. All rights reserved.
        </p>

        {/* Right: social icons */}
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          {[
            { id: 'github-icon', label: 'GitHub', href: '#' },
            { id: 'x-icon', label: 'X', href: '#' },
          ].map(icon => (
            <a
              key={icon.id}
              href={icon.href}
              aria-label={icon.label}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                opacity: 0.45,
                transition: 'opacity 0.15s',
                filter: 'invert(1)',
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '0.45')}
            >
              <svg width="18" height="18" aria-hidden="true">
                <use href={`/icons.svg#${icon.id}`} />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
