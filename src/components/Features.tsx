import { motion } from 'framer-motion'
import libraryImg from '../assets/stamplibrary.gif'
import typeImg from '../assets/feature-type.png'
import fontsImg from '../assets/feature-fonts.png'

const cards = [
  {
    img: libraryImg,
    title: 'Your stamps, organized.',
    desc: 'Build a personal library of signatures and stamps. Reuse them across any document, anytime.',
  },
  {
    img: typeImg,
    title: 'Sign your way.',
    desc: 'Draw freehand with your mouse or choose from 99 premium fonts to create a typed signature.',
  },
  {
    img: fontsImg,
    title: 'Any font, any language.',
    desc: 'Upload your own font file or load from Google Fonts. Full support for Arabic, CJK, and 40+ scripts.',
  },
]

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
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '20px',
      }}>
        {cards.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: i * 0.1 }}
            style={{
              backgroundColor: 'var(--surface)',
              borderRadius: '16px',
              overflow: 'hidden',
              border: '1px solid var(--border)',
            }}
          >
            <div style={{
              width: '100%',
              height: '140px',
              overflow: 'hidden',
              backgroundColor: 'var(--surface-2)',
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'center',
            }}>
              <img
                src={card.img}
                alt={card.title}
                style={{
                  width: '100%',
                  objectFit: i === 0 ? 'contain' : 'cover',
                  objectPosition: 'top center',
                  height: '100%',
                }}
              />
            </div>
            <div style={{ padding: '24px' }}>
              <h3 style={{
                fontSize: '15px',
                fontWeight: 500,
                color: 'var(--text)',
                marginBottom: '8px',
              }}>
                {card.title}
              </h3>
              <p style={{
                fontSize: '13px',
                color: 'var(--text-2)',
                lineHeight: 1.65,
              }}>
                {card.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
