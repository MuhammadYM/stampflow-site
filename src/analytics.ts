import posthog from 'posthog-js'

export function initAnalytics() {
  const key = import.meta.env.VITE_POSTHOG_KEY
  if (!key) return
  posthog.init(key, {
    api_host: import.meta.env.VITE_POSTHOG_HOST || 'https://us.i.posthog.com',
    capture_pageview: true,
    capture_pageleave: true,
  })
}

export function track(event: string, properties?: Record<string, unknown>) {
  posthog.capture(event, { app: 'stampflow-site', env: import.meta.env.MODE, ...properties })
}
