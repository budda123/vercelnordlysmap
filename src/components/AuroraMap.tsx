'use client'

import { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Icon } from 'leaflet'
import { AuroraSpot } from '@/types/spots'
import 'leaflet/dist/leaflet.css'

interface AuroraMapProps {
  spots: AuroraSpot[]
  selectedSpot?: string
  onSpotSelect?: (spotId: string) => void
}

export default function AuroraMap({ spots, selectedSpot, onSpotSelect }: AuroraMapProps) {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return (
      <div className="w-full h-96 bg-arctic-800 rounded-lg flex items-center justify-center">
        <div className="text-white">Loading map...</div>
      </div>
    )
  }

  // Custom marker icon
  const createCustomIcon = (isSelected: boolean) => new Icon({
    iconUrl: `data:image/svg+xml;base64,${btoa(`
      <svg width="25" height="41" viewBox="0 0 25 41" xmlns="http://www.w3.org/2000/svg">
        <path fill="${isSelected ? '#0ea5e9' : '#38bdf8'}" stroke="#fff" stroke-width="2" d="M12.5 0C5.6 0 0 5.6 0 12.5c0 12.5 12.5 28.5 12.5 28.5s12.5-16 12.5-28.5C25 5.6 19.4 0 12.5 0z"/>
        <circle fill="#fff" cx="12.5" cy="12.5" r="6"/>
      </svg>
    `)}`,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [0, -41]
  })

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'text-green-400'
      case 'Moderate': return 'text-yellow-400'
      case 'Advanced': return 'text-red-400'
      default: return 'text-gray-400'
    }
  }

  return (
    <div className="w-full h-96 rounded-lg overflow-hidden border border-white/20">
      <MapContainer
        center={[69.6496, 18.9560]} // Tromsø center
        zoom={8}
        style={{ height: '100%', width: '100%' }}
        className="z-0"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {spots.map((spot) => (
          <Marker
            key={spot.id}
            position={[spot.coordinates.lat, spot.coordinates.lng]}
            icon={createCustomIcon(selectedSpot === spot.id)}
            eventHandlers={{
              click: () => onSpotSelect?.(spot.id)
            }}
          >
            <Popup className="aurora-popup">
              <div className="p-2 min-w-[200px]">
                <h3 className="font-bold text-lg mb-2">{spot.name}</h3>
                <div className="space-y-1 text-sm">
                  <p><span className="font-medium">Drive time:</span> {spot.driveTimeFromTromso}</p>
                  <p>
                    <span className="font-medium">Difficulty:</span>{' '}
                    <span className={getDifficultyColor(spot.difficulty)}>{spot.difficulty}</span>
                  </p>
                  <p className="text-gray-600 mt-2">{spot.description.substring(0, 100)}...</p>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  )
}
