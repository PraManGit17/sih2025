import React from 'react';
import feed from '/icons/feed.jpg';
import map from '/icons/map.jpg';
import report from '/icons/report.jpg';
import alert from '/icons/alert.jpg';
import user from '/icons/user.jpg';
import options from '/icons/options.png';
import waves from '/icons/waves.png';
import redirect from '/icons/redirect.png';
import reportblue from '/icons/reportblue.png';
import rightarrow from '/icons/rightarrow.png';
import incos from '/icons/incos.png';


const Herosection = () => {
  return (
    <div
      className="w-screen h-screen bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('/images/port.jpg')",
      }}
    >

      <div className="absolute inset-0 bg-black/55"></div>

      <div className="relative z-10 flex flex-col h-full text-white px-8 py-4">

        <div className='flex items-baseline justify-between'>
          <div className='flex gap-2'>
            <img src={waves} className='h-[36px] w-[36px] mt-1' />
            <div className='text-4xl font-bold'>Frontwaves</div>
          </div>
          <div className='text-xl font-semibold flex space-x-16'>
            <div className='flex items-center gap-1'>
              <img src={feed} className='h-[20px] w-[20px] mt-0.5' />
              <div>Live Feed</div>
            </div>
            <div className='flex items-center gap-2'>
              <img src={map} className='h-[20px] w-[20px] mt-0.5' />
              <div>Maps</div>
            </div>
            <div className='flex items-center gap-2'>
              <img src={report} className='h-[20px] w-[20px] mt-0.5' />
              <div>Report</div>
            </div>
            <div className='flex items-center gap-2'>
              <img src={alert} className='h-[21px] w-[21px] mt-0.5' />
              <div>Alerts</div>
            </div>
          </div>

          <div className='flex gap-5'>
            <div className='flex flex-col items-center'>
              <img src={user} className='h-[32px] w-[32px]' />
              <div className='text-xl font-medium'>User</div>
            </div>
            <div>
              <img src={options} className='h-[30px] w-[30px] mt-2' />
            </div>
          </div>
        </div>

        <div className='mt-8'>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full
                bg-white/10 backdrop-blur-md text-white mt-9">
              <div>
                <img src={incos} className='h-4' />
              </div>
              <span className="font-medium">
                Ministry of Earth Sciences • INCOIS
              </span>
            </div>

            <div className='text-[65px] font-bold text-shadow-sm max-w-[820px] leading-20'>
              Empowering Communities for <span className='text-[#64b9ffd8]'>Safer Oceans</span>
            </div>

            <div className='max-w-[760px] mt-4'>
              <div className='text-[20px] font-medium opacity-75 text-gray-100'>
                Report, monitor, and analyze ocean hazards in real-time with INCOIS.
               Join thousands of citizens protecting India's coastline.
              </div>
            </div>


        </div>

        <div className='mt-28 py-2 flex items-center gap-4'>
          <div className='px-4 py-2'>
            <div className='flex items-center justify-center px-3 py-1 gap-2 bg-[#078fffd8]/30 rounded'>
              <img src={map} className='h-[23px] w-[23px] mt-0.5' />
              <span className='text-xl font-normal'>Explore Ports</span>
              <img src={redirect} className='h-8 mt-1 ml-2' />
            </div>
          </div>

          <div className='px-4 py-2'>
            <div className='flex items-center justify-center px-3 py-1 gap-2 bg-white/90 rounded'>
              <img src={reportblue} className='h-[23px] w-[23px] mt-0.5' />
              <span className='text-xl font-medium text-[#078fffd8]'>Report A Hazard</span>
              <img src={rightarrow} className='h-8 mt-1 ml-2' />
            </div>
          </div>
        </div>

      </div>


    </div>
  );
};

export default Herosection;
