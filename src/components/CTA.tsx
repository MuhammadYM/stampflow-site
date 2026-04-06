import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section style={{
      padding: 'clamp(64px, 8vw, 96px) 24px',
      position: 'relative',
      overflow: 'hidden',
      textAlign: 'center',
    }}>
      {/* Glow */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse at center, rgba(96,128,255,0.09) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ position: 'relative', zIndex: 10, maxWidth: '600px', margin: '0 auto' }}
      >
        <h2 style={{
          fontSize: 'clamp(32px, 5vw, 52px)',
          fontWeight: 400,
          color: 'var(--text)',
          lineHeight: 1.15,
          marginBottom: '20px',
        }}>
          Ready to stamp your{' '}
          <em style={{
            fontFamily: "'Instrument Serif', serif",
            fontStyle: 'italic',
            fontWeight: 400,
          }}>
            authority?
          </em>
        </h2>

        <p style={{
          fontSize: '16px',
          color: 'var(--text-2)',
          lineHeight: 1.65,
          marginBottom: '36px',
        }}>
          Join professionals who certify documents with StampFlow every day.
        </p>

        <motion.a
          href="https://app.stampflow.xyz"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          style={{
            display: 'inline-block',
            backgroundColor: 'var(--accent)',
            color: '#fff',
            borderRadius: '9999px',
            padding: '16px 44px',
            fontSize: '15px',
            fontWeight: 500,
            textDecoration: 'none',
            cursor: 'pointer',
          }}
        >
          Get started free →
        </motion.a>
      </motion.div>
    </section>
  )
}
