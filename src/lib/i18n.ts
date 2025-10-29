export const translations = {
  en: {
    // Navigation
    home: 'Home',
    spots: 'Spots',
    forecast: 'Forecast',
    stay: 'Stay',
    tours: 'Tours',
    
    // Homepage
    title: 'NordlysMap - Northern Lights Weather Tonight',
    subtitle: 'Real-time aurora forecast with Kp index, cloud cover, and weather conditions. Check if tonight is good for northern lights viewing in Norway.',
    liveWeatherData: 'Live Weather Data',
    realTimeKpIndex: 'Real-time Kp Index',
    cloudCoverage: 'Cloud Coverage',
    auroraVisibility: 'Aurora Visibility',
    
    // Aurora conditions
    auroraActivity: 'Aurora Activity',
    cloudCover: 'Cloud Cover',
    temperature: 'Temperature',
    moderateActivity: 'Moderate activity',
    mostlyClearSkies: 'Mostly clear skies',
    perfectForViewing: 'Perfect for viewing',
    
    // Call to action
    greatAuroraConditions: 'Great aurora conditions tonight!',
    bestViewing: 'Best viewing: 21:00 - 02:00',
    viewBestSpots: 'View Best Spots',
    sevenDayForecast: '7-Day Forecast',
    
    // FAQ
    faqTitle: 'Frequently Asked Questions',
    weatherConditionsQuestion: 'What weather conditions are best for seeing northern lights?',
    weatherConditionsAnswer: 'The best weather for northern lights viewing includes clear skies (less than 30% cloud cover), high Kp index (3 or higher), and dark conditions between 21:00-03:00.',
    
    // Common
    loading: 'Loading...',
    error: 'Error occurred',
    tryAgain: 'Try Again',
    enableLocation: 'Enable Location',
  },
  
  no: {
    // Navigation
    home: 'Hjem',
    spots: 'Steder',
    forecast: 'Værmelding',
    stay: 'Overnatting',
    tours: 'Turer',
    
    // Homepage
    title: 'NordlysMap - Nordlys Værmelding I Kveld',
    subtitle: 'Sanntids nordlys værmelding med Kp-indeks, skydekke og værforhold. Sjekk om i kveld er bra for nordlys i Norge.',
    liveWeatherData: 'Live Værdata',
    realTimeKpIndex: 'Sanntids Kp-indeks',
    cloudCoverage: 'Skydekke',
    auroraVisibility: 'Nordlys Synlighet',
    
    // Aurora conditions
    auroraActivity: 'Nordlys Aktivitet',
    cloudCover: 'Skydekke',
    temperature: 'Temperatur',
    moderateActivity: 'Moderat aktivitet',
    mostlyClearSkies: 'Stort sett klar himmel',
    perfectForViewing: 'Perfekt for observasjon',
    
    // Call to action
    greatAuroraConditions: 'Gode nordlys forhold i kveld!',
    bestViewing: 'Best observasjon: 21:00 - 02:00',
    viewBestSpots: 'Se Beste Steder',
    sevenDayForecast: '7-Dagers Værmelding',
    
    // FAQ
    faqTitle: 'Ofte Stilte Spørsmål',
    weatherConditionsQuestion: 'Hvilke værforhold er best for å se nordlys?',
    weatherConditionsAnswer: 'Det beste været for nordlys inkluderer klar himmel (mindre enn 30% skydekke), høy Kp-indeks (3 eller høyere), og mørke forhold mellom 21:00-03:00.',
    
    // Common
    loading: 'Laster...',
    error: 'Feil oppstod',
    tryAgain: 'Prøv Igjen',
    enableLocation: 'Aktiver Posisjon',
  }
}

export type Language = keyof typeof translations
export type TranslationKey = keyof typeof translations.en

export function getTranslation(lang: Language, key: TranslationKey): string {
  return translations[lang][key] || translations.en[key]
}
