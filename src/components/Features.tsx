import { motion } from 'framer-motion'
import libraryImg from '../assets/feature-library.png'
import signImg from '../assets/feature-sign.png'
import fontsImg from '../assets/feature-fonts2.png'

const cards = [
  {
    img: libraryImg,
    title: 'Your stamps, organized.',
    desc: 'Build a personal library of signatures and stamps. Reuse them across any document, anytime.',
  },
  {
    img: signImg,
    title: 'Sign your way.',
    desc: 'Draw freehand with your mouse or choose from 99 premium fonts to create a typed signature.',
  },
  {
    img: fontsImg,
    title: 'Any font, any language.',
    desc: 'Upload your own font file or load from Google Fonts. Full support for Arabic, CJK, and 40+ scripts.',
  },
] as { img?: string; video?: string; title: string; desc: string }[]

export default function Features() {
  return (
    <section
      id="features"
      style={{ padding: '96px 24px', maxWidth: '1200px', margin: '0 auto' }}
    >
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        style={{
          fontSize: '11px',
          letterSpacing: '0.25em',
          textTransform: 'uppercase',
          color: 'var(--accent)',
          marginBottom: '16px',
        }}
      >
        Features
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.05 }}
        style={{
          fontSize: 'clamp(28px, 4vw, 40px)',
          fontWeight: 400,
          color: 'var(--text)',
          marginBottom: '64px',
          lineHeight: 1.2,
        }}
      >
        Everything you need to certify{' '}
        <em style={{
          fontFamily: "'Instrument Serif', serif",
          fontStyle: 'italic',
          fontWeight: 400,
        }}>
          any
        </em>{' '}
        document.
      </motion.h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridTemplateRows: 'auto auto',
        gap: '16px',
        maxWidth: '780px',
        margin: '0 auto',
      }}>
        {/* Card 0 — tall, spans 2 rows on left */}
        <motion.div
          key={cards[0].title}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          style={{
            backgroundColor: 'var(--surface)',
            borderRadius: '16px',
            overflow: 'hidden',
            border: '1px solid var(--border)',
            gridRow: '1 / 3',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div style={{ flex: 1, overflow: 'hidden', minHeight: '260px' }}>
            <img
              src={cards[0].img}
              alt={cards[0].title}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
          <div style={{ padding: '20px' }}>
            <h3 style={{ fontSize: '14px', fontWeight: 500, color: 'var(--text)', marginBottom: '6px' }}>
              {cards[0].title}
            </h3>
            <p style={{ fontSize: '12px', color: 'var(--text-2)', lineHeight: 1.6 }}>
              {cards[0].desc}
            </p>
          </div>
        </motion.div>

        {/* Cards 1 & 2 — stacked on right */}
        {[cards[1], cards[2]].map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: (i + 1) * 0.1 }}
            style={{
              backgroundColor: 'var(--surface)',
              borderRadius: '16px',
              overflow: 'hidden',
              border: '1px solid var(--border)',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div style={{ flexShrink: 0 }}>
              {card.video ? (
                <video
                  src={card.video}
                  autoPlay muted loop playsInline
                  style={{ width: '100%', display: 'block' }}
                />
              ) : (
                <img
                  src={card.img}
                  alt={card.title}
                  style={{ width: '100%', display: 'block' }}
                />
              )}
            </div>
            <div style={{ padding: '16px' }}>
              <h3 style={{ fontSize: '14px', fontWeight: 500, color: 'var(--text)', marginBottom: '6px' }}>
                {card.title}
              </h3>
              <p style={{ fontSize: '12px', color: 'var(--text-2)', lineHeight: 1.6 }}>
                {card.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
