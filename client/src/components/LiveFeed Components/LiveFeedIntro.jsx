import React from 'react'
import feed from '/icons/feed.jpg';
import map from '/icons/map.jpg';
import report from '/icons/report.jpg';
import alert from '/icons/alert.jpg';
import user from '/icons/user.jpg';
import options from '/icons/options.png';
import waves from '/icons/waves.png';
import marker from '/icons/marker.png';
import { Link } from 'react-router-dom';


const LiveFeedIntro = () => {
  return (
    <div
      className="h-screen bg-cover bg-center relative"
    >

      <div className="relative z-10 flex flex-col h-full text-white px-10 py-6">

        <div className='flex items-baseline justify-between'>
          <Link to={'/'} className='flex gap-2'>
            <img src={waves} className='h-[40px] w-[40px] mt-[5px] cursor-pointer' />
            <div className='text-4xl font-bold cursor-pointer'>Frontwaves</div>
          </Link>

          <div className='text-xl font-semibold flex space-x-16'>
            <Link to={'/live-feed'} className='flex items-center gap-2  cursor-pointer'>
              <img src={feed} className='h-[23px] w-[23px] mt-0.5' />
              <div>Live Feed</div>
            </Link>
            <Link to={'/map'} className='flex items-center gap-2 cursor-pointer'>
              <img src={map} className='h-[23px] w-[23px]' />
              <div>Maps</div>
            </Link>
            <Link to={'/reporting'} className='flex items-center gap-2 cursor-pointer'>
              <img src={report} className='h-[23px] w-[23px] mt-0.5' />
              <div>Report</div>
            </Link>
            <Link to={'/alerts'} className='flex items-center gap-2 cursor-pointer'>
              <img src={alert} className='h-[23px] w-[23px] mt-0.5' />
              <div>Alerts</div>
            </Link>
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


        <div className='w-full flex flex-col items-center h-full'>
          <div className='text-[50px] font-bold text-shadow-sm mt-25 text-center'>
            <span className='text-[#64b9ffd8]'>Community</span> Signals for Safer Coasts
          </div>

          <div>
            <div className='text-[20px] font-medium opacity-75 text-gray-100 text-center mt-4'>
              Have a look at all the Social chatter, local warnings, and public posts - to be aware of ground reality and b prepared.
            </div>

          </div>

          <div className='glass-parent p-4 w-[45%] h-full flex flex-col gap-2 mt-20 '>
            <div className='flex justify-center'>
              <div className='flex items-center justify-center px-5 py-2 gap-3  max-w-2xs glass-effect hover:cursor-pointer'>
                <img src={alert} className='h-[24px] w-[24spx] mt-1' />
                <span className='text-xl font-normal'>Check For Updates</span>
              </div>
            </div>

            <div className='glass-child w-full px-5 py-4 flex items-end justify-between border-2 rounded-xl mt-2'>
              <div className='text-xl font-semibold'>Kybar Tufan</div>
              <div className='flex items-center text-xl font-medium'><img src={marker} className='h-6 w-6 mr-2' />Mangluru Port</div>
              <div className='text-xl font-normal flex items-center'><div className='mt-1 h-4 w-4 rounded-full bg-red-600 mr-1'></div>Red Alert</div>
              <div className='text-xl font-normal'>2.2K Posts</div>
            </div>

            <div className='glass-child w-full px-5 py-4 flex items-end justify-between border-2 rounded-xl'>
              <div className='text-xl font-semibold'>Bengal High Waves</div>
              <div className='flex items-center text-xl font-medium'><img src={marker} className='h-6 w-6 mr-2' />Kolkata Port</div>
              <div className='text-xl font-normal flex items-center'><div className='mt-1 h-4 w-4 rounded-full bg-orange-400 mr-1'></div>Orange Alert</div>
              <div className='text-xl font-normal'>1K Posts</div>
            </div>

            <div className='glass-child w-full px-5 py-4 flex items-end justify-between border-2 rounded-xl'>
              <div className='text-xl font-semibold'>Arabian Sea Winds</div>
              <div className='flex items-center text-xl font-medium'><img src={marker} className='h-6 w-6 mr-2' />Mumbai Port</div>
              <div className='text-xl font-normal flex items-center'><div className='mt-1 h-4 w-4 rounded-full bg-amber-200 mr-1'></div>Yellow Alert</div>
              <div className='text-xl font-normal'>500 Posts</div>
            </div>


          </div>
        </div>
      </div>
    </div>
  )
}

export default LiveFeedIntro
