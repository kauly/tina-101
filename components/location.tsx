import { useState } from 'react';
import ReactMapGL from 'react-map-gl';
import { ILocation } from '../typings/app';

const mapStyle = 'mapbox://styles/mapbox/streets-v11';

const LocationMap = ({ latitude, longitude, zoom }: ILocation) => {
  const [viewport, setViewport] = useState({
    latitude,
    longitude,
    zoom
  });
  return (
    <ReactMapGL
      {...viewport}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
      mapStyle={mapStyle}
      mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAP_KEY}
      width="100vw"
      height="100%"
    />
  );
};

export default LocationMap;
