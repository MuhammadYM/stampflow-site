import { motion } from 'framer-motion'

const steps = [
  {
    n: '01',
    title: 'Upload your PDF',
    desc: 'Drag and drop or click to upload. StampFlow renders your document instantly, page by page.',
  },
  {
    n: '02',
    title: 'Create your stamp',
    desc: 'Draw your signature, type it in a font you love, or upload an existing stamp image.',
  },
  {
    n: '03',
    title: 'Download and certify',
    desc: 'Place your stamps precisely, resize as needed, then export a print-ready PDF in one click.',
  },
]

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      style={{ padding: '96px 24px', maxWidth: '720px', margin: '0 auto' }}
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
        How it works
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
        Three steps to a certified document.
      </motion.h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
        {steps.map((step, i) => (
          <motion.div
            key={step.n}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: i * 0.12 }}
          >
            <div style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '32px',
              padding: '48px 0',
            }}>
              <span style={{
                fontFamily: "'PT Mono', monospace",
                fontSize: '52px',
                fontWeight: 300,
                color: 'var(--border-hi)',
                lineHeight: 1,
                flexShrink: 0,
                width: '72px',
              }}>
                {step.n}
              </span>
              <div style={{ flex: 1 }}>
                <h3 style={{
                  fontSize: '18px',
                  fontWeight: 500,
                  color: 'var(--text)',
                  marginBottom: '10px',
                }}>
                  {step.title}
                </h3>
                <p style={{
                  fontSize: '14px',
                  color: 'var(--text-2)',
                  lineHeight: 1.7,
                }}>
                  {step.desc}
                </p>
              </div>
            </div>
            {i < steps.length - 1 && (
              <div style={{
                height: '1px',
                backgroundColor: 'var(--border)',
              }} />
            )}
          </motion.div>
        ))}
      </div>
    </section>
  )
}
