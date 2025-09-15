import React from 'react'
import Search from "../components/Map Components/Search";
import PortMap from "../components/Map Components/PortMap";
import Analysis from "../components/Map Components/Analysis";
import MapIntro from '../components/Map Components/MapIntro';

const Map = () => {
  return (
    <div className="fixed-background relative">

      <div className="z-0 absolute inset-0 bg-black/48"></div>
      <MapIntro />
      
      <div className="z-10 relative text-white flex items-center ">
        <div className='w-[40%]'>
          <Search />
        </div>
        <div className='flex items-end justify-center h-screen w-[60%] py-4'>
          <PortMap />
        </div>
      </div>
      <Analysis />
    </div>
  )
}

export default Map;