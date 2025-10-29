'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { MapPin, BarChart3, Home, Bed, Camera } from 'lucide-react'

export default function Navigation() {
  const pathname = usePathname()

  const navItems = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/spots', label: 'Spots', icon: MapPin },
    { href: '/forecast', label: 'Forecast', icon: BarChart3 },
    { href: '/stay', label: 'Stay', icon: Bed },
    { href: '/tours', label: 'Tours', icon: Camera },
  ]

  return (
    <nav className="bg-arctic-900/95 backdrop-blur-sm border-b border-white/10 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-aurora-400 to-aurora-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">TA</span>
            </div>
            <span className="text-white font-bold text-xl">Tromso Aurora</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-aurora-500/20 text-aurora-200'
                      : 'text-arctic-200 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </Link>
              )
            })}
          </div>

          {/* Mobile Navigation - Simple for now */}
          <div className="md:hidden">
            <Link
              href="/spots"
              className="text-arctic-200 hover:text-white"
            >
              <MapPin className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
