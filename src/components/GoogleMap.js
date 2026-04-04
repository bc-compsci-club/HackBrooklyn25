import React from "react";
import { GoogleMap, LoadScript, Marker, InfoWindow } from "@react-google-maps/api";

// List of Brooklyn College locations with images
const locations = [
  {
    name: "Brooklyn College Main Campus",
    position: { lat: 40.6308935, lng: -73.951458 },
    address: "2900 Bedford Ave, Brooklyn, NY 11210",
    image: "/images/hero/brooklyn-college.jpg"
  },
  {
    name: "West Quad Center",
    position: { lat: 40.6310101, lng: -73.9543587 },
    address: "West Quad Center, Brooklyn, NY 11210",
    image: "/images/hero/west-quad-center.jpg"
  },
  {
    name: "Brooklyn College Library",
    position: { lat: 40.6315001, lng: -73.9501096 },
    address: "Library, Brooklyn, NY 11210",
    image: "/images/hero/brooklyn-college-library.jpg"
  }
];

const containerStyle = {
  width: '100%',
  height: '400px',
  borderRadius: '12px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  margin: '0 auto'
};

const center = { lat: 40.6308, lng: -73.9558 };

function GoogleMapComponent() {
  const [selected, setSelected] = React.useState(null);
  return (
    <div style={{ maxWidth: '900px', margin: '2rem auto', padding: '0 1rem' }}>
      <h2 style={{ textAlign: 'center', fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>
        Event Locations: Brooklyn College
      </h2>
      <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={17}
          options={{ clickableIcons: false }}
        >
          {locations.map((loc, idx) => (
            <Marker
              key={idx}
              position={loc.position}
              onClick={() => setSelected(loc)}
              aria-label={loc.name}
            />
          ))}
          {selected && (
            <InfoWindow
              position={selected.position}
              onCloseClick={() => setSelected(null)}
            >
              <div style={{ maxWidth: '220px', textAlign: 'center' }}>
                <img
                  src={selected.image}
                  alt={selected.name}
                  style={{ width: '100%', maxHeight: '100px', objectFit: 'cover', borderRadius: '8px', marginBottom: '0.5rem' }}
                />
                <strong>{selected.name}</strong><br />
                {selected.address}
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </LoadScript>
    </div>
  );
}

export default GoogleMapComponent;
