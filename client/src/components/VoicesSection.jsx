import React from 'react'
import commas from '/icons/commas.png';
import fisherman from '/icons/fisherman.png';
import officer from '/icons/officer.png';
import journalist from '/icons/journalist.png';

const VoicesSection = () => {
  return (
    <div className='h-screen flex flex-col justify-center gap-4'>

      <div className='w-full flex justify-center'>
        <div className='text-4xl font-bold'>" Voices from the <span className='text-[#2e7bffd8]'>Coast</span> "</div>
      </div>

      <div className='w-full flex flex-col items-center justify-center'>
        <div className='text-[17px] text-gray-800 opacity-80 font-medium'>
          Real perspectives on how Frontwaves will empower communities, officials, and citizens along India's coastline.
        </div>
      </div>

      <div className='flex items-center justify-center space-x-12 w-full mt-10'>

        <div className='border-2 px-6 py-8 flex flex-col gap-4 rounded-xl'>
          <div className='flex items-center gap-4'>
            <img src={commas} className='h-[25px] w-[26px] mt-0.5' />
          </div>
          <div className='text-md text-gray-900 opacity-85 font-medium max-w-[320px]'>
            With Frontwaves, our boats will receive live alerts on high waves and sudden storms, keeping our livelihoods and lives safer at sea
          </div>

          <div className='text-gray-900 mt-4 flex items-center justify-between'>
            <div className='h-17 w-17 rounded-full overflow-hidden'>
              <img src={fisherman} className='object-fit rounded-full' />
            </div>
            <div className='flex flex-col'>
              <div className='text-lg font-semibold'>Ravi Kumar</div>
              <div>Fisherman, Chennai</div>
            </div>
          </div>
        </div>

        <div className='border-2 px-6 py-8 flex flex-col gap-4 rounded-xl'>
          <div className='flex items-center gap-4'>
            <img src={commas} className='h-[25px] w-[26px] mt-0.5' />
          </div>
          <div className='text-md text-gray-900 opacity-85 font-medium max-w-[320px]'>
            By using crowdsourced reports and real-time data, we'll be able to coordinate faster evacuations and reduce coastal risk during emergencies
          </div>

          <div className='text-gray-900 mt-4 flex items-center justify-between'>
            <div className='h-17 w-17 rounded-full overflow-hidden'>
              <img src={officer} className='object-fit rounded-full' />
            </div>
            <div className='flex flex-col'>
              <div className='text-lg font-semibold'>Dr. Priya Sharma</div>
              <div >Disaster Management Officer</div>
            </div>
          </div>
        </div>

        <div className='border-2 px-6 py-8 flex flex-col gap-4 rounded-xl'>
          <div className='flex items-center gap-4'>
            <img src={commas} className='h-[25px] w-[26px] mt-0.5' />
          </div>
          <div className='text-md text-gray-900 opacity-85 font-medium max-w-[320px]'>
            As a coastal resident, I will feel safer knowing I'll instantly get hazard alerts and guidelines to protect my family and community.
          </div>

          <div className='text-gray-900 mt-4 flex items-center justify-between gap-8'>
            <div className='h-17 w-17 rounded-full overflow-hidden'>
              <img src={journalist} className='object-fit rounded-full' />
            </div>
            <div className='flex flex-col'>
              <div className='text-lg font-semibold'>Arjun Shivale</div>
              <div>Citizen Reporter, Mumbai</div>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default VoicesSection
