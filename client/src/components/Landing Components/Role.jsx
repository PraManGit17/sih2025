import React from 'react'
import upload from '/icons/upload.png';
import mapsblue from '/icons/mapsblue.png';
import sm from '/icons/sm.png';
import bell from '/icons/bell.png';
import multilingual from '/icons/multilingual.png';

const Role = () => {
  return (
    <div className='h-screen flex flex-col gap-4'>

      <div className='w-full mt-8 flex justify-center'>
        <div className='text-4xl font-bold'>" Role of Frontwaves in Safeguarding <span className='text-[#2e7bffd8]'>Coastlife</span> "</div>
      </div>

      <div className='w-full flex flex-col items-center justify-center'>
        <div className='text-[17px] text-gray-800 opacity-80 font-medium'>
          Frontwaves is built to protect India's coastline and communities by combining real-time monitoring, crowdsourced reporting, and AI-powered analysis
        </div>
        <div className='text-[17px] text-gray-800 opacity-80 font-medium max-w-[900px] text-center'>
          With a focus on awareness, early warnings, and local engagement, Frontwaves bridges the gap between advanced science and ground-level action—ensuring faster response and safer shores.  </div>
      </div>

      <div className='mt-2 h-full flex flex-col items-center gap-4'>
        <div className='flex items-center justify-center space-x-12 w-full py-4'>
          <div className='border-2 px-6 py-8 flex flex-col gap-4'>
            <div className='flex items-center gap-4'>
              <img src={upload} className='h-[25px] w-[26px] mt-0.5' />
              <div className='text-xl font-medium'>Crowdsourced Reporting</div>
            </div>
            <div className='text-md text-gray-900 opacity-85 font-medium max-w-[320px]'>
              Citizens can upload geotagged photos and videos of hazards such as high waves, floods, or unusual tides.
            </div>

            <div className='text-gray-900 font-normal text-sm underline mt-2'>
              Know More
            </div>
          </div>

          <div className='border-2 px-6 py-8 flex flex-col gap-4'>
            <div className='flex items-center gap-4'>
              <img src={mapsblue} className='h-[25px] w-[28px] ' />
              <div className='text-xl font-medium'>Interactive Hazard Map</div>
            </div>
            <div className='text-md text-gray-900 opacity-85 font-medium max-w-[320px]'>
              A live, zoomable map of India's 7,500 km coastline that highlights vulnerable zones, active hazards, and recent incidents.
            </div>

            <div className='text-gray-900 font-normal text-sm underline mt-2'>
              Know More
            </div>
          </div>

          <div className='border-2 px-6 py-8 flex flex-col gap-4'>
            <div className='flex items-center gap-4'>
              <img src={sm} className='h-[27px] w-[26px] mt-0.5' />
              <div className='text-xl font-medium'>Social & News Intelligence</div>
            </div>
            <div className='text-md text-gray-900 opacity-85 font-medium max-w-[320px]'>
              Frontwaves continuously looks for social media posts and news articles related to ocean hazards to predict potential threats.
            </div>

            <div className='text-gray-900 font-normal text-sm underline'>
              Know More
            </div>
          </div>
        </div>

        <div className='flex items-center justify-center space-x-12 w-full '>
          <div className='border-2 px-6 py-8 flex flex-col gap-4'>
            <div className='flex items-center gap-4'>
              <img src={bell} className='h-[26px] w-[27px] ' />
              <div className='text-xl font-medium'>Citizen Alerts & Safety Guidelines</div>
            </div>
            <div className='text-md text-gray-900 opacity-85 font-medium max-w-[320px]'>
              Every registered citizen automatically receives real-time alerts, safety guidelines, and preparedness instructions
            </div>

            <div className='text-gray-900 font-normal text-sm underline mt-2'>
              Know More
            </div>
          </div>

          <div className='border-2 px-6 py-8 flex flex-col gap-4'>
            <div className='flex items-center gap-4'>
              <img src={multilingual} className='h-[27px] w-[27px] ' />
              <div className='text-xl font-medium'>Multilingual Support</div>
            </div>
            <div className='text-md text-gray-900 opacity-85 font-medium max-w-[320px]'>
              Frontwaves is available in multiple Indian languages, making critical warnings accessible to locals across the coastline.
            </div>

            <div className='text-gray-900 font-normal text-sm underline mt-2'>
              Know More
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Role
