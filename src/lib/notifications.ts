'use client'

export class NotificationService {
  private static instance: NotificationService
  private permission: NotificationPermission = 'default'

  static getInstance(): NotificationService {
    if (!NotificationService.instance) {
      NotificationService.instance = new NotificationService()
    }
    return NotificationService.instance
  }

  async requestPermission(): Promise<boolean> {
    if (!('Notification' in window)) {
      console.warn('This browser does not support notifications')
      return false
    }

    if (this.permission === 'granted') {
      return true
    }

    const permission = await Notification.requestPermission()
    this.permission = permission
    return permission === 'granted'
  }

  async sendAuroraAlert(auroraScore: number, location?: string): Promise<void> {
    if (this.permission !== 'granted') {
      return
    }

    const title = '🌌 Great Aurora Conditions!'
    const body = `Aurora score: ${auroraScore}/100${location ? ` in ${location}` : ''}. Perfect time for northern lights viewing!`
    
    const notification = new Notification(title, {
      body,
      icon: '/icon-192x192.png',
      badge: '/icon-192x192.png',
      tag: 'aurora-alert',
      requireInteraction: true
    })

    notification.onclick = () => {
      window.focus()
      notification.close()
    }

    // Auto close after 10 seconds
    setTimeout(() => {
      notification.close()
    }, 10000)
  }

  async scheduleAuroraCheck(): Promise<void> {
    // Check every hour for good aurora conditions
    setInterval(async () => {
      try {
        const response = await fetch('/api/aurora')
        const data = await response.json()
        
        if (data.kpIndex >= 4 && Math.random() > 0.7) { // Simulate good conditions
          const score = Math.min(data.kpIndex * 15, 100)
          await this.sendAuroraAlert(score)
        }
      } catch (error) {
        console.error('Failed to check aurora conditions:', error)
      }
    }, 60 * 60 * 1000) // Every hour
  }
}

// Service Worker for background notifications
export const registerServiceWorker = async (): Promise<void> => {
  if ('serviceWorker' in navigator) {
    try {
      const registration = await navigator.serviceWorker.register('/sw.js')
      console.log('Service Worker registered:', registration)
    } catch (error) {
      console.error('Service Worker registration failed:', error)
    }
  }
}
