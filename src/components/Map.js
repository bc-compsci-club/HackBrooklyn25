import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// Brooklyn College coordinates
const position = [40.6308, -73.9558];


function Map() {
  return (
    <div style={{ maxWidth: '900px', margin: '2rem auto', padding: '0 1rem' }}>
      <img
        src="/images/hero/brooklyn-college.jpg"
        alt="Brooklyn College campus"
        style={{ width: '100%', maxHeight: '260px', objectFit: 'cover', borderRadius: '12px', marginBottom: '1.5rem', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}
      />
      <h2 style={{ textAlign: 'center', fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>
        Event Location: Brooklyn College
      </h2>
      <MapContainer center={position} zoom={16} scrollWheelZoom={false} style={{ height: '400px', width: '100%', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            Brooklyn College<br />2900 Bedford Ave, Brooklyn, NY 11210
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Map;
