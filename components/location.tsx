import { useState } from 'react';
import ReactMapGL, { ViewportProps } from 'react-map-gl';
import { TMapProps } from '../typings/app';

const mapStyle = 'mapbox://styles/mapbox/streets-v11';

const LocationMap = ({ latitude, longitude, zoom }: TMapProps) => {
  const [viewport, setViewport] = useState<ViewportProps>({
    latitude,
    longitude,
    zoom
  });
  return (
    <ReactMapGL
      {...viewport}
      onViewportChange={setViewport}
      mapStyle={mapStyle}
      mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAP_KEY}
      width="100vw"
      height="100%"
    />
  );
};

export default LocationMap;
