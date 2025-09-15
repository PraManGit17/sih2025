import React, { createContext, useContext, useState } from "react";

const MapContext = createContext();

// const portsData = [
//   { name: "Mundra Port", lat: 22.8392, lng: 69.7195 },
//   { name: "Kandla Port", lat: 23.033, lng: 70.218 },
//   { name: "Mumbai Port", lat: 18.947, lng: 72.842 },
//   { name: "Jawaharlal Nehru (Nhava Sheva) Port", lat: 18.948, lng: 72.951 },
//   { name: "Mangalore Port", lat: 12.8698, lng: 74.842 },
//   { name: "Cochin Port", lat: 9.9667, lng: 76.2667 },
//   { name: "Tuticorin Port", lat: 8.7642, lng: 78.1348 },
//   { name: "Chennai Port", lat: 13.0827, lng: 80.2785 },
//   { name: "Ennore Port (Kamarajar)", lat: 13.2167, lng: 80.3333 },
//   { name: "Visakhapatnam Port", lat: 17.6868, lng: 83.2185 },
//   { name: "Paradip Port", lat: 20.3167, lng: 86.6167 },
//   { name: "Kolkata Port", lat: 22.5726, lng: 88.3639 },
//   { name: "Haldia Port", lat: 22.0258, lng: 88.0583 },
  
// ];

const portsData = [
  { code: "mund", name: "Mundra Port", lat: 22.8392, lng: 69.7195 },
  { code: "kand", name: "Kandla Port", lat: 23.033, lng: 70.218 },
  { code: "mumb", name: "Mumbai Port", lat: 18.947, lng: 72.842 },
  { code: "jnpt", name: "Jawaharlal Nehru (Nhava Sheva) Port", lat: 18.948, lng: 72.951 },
  { code: "mang", name: "Mangalore Port", lat: 12.8698, lng: 74.842 },
  { code: "coch", name: "Cochin Port", lat: 9.9667, lng: 76.2667 },
  { code: "tuti", name: "Tuticorin Port", lat: 8.7642, lng: 78.1348 },
  { code: "chenn", name: "Chennai Port", lat: 13.0827, lng: 80.2707 },
  { code: "ennr", name: "Ennore Port (Kamarajar)", lat: 13.2167, lng: 80.3333 },
  { code: "vish", name: "Visakhapatnam Port", lat: 17.6868, lng: 83.2185 },
  { code: "para", name: "Paradip Port", lat: 20.3167, lng: 86.6167 },
  { code: "kolk", name: "Kolkata Port", lat: 22.5726, lng: 88.3639 },
  { code: "hald", name: "Haldia Port", lat: 22.0258, lng: 88.0583 },
  { code: "ptbl", name: "Port Blair", lat: 11.667, lng: 92.750 },
  { code: "marm", name: "Marmagao Port", lat: 15.402, lng: 73.788 },
  { code: "verav", name: "Veraval Port", lat: 20.9053, lng: 70.3679 },
  { code: "mini", name: "Minicoy", lat: 8.295, lng: 73.048 },
  { code: "nanc", name: "Nancowry", lat: 8.035, lng: 93.535 },
  // { code: "dni7", name: "DART Bay of Bengal", lat: 17.6, lng: 89.7 },
  // { code: "dni4", name: "DART Bay of Bengal", lat: 18.0, lng: 90.0 },
  // { code: "dni6", name: "DART Bay of Bengal", lat: 15.5, lng: 89.0 },
  // { code: "dni2", name: "DART Bay of Bengal", lat: 19.0, lng: 88.0 },
  // { code: "dara", name: "DART Arabian Sea", lat: 15.0, lng: 68.0 },
  // { code: "dar2", name: "DART Arabian Sea", lat: 16.5, lng: 67.5 }
];


export const MapProvider = ({ children }) => {
  const [selectedPort, setSelectedPort] = useState(null);

  return (
    <MapContext.Provider value={{ ports: portsData, selectedPort, setSelectedPort }}>
      {children}
    </MapContext.Provider>
  );
};

export const useMapContext = () => useContext(MapContext);
