"use client";

import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const Revenuemap = () => {
  const locations = [
    { city: "New York", coordinates: [-74.006, 40.7128], revenue: "72K" },
    { city: "San Francisco", coordinates: [-122.4194, 37.7749], revenue: "39K" },
    { city: "Sydney", coordinates: [151.2093, -33.8688], revenue: "25K" },
    { city: "Singapore", coordinates: [103.8198, 1.3521], revenue: "61K" },
  ];

  return (
    <div className="rounded-[20px] border border-[#e7e7e7] bg-white p-5" style={{ padding: '20px' }}>
      <h3 className="font-semibold mb-4 text-[16px]">Revenue by Location</h3>

      <div className="w-full h-[auto]">
        <ComposableMap projectionConfig={{ scale: 115 }}>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="#F5F5F5"
                  stroke="#D5D5D5"
                />
              ))
            }
          </Geographies>

          {locations.map((loc) => (
            <Marker key={loc.city} coordinates={loc.coordinates}>
              <circle r={5} fill="#1E90FF" stroke="#fff" strokeWidth={1.5} />
              <text
                textAnchor="middle"
                y={-12}
                style={{ fontSize: "10px", fontWeight: "600" }}
              >
                {loc.revenue}
              </text>
            </Marker>
          ))}
        </ComposableMap>
      </div>

     <div className="location-stats">
        {locations.map((loc) => (
          <div key={loc.city} className="stat-row">
            <span className="stat-label">{loc.city}</span>
            <span className="stat-value">{loc.revenue}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Revenuemap;

// const Revenuemap = () => {
//   const locations = [
//     { city: "New York", revenue: "72K" },
//     { city: "San Francisco", revenue: "39K" },
//     { city: "Sydney", revenue: "25K" },
//     { city: "Singapore", revenue: "61K" },
//   ]

//   return (
//     <div className="revenue-map rounded-[20px] border border-[#e7e7e7] bg-white" style={{ padding: '20px' }}s>
//       <h3>Revenue by Location</h3>
//       <div className="map-placeholder">
//         <div className="map-grid">
//           {locations.map((loc) => (
//             <div key={loc.city} className="map-location">
//               <span className="location-dot">●</span>
//               <span className="location-label">{loc.city}</span>
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className="location-stats">
//         {locations.map((loc) => (
//           <div key={loc.city} className="stat-row">
//             <span className="stat-label">{loc.city}</span>
//             <span className="stat-value">{loc.revenue}</span>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default Revenuemap
