import { useState } from 'react';
import ReactMapGL from 'react-map-gl';

const mapStyle = "mapbox://styles/kauly/ckug40dj62ihr17o3mow1e9be"

const LocationMap = () => {
    const [viewport, setViewport] = useState({
        latitude: -27.628,
        longitude: -48.527,
        zoom: 10
      });
    return (
        <ReactMapGL
        {...viewport}
        onViewportChange={nextViewport => setViewport(nextViewport)}
        mapStyle={mapStyle}
        mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAP_KEY}
        width="100vw" height="100%"
      />
    )
}

export default LocationMap