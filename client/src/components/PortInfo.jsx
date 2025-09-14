import React from 'react'

const PortInfo = () => {
  return (
    <div className='h-screen flex flex-col gap-4'>

      <div className='w-full mt-12 flex justify-center'>
        <div className='text-4xl font-bold'>" A Constant Threat Prevailing on the  <span className='text-[#2e7bffd8]'>Coastline</span> "</div>
      </div>

      <div className='w-full flex flex-col items-center justify-center'>
        <div className='text-[17px] text-gray-800 opacity-80 font-medium'>
          India's vast 7,500 km coastline is the lifeline for millions of people—fishermen, port workers, coastal residents, and industries
        </div>
        <div className='text-[17px] text-gray-800 opacity-80 font-medium'>
          But this coastline is increasingly exposed to tsunamis, cyclones, storm surges, high waves, and flooding.
        </div>
        <div className='text-[17px] text-gray-800 opacity-80 font-medium max-w-[740px] text-center'>
          While INCOIS provides scientific early warnings, real-time local reports and awareness at the port level are vital to respond quickly and save lives.”
        </div>
      </div>

      <div className='px-10 py-4 h-full border-2 flex items-center gap-12'>
          <div className='w-1/2 h-full border-2'>
          </div>
 
          <div className='w-1/2 h-full border-2'>
          </div>
 
      </div>
    </div>
  )
}

export default PortInfo
