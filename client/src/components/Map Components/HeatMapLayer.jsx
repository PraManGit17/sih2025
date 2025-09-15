import React, { useEffect } from 'react'
import { useMap } from "react-leaflet"; 
import "leaflet.heat";

const HeatMapLayer  = ({ points }) => {
  const map = useMap();
  

  useEffect(() => {
    if (!map) return;

    const heat = window.L.heatLayer(points, {
      radius: 40,
      blur: 25,
      maxZoom: 10,
      gradient: {
        0.1: "blue",
        0.3: "lime",
        0.5: "yellow",
        0.7: "orange",
        1.0: "red",
      },
    }).addTo(map);

    return () => {
      map.removeLayer(heat);
    };
  }, [map, points]);

  return null;
};

export default HeatMapLayer