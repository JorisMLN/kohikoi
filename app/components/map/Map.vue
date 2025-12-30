<script setup lang="ts">
import type { Cafe } from '../../../server/utils/mockCafes'

interface Props {
  cafes: Cafe[]
  center?: [number, number]
  zoom?: number
}

const props = withDefaults(defineProps<Props>(), {
  center: () => [35.6762, 139.6503],
  zoom: 12
})

const mapContainer = ref<HTMLElement | null>(null)
let map: any = null
const markers: any[] = []

function getCategoryIcon(categorySlug: string): string {
  const icons: Record<string, string> = {
    'ochaya': '🍃',
    'kissaten': '🏮',
    'junseikissaten': '🍵',
    'book-cafe': '📚',
    'third-wave': '☕',
    'coffee-stand': '🥤',
    'onsen-cafe': '♨️'
  }
  return icons[categorySlug] || '☕'
}

onMounted(async () => {
  if (!mapContainer.value) return
  
  // Import Leaflet SEULEMENT dans onMounted (côté client garanti)
  const L = await import('leaflet')
  
  const japanBounds: [[number, number], [number, number]] = [
    [24, 123], // Sud-Ouest (Okinawa)
    [46, 146]  // Nord-Est (Hokkaido)
  ]
  
  map = L.map(mapContainer.value, {
    preferCanvas: true,
    maxBounds: japanBounds, // ← Limite aux bounds du Japon
    maxBoundsViscosity: 1.0, // ← Empêche de sortir complètement
    minZoom: 5, // ← Zoom minimum (vue Japon entier)
    maxZoom: 18
  }).setView(props.center, props.zoom)
  
  L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '© OpenStreetMap, © CartoDB',
    maxZoom: 19,
    subdomains: 'abcd'
  }).addTo(map)

  // L.tileLayer('https://tiles.stadiamaps.com/tiles/stamen_toner_lite/{z}/{x}/{y}{r}.png', {
  //   attribution: '© Stamen Design, © OpenStreetMap',
  //   maxZoom: 19
  // }).addTo(map)

  // L.tileLayer('https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png', {
  //   attribution: '© Wikimedia, © OpenStreetMap',
  //   maxZoom: 18
  // }).addTo(map)

  // Ajouter les markers pour chaque café
  props.cafes.forEach(cafe => {
    const icon = L.divIcon({
      html: `<div class="custom-marker">${getCategoryIcon(cafe.category)}</div>`,
      className: 'custom-marker-wrapper',
      iconSize: [40, 40],
      iconAnchor: [20, 20],
      popupAnchor: [0, -20]
    })
    
    const marker = L.marker([cafe.latitude, cafe.longitude], { icon })
      .addTo(map!)
      .bindPopup(`
        <div class="cafe-popup">
          <h3>${cafe.name_ja}</h3>
          <p class="cafe-popup__name">${cafe.name}</p>
          <p class="cafe-popup__city">${cafe.city}</p>
          <p class="cafe-popup__koi">🐟 ${cafe.koi_number} koi · ⭐ ${cafe.super_koi_number} super-koi</p>
          <a href="/cafes/${cafe.slug}" class="cafe-popup__link">Voir détails →</a>
        </div>
      `)
    
    markers.push(marker)
  })
  
  // Ajuster la vue pour voir tous les markers
  if (markers.length > 0) {
    const group = L.featureGroup(markers)
    map.fitBounds(group.getBounds().pad(0.1))
  }
})

onBeforeUnmount(() => {
  if (map) {
    map.remove()
    map = null
  }
})
</script>

<template>
  <div ref="mapContainer" class="map-container"></div>
</template>

<style scoped lang="scss">
.map-container {
  width: 100%;
  height: 800px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  
  @include mobile {
    height: 400px;
  }
}

:deep(.custom-marker-wrapper) {
  background: none;
  border: none;
}

:deep(.custom-marker) {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: white;
  border: 3px solid $color-gold;
  border-radius: 50%;
  font-size: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  cursor: pointer;
}

:deep(.custom-marker:hover) {
  transform: scale(1.2);
  border-color: $color-gold-dark;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

:deep(.cafe-popup) {
  padding: 0.5rem;
  min-width: 200px;
}

:deep(.cafe-popup h3) {
  margin: 0 0 0.5rem 0;
  font-size: 1.1rem;
  color: $color-navy;
  font-weight: 700;
}

:deep(.cafe-popup__name) {
  margin: 0.25rem 0;
  color: $color-text;
  font-size: 0.95rem;
}

:deep(.cafe-popup__city) {
  margin: 0.25rem 0;
  color: $color-text-light;
  font-size: 0.875rem;
}

:deep(.cafe-popup__koi) {
  margin: 0.5rem 0;
  color: $color-navy;
  font-size: 0.875rem;
  font-weight: 600;
}

:deep(.cafe-popup__link) {
  display: inline-block;
  margin-top: 0.75rem;
  padding: 0.5rem 1rem;
  background: $color-gold;
  color: white;
  text-decoration: none;
  border-radius: 6px;
  font-weight: 600;
  font-size: 0.875rem;
  transition: all 0.3s ease;
}

:deep(.cafe-popup__link:hover) {
  background: $color-gold-dark;
  transform: translateY(-2px);
}

:deep(.leaflet-popup-content-wrapper) {
  border-radius: 8px;
  overflow: hidden;
}

:deep(.leaflet-popup-content) {
  margin: 0;
}
</style>