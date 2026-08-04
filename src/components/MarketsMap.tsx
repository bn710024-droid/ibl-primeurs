import { ComposableMap, Geographies, Geography } from 'react-simple-maps'

const GEO_URL = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json'

const ORIGIN_NAMES = new Set(['Senegal', 'Sénégal'])

const DESTINATION_NAMES = new Set([
  'Spain',
  'France',
  'Belgium',
  'Netherlands',
  'Morocco',
  'Mauritania',
  'Ivory Coast',
  "Côte d'Ivoire",
  'Cote d’Ivoire',
])

export default function MarketsMap() {
  return (
    <div className="relative overflow-hidden rounded-[22px] bg-paper-100 p-4 shadow-[0_20px_45px_-20px_rgba(18,53,36,0.2)] sm:p-6">
      <ComposableMap
        projectionConfig={{ scale: 148, center: [10, 15] }}
        className="w-full"
      >
        <Geographies geography={GEO_URL}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const name = geo.properties.name as string
              const isOrigin = ORIGIN_NAMES.has(name)
              const isDestination = DESTINATION_NAMES.has(name)

              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  style={{
                    default: {
                      fill: isOrigin ? '#82c000' : isDestination ? '#17402c' : '#dfe9db',
                      stroke: '#ffffff',
                      strokeWidth: 0.5,
                      outline: 'none',
                    },
                    hover: {
                      fill: isOrigin ? '#82c000' : isDestination ? '#123524' : '#dfe9db',
                      stroke: '#ffffff',
                      strokeWidth: 0.5,
                      outline: 'none',
                    },
                    pressed: {
                      fill: isOrigin ? '#82c000' : isDestination ? '#123524' : '#dfe9db',
                      stroke: '#ffffff',
                      strokeWidth: 0.5,
                      outline: 'none',
                    },
                  }}
                />
              )
            })
          }
        </Geographies>
      </ComposableMap>
    </div>
  )
}
