export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "NordlysMap",
    "description": "Real-time northern lights weather forecast with Kp index, cloud cover, and aurora visibility predictions",
    "url": "https://nordlysmap.com",
    "applicationCategory": "WeatherApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "author": {
      "@type": "Organization",
      "name": "NordlysMap"
    },
    "publisher": {
      "@type": "Organization",
      "name": "NordlysMap",
      "logo": {
        "@type": "ImageObject",
        "url": "https://nordlysmap.com/logo.png"
      }
    },
    "featureList": [
      "Real-time Kp index monitoring",
      "Weather conditions for aurora viewing",
      "48-hour aurora forecast",
      "Interactive aurora viewing spots map",
      "Cloud cover predictions",
      "Aurora visibility scoring"
    ],
    "keywords": "northern lights, aurora forecast, kp index, weather forecast, aurora borealis, nordlys",
    "inLanguage": "en",
    "isAccessibleForFree": true,
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://nordlysmap.com/forecast"
      },
      "query-input": "required name=search_term_string"
    }
  }

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What weather conditions are best for seeing northern lights?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The best weather for northern lights viewing includes clear skies (less than 30% cloud cover), high Kp index (3 or higher), and dark conditions between 21:00-03:00. Our real-time forecast combines all these factors to give you an accurate aurora visibility prediction."
        }
      },
      {
        "@type": "Question",
        "name": "How accurate is the northern lights forecast?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our aurora forecast uses real-time data from NOAA Space Weather Prediction Center for Kp index and Open-Meteo for weather conditions. The forecast is most accurate for the next 24-48 hours, with decreasing accuracy for longer periods."
        }
      },
      {
        "@type": "Question",
        "name": "What is the Kp index and why is it important?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Kp index measures geomagnetic activity on a scale of 0-9. Higher values indicate stronger aurora activity. For northern Norway, Kp 3+ usually means good aurora visibility, while Kp 5+ indicates excellent conditions with aurora visible even further south."
        }
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
      />
    </>
  )
}
