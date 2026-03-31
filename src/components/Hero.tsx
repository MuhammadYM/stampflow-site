import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import heroImg from '../assets/hero.jpeg'

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })
  const imgY = useTransform(scrollYProgress, [0, 1], [0, -120])

  return (
    <section
      ref={sectionRef}
      id="hero"
      style={{
        minHeight: '100svh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '80px 24px 0',
      }}
    >
      {/* Content */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        position: 'relative',
        zIndex: 10,
        width: '100%',
        maxWidth: '800px',
      }}>
        {/* Beta pill */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0 }}
          className="liquid-glass"
          style={{
            borderRadius: '9999px',
            padding: '6px 16px',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '28px',
          }}
        >
          <span
            className="pulse-dot"
            style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              backgroundColor: 'var(--accent)',
              flexShrink: 0,
            }}
          />
          <span style={{ fontSize: '13px', color: 'var(--text-2)' }}>
            Now in public beta
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            fontSize: 'clamp(40px, 7vw, 72px)',
            fontWeight: 400,
            letterSpacing: '-2px',
            lineHeight: 1.08,
            color: 'var(--text)',
            marginBottom: '20px',
          }}
        >
          Sign with{' '}
          <em style={{
            fontFamily: "'Instrument Serif', serif",
            fontStyle: 'italic',
            fontWeight: 400,
          }}>
            authority.
          </em>
        </motion.h1>

        {/* Subline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            fontSize: 'clamp(15px, 2vw, 18px)',
            color: 'var(--text-2)',
            maxWidth: '520px',
            lineHeight: 1.65,
            marginBottom: '36px',
          }}
        >
          Create, place, and export professional digital signatures on any PDF —
          no account needed.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}
        >
          <motion.a
            href="https://app.stampflow.xyz"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            style={{
              backgroundColor: 'var(--accent)',
              color: '#fff',
              borderRadius: '9999px',
              padding: '12px 28px',
              fontSize: '14px',
              fontWeight: 500,
              textDecoration: 'none',
              cursor: 'pointer',
            }}
          >
            Try it free →
          </motion.a>
          <motion.a
            href="#how-it-works"
            className="liquid-glass"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            style={{
              borderRadius: '9999px',
              padding: '12px 28px',
              fontSize: '14px',
              color: 'var(--text-2)',
              textDecoration: 'none',
              cursor: 'pointer',
            }}
          >
            See how it works
          </motion.a>
        </motion.div>
      </div>

      {/* Product screenshot */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        style={{
          width: '100%',
          maxWidth: '960px',
          marginTop: '64px',
          position: 'relative',
          zIndex: 10,
        }}
      >
        <motion.img
          src={heroImg}
          alt="StampFlow app screenshot"
          style={{
            width: '100%',
            borderRadius: '16px',
            mixBlendMode: 'luminosity',
            opacity: 0.92,
            outline: '1px solid var(--border)',
            display: 'block',
            y: imgY,
          }}
        />
      </motion.div>

      {/* Bottom fade */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '200px',
        background: 'linear-gradient(to top, #08090f 0%, transparent 100%)',
        zIndex: 20,
        pointerEvents: 'none',
      }} />
    </section>
  )
}
