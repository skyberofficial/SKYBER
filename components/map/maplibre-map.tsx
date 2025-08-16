'use client';

import { useEffect, useRef } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

const center = {
  lng: 80.2385,
  lat: 26.4309
};

export function MapLibreComponent() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<maplibregl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: {
        version: 8,
        glyphs: 'https://api.maptiler.com/fonts/{fontstack}/{range}.pbf?key=Slx857nSZ7JmUiCsJzsj',
        sources: {
          satellite: {
            type: 'raster',
            tiles: ['https://api.maptiler.com/tiles/satellite/{z}/{x}/{y}.jpg?key=Slx857nSZ7JmUiCsJzsj'],
            tileSize: 512,
            maxzoom: 19,
            attribution: '© MapTiler © OpenStreetMap contributors'
          },
          'place-label': {
            type: 'geojson',
            data: {
              type: 'Feature',
              properties: {
                name: 'Mandhana',
                description: 'Kanpur, Uttar Pradesh'
              },
              geometry: {
                type: 'Point',
                coordinates: [center.lng, center.lat]
              }
            }
          }
        },
        layers: [
          {
            id: 'satellite',
            type: 'raster',
            source: 'satellite',
            paint: {
              'raster-opacity': 0.8,
              'raster-hue-rotate': 120,
              'raster-saturation': -0.4,
              'raster-brightness-min': 0.2
            }
          },
          {
            id: 'place-label-bg',
            type: 'symbol',
            source: 'place-label',
            layout: {
              'text-field': ['format',
                ['get', 'name'], { 'font-scale': 1.4 },
                '\n', {},
                ['get', 'description'], { 'font-scale': 0.8 }
              ],
              'text-font': ['Open Sans Bold', 'Arial Unicode MS Bold'],
              'text-offset': [0, 2],
              'text-anchor': 'top',
              'text-size': 16
            },
            paint: {
              'text-color': '#14C082',
              'text-halo-color': 'rgba(0, 0, 0, 0.75)',
              'text-halo-width': 2,
              'text-halo-blur': 1
            }
          }
        ]
      },
      center: [center.lng, center.lat],
      zoom: 16
    });

    // Add marker
    const markerEl = document.createElement('div');
    markerEl.className = 'custom-marker';
    markerEl.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#14C082" width="32" height="32">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
      </svg>
    `;

    const marker = new maplibregl.Marker({ element: markerEl })
      .setLngLat([center.lng, center.lat])
      .addTo(map.current);

    // Add popup with enhanced content
    const popup = new maplibregl.Popup({ 
      offset: 25, 
      closeButton: false,
      maxWidth: '300px'
    })
      .setHTML(`
        <div class="popup-content">
          <h3 class="popup-title">SKYBER Headquarters</h3>
          <div class="popup-location">
            <strong>Mandhana</strong>
            <span>Kanpur, Uttar Pradesh</span>
            <span>India - 209217</span>
          </div>
        </div>
      `);

    marker.setPopup(popup);

    // Add navigation control with custom styles
    const nav = new maplibregl.NavigationControl({
      showCompass: true,
      showZoom: true,
      visualizePitch: true
    });
    map.current.addControl(nav, 'top-right');

    return () => {
      map.current?.remove();
    };
  }, []);

  return (
    <>
      <div ref={mapContainer} className="w-full h-full" />
      <style jsx global>{`
        .custom-marker {
          width: 32px;
          height: 32px;
          cursor: pointer;
          transform: translate(-50%, -100%);
        }
        .maplibregl-popup {
          max-width: 300px;
          font-family: inherit;
        }
        .maplibregl-popup-content {
          padding: 16px;
          border-radius: 8px;
          background: rgba(20, 192, 130, 0.1);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(20, 192, 130, 0.2);
          color: #fff;
        }
        .popup-content {
          text-align: center;
        }
        .popup-title {
          color: #14C082;
          font-size: 1.1rem;
          font-weight: 600;
          margin: 0 0 8px 0;
        }
        .popup-location {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .popup-location strong {
          font-size: 1rem;
          color: #fff;
        }
        .popup-location span {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.8);
        }
        .maplibregl-ctrl-group {
          background: rgba(20, 192, 130, 0.1) !important;
          backdrop-filter: blur(8px);
          border: 1px solid rgba(20, 192, 130, 0.2) !important;
        }
        .maplibregl-ctrl-group button {
          background-color: transparent !important;
          border-bottom: 1px solid rgba(20, 192, 130, 0.2) !important;
        }
        .maplibregl-ctrl-group button:hover {
          background-color: rgba(20, 192, 130, 0.2) !important;
        }
        .maplibregl-ctrl-group button span {
          filter: invert(1);
        }
        .maplibregl-ctrl-bottom-right {
          display: none;
        }
      `}</style>
    </>
  );
} 