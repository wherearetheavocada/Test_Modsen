import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Circle, Polyline, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import ors from 'openrouteservice-js';
import style from './Map.module.css'
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconUrl: '/icons/Vector.png', 
  iconSize: [32, 32],  
  iconAnchor: [16, 16],  
  popupAnchor: [0, -16],  
  shadowUrl: '/icons/Ellipse.png',  
  shadowSize: [98, 98],  
  shadowAnchor: [50, 45]  
});

const customIcons = {
  architecture: new L.Icon({
    iconUrl: '/icons/architecture.png',
    iconSize: [40, 40],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
    shadowSize: [41, 41]
  }),
  auto: new L.Icon({
    iconUrl: '/icons/auto.png',
    iconSize: [40, 40],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
    shadowSize: [41, 41]
  }),
  bank: new L.Icon({
    iconUrl: '/icons/bank.png',
    iconSize: [40, 40],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
    shadowSize: [41, 41]
  }),

  church: new L.Icon({
      iconUrl: '/icons/church.png',
      iconSize: [40, 40],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
      shadowSize: [41, 41]
    }),
    
    coffee: new L.Icon({
      iconUrl: '/icons/coffee.png',
      iconSize: [40, 40],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
      shadowSize: [41, 41]
    }),
    culture: new L.Icon({
      iconUrl: '/icons/culture.png',
      iconSize: [40, 40],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
      shadowSize: [41, 41]
    }),
    factories: new L.Icon({
      iconUrl: '/icons/factories.png',
      iconSize: [40, 40],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
      shadowSize: [41, 41]
    }),
    
    food: new L.Icon({
      iconUrl: '/icons/food.png',
      iconSize: [40, 40],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
      shadowSize: [41, 41]
    }),
    gasStation: new L.Icon({
      iconUrl: '/icons/gasStation.png',
      iconSize: [40, 40],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
      shadowSize: [41, 41]
    }),
    
    history: new L.Icon({
      iconUrl: '/icons/history.png',
      iconSize: [40, 40],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
      shadowSize: [41, 41]
    }),
    park: new L.Icon({
      iconUrl: '/icons/nature.png',
      iconSize: [40, 40],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
      shadowSize: [41, 41]
    }),
    other: new L.Icon({
      iconUrl: '/icons/other.png',
      iconSize: [40, 40],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
      shadowSize: [41, 41]
    }),
    sport: new L.Icon({
      iconUrl: '/icons/sport.png',
      iconSize: [40, 40],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
      shadowSize: [41, 41]
    }),
    bicycles: new L.Icon({
      iconUrl: '/icons/bicycles.png',
      iconSize: [40, 40],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
      shadowSize: [41, 41]
    }),  
    amusements: new L.Icon({
      iconUrl: '/icons/amusements.png',
      iconSize: [40, 40],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
      shadowSize: [41, 41]
    }),
    shops: new L.Icon({
      iconUrl: '/icons/shops.png',
      iconSize: [40, 40],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
      shadowSize: [41, 41]
    })
};

const fetchWikidataImage = async (wikidataId) => {
  try {
    const response = await fetch(`https://www.wikidata.org/w/api.php?action=wbgetentities&ids=${wikidataId}&format=json&props=claims&origin=*`);
    const data = await response.json();
    const entity = data.entities[wikidataId];

    if (entity && entity.claims && entity.claims.P18 && entity.claims.P18.length > 0) {
      const imageFileName = entity.claims.P18[0].mainsnak.datavalue.value;
      return `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(imageFileName)}`;
    } else {
      return null;
    }
  } catch (error) {
    console.error('Error fetching Wikidata image:', error);
    return null;
  }
};

const MyLocationMarker = ({ position }) => {
  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  );
};

const SearchCity = ({ setCenter, setMarkerPosition, setDestination }) => {
  const [city, setCity] = useState('');

  const handleSearch = async () => {
    if (city.trim() === '') return;

    try {
      const response = await fetch(`https://nominatim.openstreetmap.org/search?city=${city}&format=json`);
      const data = await response.json();
      if (data.length > 0) {
        const { lat, lon } = data[0];
        const position = [parseFloat(lat), parseFloat(lon)];
        setCenter(position);
        setMarkerPosition(position);
        setDestination(position);  // Устанавливаем координаты искомого места
      } else {
        alert('City not found');
      }
    } catch (error) {
      console.error('Error fetching city data:', error);
      alert('Failed to fetch city data');
    }
  };

  return (
    <div style={{ marginBottom: '10px' }}>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
        style={{ marginRight: '10px' }}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

const LocationUpdater = ({ setCenter, setMarkerPosition, setMeter, setOrigin }) => {
  const map = useMap();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const userPosition = [latitude, longitude];
        setCenter(userPosition);
        setMarkerPosition(userPosition);
        setMeter(1000); // Устанавливаем радиус в 1000 метров
        setOrigin([longitude, latitude]); // Устанавливаем координаты текущего местоположения
        map.setView(userPosition, 18);
      },
      (error) => {
        console.error('Error fetching geolocation:', error);
        // Устанавливаем значение по умолчанию в случае ошибки
        const defaultPosition = [55.7558, 37.6173]; // Москва по умолчанию
        setCenter(defaultPosition);
        setMarkerPosition(defaultPosition);
        setMeter(1000); // Устанавливаем радиус в 1000 метров
        setOrigin([37.6173, 55.7558]); // Устанавливаем координаты текущего местоположения
        map.setView(defaultPosition, 18);
      }
    );
  }, [map, setCenter, setMarkerPosition, setMeter, setOrigin]);

  return null;
};

const Map = ({meter, setMeter}) => {
  const [center, setCenter] = useState([55.7558, 37.6173]); // Default to Moscow
  const [markerPosition, setMarkerPosition] = useState(null);
  // const [radius, setRadius] = useState(null);
  const [origin, setOrigin] = useState(null);
  const [destination, setDestination] = useState(null);
  const [route, setRoute] = useState(null);
  const [attractions, setAttractions] = useState([]);

  useEffect(() => {
    if (origin && destination) {
      console.log('Calculating route from', origin, 'to', destination);
      const directions = new ors.Directions({
        api_key: '5b3ce3597851110001cf62489c65634519e54fdf8e8b02ea53727d93' // Укажите ваш API ключ
      });

      directions.calculate({
        coordinates: [origin, [destination[1], destination[0]]], // Убедитесь, что координаты в формате [longitude, latitude]
        profile: 'driving-car',
        format: 'geojson'
      })
      .then(response => {
        console.log('Route response:', response);

        if (response.routes && response.routes.length > 0) {
          setRoute(response.routes[0].geometry.coordinates.map(coord => [coord[1], coord[0]]));
        } else {
          console.error('No routes found in response');
        }
      })
      .catch(error => {
        console.error('Error fetching route:', error);
      });
    }
  }, [origin, destination]);

  useEffect(() => {
    if (markerPosition && meter) {
      fetchAttractions(markerPosition, meter);
    }
  }, [markerPosition, meter]);

  const fetchAttractions = async (position, meter) => {
    try {
      const apiKey = '5ae2e3f221c38a28845f05b624720726f5cc6331fa273a907cdf68a7'; 
      const [latitude, longitude] = position;
      const response = await fetch(`https://api.opentripmap.com/0.1/en/places/radius?radius=${meter}&lon=${longitude}&lat=${latitude}&apikey=${apiKey}`);
      const data = await response.json();
      const attractionsData = await Promise.all(data.features.map(async feature => {
        const wikidataId = feature.properties.wikidata; 
        const image = await fetchWikidataImage(wikidataId);
        return {
          id: feature.properties.xid,
          name: feature.properties.name,
          type: feature.properties.kinds.split(',')[0], // Определяем тип достопримечательности
          position: [feature.geometry.coordinates[1], feature.geometry.coordinates[0]],
          image: image
        };
      }));
      setAttractions(attractionsData);
    } catch (error) {
      console.error('Error fetching attractions:', error);
    }
  };

  const getIconForType = (type) => {
    switch (type) {
      case 'cultural':
        return customIcons.culture;
      case 'architecture':
        return customIcons.architecture;
      case 'industrial_facilities':
        return customIcons.factories;  
      case 'natural':
        return customIcons.nature;
      case 'other':
        return customIcons.other;
      case 'sport':
        return customIcons.sport;
      case 'tourist_facilities':
        return customIcons.history;  
      case 'amusements':
        return customIcons.amusements;
      case 'adult':
        return customIcons.adult;
      case 'accomodations':
        return customIcons.other;
      case 'historic_architecture':
        return customIcons.other;
      case 'religion':
        return customIcons.church;
      case 'historic':
        return customIcons.history;
      default:
        return customIcons.other;
    }
  };

  return (
    <div className={`${style.map}`}>
      <SearchCity setCenter={setCenter} setMarkerPosition={setMarkerPosition} setDestination={setDestination} />
      <MapContainer center={center} zoom={13} style={{ height: "90vh", width: "100%" }} className={`${style.mapContainer}`}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <MyLocationMarker position={markerPosition} />
        {markerPosition && meter && (
          <Circle center={markerPosition} radius={meter} />
        )}
        {route && (
          <Polyline positions={route} color="blue" />
        )}
        {attractions.map(attraction => (
          <Marker key={attraction.id} position={attraction.position} icon={getIconForType(attraction.type)}>
            <Popup>
              <div>
                <h3>{attraction.name}</h3>
                {attraction.image && <img src={attraction.image} alt={attraction.name} style={{ maxWidth: '100%' }} />}
              </div>
            </Popup>
          </Marker>
        ))}
        <LocationUpdater setCenter={setCenter} setMarkerPosition={setMarkerPosition} setMeter={setMeter} setOrigin={setOrigin} />
      </MapContainer>
    </div>
  );
};

export default Map;