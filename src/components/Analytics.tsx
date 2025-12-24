'use client'

import Script from 'next/script'

const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX' // Replace with your actual GA4 ID

export default function Analytics() {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_title: document.title,
            page_location: window.location.href,
          });
        `}
      </Script>
    </>
  )
}

// Custom event tracking functions
export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, parameters)
  }
}

export const trackAuroraForecastView = (location: string, auroraScore: number) => {
  trackEvent('aurora_forecast_viewed', {
    location,
    aurora_score: auroraScore,
    event_category: 'forecast',
  })
}

export const trackSpotView = (spotName: string) => {
  trackEvent('aurora_spot_viewed', {
    spot_name: spotName,
    event_category: 'spots',
  })
}

export const trackAffiliateClick = (provider: string, type: 'accommodation' | 'tour') => {
  trackEvent('affiliate_click', {
    provider,
    type,
    event_category: 'monetization',
  })
}
