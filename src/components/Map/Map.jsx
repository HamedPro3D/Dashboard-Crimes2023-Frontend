
import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './Map.css'
import redMarker from './marker.png';
const redIcon = new L.Icon({
  iconUrl: redMarker,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});
const CrimeMap = () => {
  const [selectedArea, setSelectedArea] = useState('');
  const [areasData, setAreasData] = useState([]);

  useEffect(() => {
    fetchAreasData();
  }, [selectedArea]);

  const fetchAreasData = async () => {
    try {
      if (!selectedArea) return;

      const response = await fetch(`http://localhost:5000/get_area_crime_concentration/${selectedArea}`);
      const data = await response.json();
      setAreasData(data);
    } catch (error) {
      console.error('Error fetching areas data:', error);
    }
  };

  const handleAreaSelect = (area) => {
    setSelectedArea(area);
  };

  return (
    <>
      <div>
         <select value={selectedArea} onChange={(e) => handleAreaSelect(e.target.value)}>
          <option value="">Select area</option>
          <option value="77th Street">77th Street</option>
          <option value="Central">Central</option>
          <option value="Devonshire">Devonshire</option>
          <option value="Foothill">Foothill</option>
          <option value="Harbor">Harbor</option>
          <option value="Hollywood">Hollywood</option>
          <option value="Hollenbeck">Hollenbeck</option>
          <option value="Mission">Mission</option>
          <option value="N Hollywood">N Hollywood</option>
          <option value="Newton">Newton</option>
          <option value="Northeast">Northeast</option>
          <option value="Olympic">Olympic</option>
          <option value="Pacific">Pacific</option>
          <option value="Rampart">Rampart</option>
          <option value="Southeast">Southeast</option>
          <option value="Southwest">Southwest</option>
          <option value="Topanga">Topanga</option>
          <option value="Van Nuys">Van Nuys</option>
          <option value="West LA">West LA</option>
          <option value="West Valley">West Valley</option>
          <option value="Wilshire">Wilshire</option>

          {/* Agregar más opciones según sea necesario */}
        </select>
      </div>
      <div className='map-container'>
        <MapContainer center={[34.0522, -118.2437]} zoom={12} style={{ height: '40em', width: '60em'}}>
          <TileLayer
            url="https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}"
            attribution='&copy; <a href="https://www.mapbox.com/">Mapbox</a>'
            id="mapbox/streets-v11"
            accessToken="pk.eyJ1IjoibXlzdGljMjMiLCJhIjoiY2x2aG11OTFwMTdvNTJpb3ppdGgyenRnNCJ9.3tmaMtmoEHwZtX_mEztE8Q"
          />
          {areasData.map((area, index) => (
            <Marker
              key={index}
              position={[parseFloat(area.LAT), parseFloat(area.LON)]}
              icon={redIcon} 
            >
              <Popup>
                <div>
                  <h3>{area.AREA_NAME}</h3>
                  <p>Cantidad de crímenes: {area.Cantidad}</p>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </>
  );
};

export default CrimeMap;
