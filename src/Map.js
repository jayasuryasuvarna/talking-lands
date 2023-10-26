import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, Polygon } from "react-leaflet";

function MapComponent() {
  const [pointData, setPointData] = useState([]);
  const [polygonData, setPolygonData] = useState([]);
  const [selectedFeature, setSelectedFeature] = useState(null);

  useEffect(() => {
    // Fetch mock spatial data from your API or use static mock data
    // Example mock data format for points and polygons
    const mockData = {
      points: [
        { id: 1, lat: 51.505, lon: -0.09, name: "Marker 1" },
        { id: 2, lat: 51.51, lon: -0.1, name: "Marker 2" },
        // Add more points as needed
      ],
      polygons: [
        {
          id: 1,
          coordinates: [
            [51.509, -0.08],
            [51.503, -0.06],
            [51.51, -0.047],
            [51.502, -0.03],
          ],
          name: "Polygon 1",
        },
        // Add more polygons as needed
      ],
    };

    setPointData(mockData.points);
    setPolygonData(mockData.polygons);
  }, []);

  const handleFeatureClick = (feature) => {
    setSelectedFeature(feature);
  };

  return (
    <div className="map-container">
      <MapContainer center={[51.505, -0.09]} zoom={13}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {pointData.map((point) => (
          <Marker
            position={[point.lat, point.lon]}
            key={point.id}
            eventHandlers={{ click: () => handleFeatureClick(point) }}
          >
            <Popup>{point.name}</Popup>
          </Marker>
        ))}

        {polygonData.map((polygon) => (
          <Polygon
            key={polygon.id}
            positions={polygon.coordinates}
            eventHandlers={{ click: () => handleFeatureClick(polygon) }}
          >
            <Popup>{polygon.name}</Popup>
          </Polygon>
        ))}
      </MapContainer>
      <div className="feature-details">
        {selectedFeature && (
          <div>
            <h2>Selected Feature:</h2>
            <p>ID: {selectedFeature.id}</p>
            <p>Name: {selectedFeature.name}</p>
            {/* Add more details as needed */}
          </div>
        )}
      </div>
    </div>
  );
}

export default MapComponent;
