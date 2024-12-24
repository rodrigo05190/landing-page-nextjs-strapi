import {
  GoogleMap,
  Marker,
  useJsApiLoader,
} from '@react-google-maps/api';
import React, { useEffect, useState } from 'react';
import { Maps } from '../../@types';
import { pin } from '../../assets/icons';
import { Container } from './styles';

interface LatLng {
  lat: number;
  lng: number;
}

interface MapProps {
  data: Maps | Maps[];
  center?: LatLng;
  zoom?: number;
  onClick?: (value: Maps) => void;
}

const Map: React.FC<MapProps> = ({
  data,
  center,
  zoom = 12,
  onClick,
}) => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyDDqFAieCtHA88EFUQuDOI1A2ec28RJxlM',
  });

  const [latLng, setLatLng] = useState({
    lat: 0,
    lng: 0,
  });

  const isArray = Array.isArray(data);

  useEffect(() => {
    if (isArray) {
      setLatLng({
        lat: center?.lat ?? Number(data[0].latitude) ?? 0,
        lng: center?.lng ?? Number(data[0].longitude) ?? 0,
      });
    } else {
      setLatLng({
        lat: center?.lat ?? Number(data.latitude) ?? 0,
        lng: center?.lng ?? Number(data.longitude) ?? 0,
      });
    }
  }, []);

  const handleOnClick = (value: Maps) => {
    setLatLng({
      lat: Number(value.latitude) ?? 0,
      lng: Number(value.longitude) ?? 0,
    });

    if (onClick) {
      onClick(value);
    }
  };

  if (!isLoaded) {
    return <h1>Carregando...</h1>;
  }

  return (
    <Container>
      <GoogleMap center={latLng} zoom={zoom}>
        {isArray ? (
          data.map(item => (
            <Marker
              key={item.id}
              position={{
                lat: Number(item.latitude) ?? 0,
                lng: Number(item.longitude) ?? 0,
              }}
              onClick={() => handleOnClick(item)}
              icon={pin}
            />
          ))
        ) : (
          <Marker
            position={{
              lat: Number(data.latitude) ?? 0,
              lng: Number(data.longitude) ?? 0,
            }}
            onClick={() => handleOnClick(data)}
            icon={pin}
          />
        )}
      </GoogleMap>
    </Container>
  );
};

export default Map;
