import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import HeatMapLayer from "./HeatMapLayer";
import { useMapContext } from "../../Context/MapContext";
import { motion } from "framer-motion";
import waves from '/icons/waves.png';
import winds from '/icons/winds.png';
import precipitation from '/icons/precipitation.png';
import pressure from '/icons/pressure.png';




function ResizeFix() {
  const map = useMap();
  useEffect(() => {
    setTimeout(() => {
      map.invalidateSize();
    }, 100);
  }, [map]);
  return null;
}

function MapController({ coords }) {
  const map = useMap();

  useEffect(() => {
    if (coords) {
      map.flyTo([coords.lat, coords.lng], 10, {
        animate: true,
        duration: 3,
      });
    }
  }, [coords, map]);

  return null;
}

const PortMap = () => {
  const { ports, selectedPort } = useMapContext();
  const [showInfo, setShowInfo] = useState(null);
  const heatData = ports.map((p) => [p.lat, p.lng, Math.random() * 1]);

  return (
    <div className="flex items-end relative h-[85%] w-full rounded-2xl overflow-hidden ">

      <motion.div
        className="h-[92%] w-[65%] rounded-2xl overflow-hidden"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <MapContainer
          center={[20.5937, 78.9629]}
          zoom={5}
          style={{ height: "100%", width: "100%", borderRadius: "12px" }}
        >
          <ResizeFix />
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; OpenStreetMap contributors"
          />


          {ports.map((port, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
            >
              <Marker
                position={[port.lat, port.lng]}
                eventHandlers={{
                  click: () => {
                    setShowInfo(port)
                  },
                }}
              />
            </motion.div>
          ))}

          {selectedPort && <MapController coords={selectedPort} />}

          <HeatMapLayer points={heatData} />


        </MapContainer>
      </motion.div>

      {showInfo && (
        <motion.div
          initial={{ x: "-100%", opacity: 0, zIndex: 0 }}
          animate={{ x: 0, opacity: 1, zIndex: 1 }}
          exit={{ x: "-100%", opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="flex flex-col glass-popup absolute top-20 left-150 w-72 shadow-lg p-4 rounded-r-2xl"
        >
          <div className="w-full flex items-center justify-between ">
            <h2 className="text-xl font-bold ">{showInfo.name}</h2>
            <button
              className="px-3 py-1 bg-red-500 text-white rounded-md"
              onClick={() => setShowInfo(null)}
            >
              X
            </button>
          </div>

          <p className="w-full text-sm text-white ">
            ( Lat: {showInfo.lat}, Lng: {showInfo.lng} )
          </p>

          <div className="w-full flex flex-col gap-3 mt-8">
            <div className="flex items-center">
              <img src={waves} className='h-[23px] w-[23px] mt-[5px] cursor-pointer' />
              <div className="text-white font-medium ml-3 mt-0.5">Tide :</div>
            </div>

            <div className="flex items-center">
              <img src={winds} className='h-[23px] w-[23px] mt-[5px] cursor-pointer' />
              <div className="text-white font-medium ml-3 mt-1">Winds :</div>
            </div>

            <div className="flex items-center">
              <img src={precipitation} className='h-[23px] w-[23px] mt-[5px] cursor-pointer' />
              <div className="text-white font-medium ml-3 mt-0.5">Rainfall :</div>
            </div>

            <div className="flex items-center">
              <img src={pressure} className='h-[21px] w-[21px] mt-[5px] cursor-pointer' />
              <div className="text-white font-medium ml-3 mt-1">Tide :</div>
            </div>
          </div>

          <div className="w-full flex flex-col mt-6">
            <div>Hazard Possibility :</div>
            <div className="font-normal">  Coastal Erosion Risk- 8%</div>
            <div className="font-normal">Coastal Flooding  - 6%</div>
            <div className="font-normal">High Wave - 4%</div>
          </div>

          <div className="flex items-center gap-2 mt-4">
            <div className="h-3 w-3 rounded-full bg-yellow-200  mt-0.5"></div>
            <div>Alert :</div>
            <div>Yellow</div>
          </div>

          <div className="mt-4 underline font-light cursor-pointer hover:text-gray-400">Go Detailed</div>
        </motion.div>
      )}
    </div>
  );
};

export default PortMap;


