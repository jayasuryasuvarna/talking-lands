import "./App.css";
import "leaflet/dist/leaflet.css";
import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, Polygon } from "react-leaflet";
import { fetch } from "./client";
import { Icon } from "leaflet";

const customIcon = new Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/447/447031.png",
  iconSize: [38, 38],
});

export default function App() {
  const [pointData, setPointData] = useState([]);
  const [polygonData, setPolygonData] = useState([]);
  const [selectedFeature, setSelectedFeature] = useState(null);

  const handleFeatureClick = (feature) => {
    setSelectedFeature(feature);
  };
  useEffect(() => {
    const points = fetch("points");
    const polygons = fetch("polygons");
    console.log("polygons", polygons);
    setPointData(points);
    setPolygonData(polygons);
  }, []);
  return (
    <>
      <MapContainer center={[12.9716, 77.5946]} zoom={13} style={{ zIndex: 0 }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {pointData.map((marker) => (
          <Marker key={marker.id} position={marker.geocode} icon={customIcon}>
            <Popup>{marker.name}</Popup>
          </Marker>
        ))}

        {polygonData.map((polygon) => (
          <Polygon
            key={polygon.id}
            positions={polygon.coordinates}
            eventHandlers={{ click: () => handleFeatureClick(polygon) }}
          >
            <Popup>{polygon.area}</Popup>
          </Polygon>
        ))}
      </MapContainer>
      {selectedFeature && (
        <div className="description-container">
          <p>
            <span className="bold">Area:</span>
            {selectedFeature.area}
          </p>
          <p className="description">{selectedFeature.details}</p>
        </div>
      )}
    </>
  );
}
