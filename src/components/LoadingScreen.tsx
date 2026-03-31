import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Props {
  onComplete: () => void
}

const WORDS = ['Sign.', 'Stamp.', 'Certify.']
const DURATION = 2500

export default function LoadingScreen({ onComplete }: Props) {
  const [progress, setProgress] = useState(0)
  const [wordIndex, setWordIndex] = useState(0)
  const onCompleteRef = useRef(onComplete)
  onCompleteRef.current = onComplete

  useEffect(() => {
    const start = performance.now()
    let raf: number

    const tick = (now: number) => {
      const elapsed = now - start
      const p = Math.min((elapsed / DURATION) * 100, 100)
      setProgress(p)

      if (p < 100) {
        raf = requestAnimationFrame(tick)
      } else {
        setTimeout(() => onCompleteRef.current(), 300)
      }
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])

  useEffect(() => {
    if (wordIndex >= WORDS.length - 1) return
    const t = setTimeout(() => setWordIndex(i => i + 1), 900)
    return () => clearTimeout(t)
  }, [wordIndex])

  return (
    <motion.div
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        backgroundColor: '#08090f',
        backgroundImage: `
          repeating-linear-gradient(45deg, rgba(96,128,255,0.035) 0px, rgba(96,128,255,0.035) 1px, transparent 1px, transparent 28px),
          repeating-linear-gradient(-45deg, rgba(96,128,255,0.035) 0px, rgba(96,128,255,0.035) 1px, transparent 1px, transparent 28px)
        `,
      }}
    >
      {/* Top-left label */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        style={{
          position: 'absolute',
          top: 32,
          left: 32,
          fontFamily: "'PT Mono', monospace",
          fontSize: '11px',
          letterSpacing: '0.3em',
          textTransform: 'uppercase',
          color: 'var(--text-3)',
        }}
      >
        StampFlow
      </motion.div>

      {/* Center word cycle */}
      <div style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <AnimatePresence mode="wait">
          <motion.span
            key={wordIndex}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 0.85, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontStyle: 'italic',
              fontSize: 'clamp(48px, 8vw, 80px)',
              color: 'var(--text)',
              lineHeight: 1,
            }}
          >
            {WORDS[wordIndex]}
          </motion.span>
        </AnimatePresence>
      </div>

      {/* Bottom-right counter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        style={{
          position: 'absolute',
          bottom: 32,
          right: 32,
          fontFamily: "'PT Mono', monospace",
          fontSize: 'clamp(64px, 10vw, 100px)',
          color: 'var(--text)',
          lineHeight: 1,
          fontVariantNumeric: 'tabular-nums',
        }}
      >
        {Math.round(progress).toString().padStart(3, '0')}
      </motion.div>

      {/* Bottom progress bar */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '2px',
        backgroundColor: 'var(--surface-2)',
      }}>
        <motion.div
          style={{
            height: '100%',
            transformOrigin: 'left',
            background: 'linear-gradient(90deg, #6080ff 0%, #7d96ff 100%)',
            boxShadow: '0 0 8px rgba(96, 128, 255, 0.4)',
            scaleX: progress / 100,
          }}
          transition={{ duration: 0.1, ease: 'linear' }}
        />
      </div>
    </motion.div>
  )
}
