import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const QUOTE =
  'StampFlow saved our team hours every week. What used to take a back-and-forth with legal now takes thirty seconds. It just works.'

const words = QUOTE.split(' ')

function WordSpan({ word, index, total, scrollYProgress }: {
  word: string
  index: number
  total: number
  scrollYProgress: ReturnType<typeof useScroll>['scrollYProgress']
}) {
  const start = index / total
  const end = Math.min((index + 1) / total, 1)
  const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1])
  const color = useTransform(
    scrollYProgress,
    [start, end],
    ['#7080b8', '#eceef8']
  )
  return (
    <motion.span style={{ opacity, color, marginRight: '0.28em', display: 'inline-block' }}>
      {word}
    </motion.span>
  )
}

export default function Testimonial() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end center'],
  })

  return (
    <section
      id="reviews"
      ref={containerRef}
      style={{
        padding: 'clamp(64px, 8vw, 96px) 24px',
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div style={{ maxWidth: '680px', width: '100%' }}>
        <div style={{
          fontFamily: "'Instrument Serif', serif",
          fontSize: '64px',
          color: 'var(--border-hi)',
          lineHeight: 0.8,
          marginBottom: '20px',
        }}>
          "
        </div>

        <p style={{
          fontSize: 'clamp(22px, 3.5vw, 34px)',
          fontWeight: 400,
          lineHeight: 1.3,
          marginBottom: '40px',
        }}>
          {words.map((word, i) => (
            <WordSpan
              key={i}
              word={word}
              index={i}
              total={words.length}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </p>

        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            backgroundColor: 'var(--surface-2)',
            border: '1px solid var(--border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '13px',
            color: 'var(--text-3)',
            fontWeight: 500,
            flexShrink: 0,
          }}>
            SK
          </div>
          <div>
            <div style={{ fontSize: '14px', fontWeight: 500, color: 'var(--text)' }}>
              Sarah K.
            </div>
            <div style={{ fontSize: '12px', color: 'var(--text-3)', marginTop: '2px' }}>
              Operations Lead
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
