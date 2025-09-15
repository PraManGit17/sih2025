import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import axios from 'axios'
import temperature from '/icons/temperature.png';
import humidity from '/icons/humidity.png';
import winds from '/icons/winds.png';
import pressure from '/icons/pressure.png';
import precipitation from '/icons/precipitation.png';
import visibility from '/icons/visibility.png';
import cloudscover from '/icons/cloudscover.png';
import currents from '/icons/currents.png';

const Analysis = () => {

  // useEffect(() => {
  //   const fetchdata = async()=>{
  //     try {
  //       const response = await axios.get("https://15a6b47244e4.ngrok-free.app/api/sea-level/chenn");
  //       // console.log(response)
  //       const data = response.data;
  //       console.log(data)
  //     } catch (error) {
  //       console.log(error.message)
  //     }
  //   }
  //   fetchdata();
  // }, [])


  const tenDayData = {
    temp: [24, 25, 26, 25, 24, 23, 22, 24, 25, 26],
    humidity: [72, 75, 74, 73, 75, 76, 75, 74, 73, 72],
    swell: [2.0, 2.2, 2.1, 2.3, 2.0, 1.9, 2.1, 2.2, 2.3, 2.1],
    wind: [14, 15, 16, 15, 14, 13, 15, 16, 15, 14],
    rainfall: [5, 10, 15, 12, 8, 2, 0, 0, 3, 7],
    earthquake: [3.2, 3.5, 3.1, 3.8, 4.0, 3.9, 4.1, 4.2, 4.5, 4.3],
  };


  const hourlyData = {
    labels: Array.from({ length: 24 }, (_, i) => `${i}`),
    temp: Array.from({ length: 24 }, () => Math.floor(Math.random() * 8) + 22),
  };

  const mockTideData = {
    "port_code": "ptbl",
    "location": "Port Blair",
    "unit": "meters",
    "readings": [
      { "timestamp": "2025-09-13T13:00:00Z", "level": 0.593 },
      { "timestamp": "2025-09-13T13:30:00Z", "level": 0.607 },
      { "timestamp": "2025-09-13T14:00:00Z", "level": 0.648 },
      { "timestamp": "2025-09-13T14:30:00Z", "level": 0.708 },
      { "timestamp": "2025-09-13T15:00:00Z", "level": 0.77 },
      { "timestamp": "2025-09-13T15:30:00Z", "level": 0.846 },
      { "timestamp": "2025-09-13T16:00:00Z", "level": 0.93 },
      { "timestamp": "2025-09-13T16:30:00Z", "level": 1.008 },
      { "timestamp": "2025-09-13T17:00:00Z", "level": 1.08 },
      { "timestamp": "2025-09-13T17:30:00Z", "level": 1.138 }
    ]
  };

  const [tideData, setTideData] = useState(mockTideData);

  const BarChart = ({ data, color }) => {
    const maxVal = Math.max(...data);
    return (
      <div className="flex items-end h-32 w-full gap-1">
        {data.map((val, index) => (
          <motion.div
            key={index}
            className="w-full rounded-md transition-all duration-300"
            style={{ height: `${(val / maxVal) * 100}%`, backgroundColor: color }}
            whileHover={{ scaleY: 1.1 }}
          ></motion.div>
        ))}
      </div>
    );
  };

  const LineChart = ({ data, color, viewBoxWidth = 400 }) => {
    const maxDataVal = Math.max(...data);
    const points = data.map((val, index) => {
      const x = (index / (data.length - 1)) * viewBoxWidth;
      const y = (1 - val / maxDataVal) * 100;
      return `${x},${y}`;
    }).join(' ');

    const svgHeight = 100;

    return (
      <div className="relative w-full overflow-hidden">
        <svg viewBox={`0 0 ${viewBoxWidth} ${svgHeight}`} preserveAspectRatio="none" className="w-full h-32">
          <polyline
            fill="none"
            stroke={color}
            strokeWidth="2"
            points={points}
          />
        </svg>
      </div>
    );
  };

  const tideLevels = tideData.readings.map(r => r.level);
  const currentTideLevel = tideLevels[tideLevels.length - 1];

  return (
    <div className="w-full glass-parent min-h-screen text-white p-6">
      <div className="layout-content-container flex flex-col mx-auto mt-4">

        <div className="flex flex-wrap justify-between gap-3 p-4">
          <p className="text-white text-3xl font-bold tracking-[-0.015em] ">Meterological Analysis : </p>
        </div>

        <div className="flex items-center gap-4 px-8 py-10">
          <div className='w-[60%] flex flex-col gap-8'>
            <div className='flex items-center gap-8'>
              <div className='flex items-center'>
                <img src={temperature} className='h-[40px] w-[40px] mt-1' />
                <div className='text-white font-medium text-5xl'>28 <span className='text-2xl'>°C</span></div>
              </div>

              <div className='flex items-center gap-2'>
                <img src={humidity} className='h-[40px] w-[40px] mt-1' />
                <div className='text-white font-medium text-5xl'>18 <span className='text-2xl'>%</span></div>
              </div>

              <div className='flex items-center gap-2'>
                <img src={pressure} className='h-[40px] w-[40px] mt-1' />
                <div className='text-white font-medium text-5xl'>997 <span className='text-2xl'>hPa</span></div>
              </div>

              <div className='flex items-center gap-2'>
                <img src={winds} className='h-[40px] w-[40px] mt-1' />
                <div className='text-white font-medium text-5xl'>26 <span className='text-2xl'>km/h NE</span></div>
              </div>
            </div>

            <div className='flex items-center gap-8'>
              <div className='flex items-center gap-2'>
                <img src={visibility} className='h-[40px] w-[40px] mt-1' />
                <div className='text-white font-medium text-5xl'>78 <span className='text-2xl'>%</span></div>
              </div>

              <div className='flex items-center gap-2'>
                <img src={cloudscover} className='h-[40px] w-[40px] mt-1' />
                <div className='text-white font-medium text-5xl'>68 <span className='text-2xl'>%</span></div>
              </div>

              <div className='flex items-center'>
                <img src={precipitation} className='h-[40px] w-[40px] mt-1' />
                <div className='text-white font-medium text-5xl'>88 <span className='text-2xl'>mm</span></div>
              </div>

              <div className='flex items-center gap-2'>
                <img src={currents} className='h-[40px] w-[40px] mt-1' />
                <div className='text-white font-medium text-5xl'>1.6 <span className='text-2xl'>knots NW</span></div>
              </div>
            </div>
          </div>

          <div className='glass-child border-2 w-[38%] flex flex-col items-center gap-2 px-6 py-8 rounded-2xl'>
            <h2 className="text-white text-3xl font-semibold ">Current Conditions</h2>
            <hr className='border-white w-full opacity-60'></hr>
            <div className='text-center font-normal text-gray-200 text-lg'>
              The coast is warm and humid with steady northeast winds. Cloud cover and rainfall are likely, visibility is fair,
              and moderate currents are moving northwest under slightly low pressure.
            </div>
          </div>
        </div>

        <div className='w-full flex items-center mt-16'>
          <div className="glass-child w-[60%] flex flex-col gap-2 rounded-lg border border-white p-6">
            <p className="text-white text-base font-medium leading-normal">Temperature</p>
            <p className="text-gray-400 text-sm mt-2">Temperature trend over the next 24 hours</p>
            <LineChart data={hourlyData.temp} color="white" class />
            <div className="flex justify-between text-xs text-white mt-2">
              <span>Now</span>
              <span>+12h</span>
              <span>+24h</span>
            </div>
          </div>

          <div className='w-[40%] flex flex-col items-center gap-8'>
            <h2 className="text-white text-2xl font-bold ">Hourly Forecast (Next 24 Hours)</h2>
            <div className='text-gray-200 text-center w-[80%]'>This chart shows how coastal temperatures are expected to change over the next 24 hours, starting from current conditions.
              It helps track warming or cooling trends through the day and night.</div>
          </div>

        </div>

        <div className='w-full flex items-center mt-16'>
          <div className='w-[40%] flex flex-col items-center gap-8'>
            <h2 className="text-white text-2xl font-bold ">Tidal Level Analysis</h2>
            <div className='text-gray-200 text-center w-[80%]'>
              This chart highlights recent tidal level variations at the selected coastal location. Tracking these changes helps monitor rising or falling tides, offering insights into coastal conditions and potential flood risks.
            </div>
          </div>

          <div className="glass-child w-[60%] flex flex-col gap-2 rounded-lg border border-white p-6">
            <p className="text-white text-base font-medium leading-normal">Tide Level at {tideData.location}</p>
            <p className="text-white text-4xl font-bold truncate">{currentTideLevel} {tideData.unit}</p>
            <p className="text-white text-sm mt-1">Tide levels over the last few hours</p>
            <LineChart data={tideLevels} color="#2563eb" viewBoxWidth={500} />
            <div className="flex justify-between text-xs text-white mt-2">
              <span>{tideData.readings[0].timestamp.split('T')[1].substring(0, 5)}Z</span>
              <span>{tideData.readings[tideData.readings.length - 1].timestamp.split('T')[1].substring(0, 5)}Z</span>
            </div>
          </div>
        </div>

        <div className='mt-16'>
          <div className='text-3xl font-semibold w-full flex items-center justify-center p-2'>Annual Meterological Report</div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 py-6">

            <div className="glass-child flex flex-col gap-2 rounded-lg border border-white p-6">
              <p className="text-white text-base font-medium leading-normal">Average Temperature</p>
              <p className="text-white text-4xl font-bold truncate">25°C</p>
              <div className="flex gap-1">
                <p className="text-[rgb(166,212,250)] text-base font-normal leading-normal">Last 12 Months</p>
                <p className="text-[#6ef492] text-base font-medium leading-normal">+2%</p>
              </div>
              <div className="flex min-h-[180px] flex-1 flex-col gap-8 py-4">
                <svg width="100%" height="148" viewBox="-3 0 478 150" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                  <path
                    d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25V149H326.769H0V109Z"
                    fill="url(#paint0_linear_1131_5935)"
                  ></path>
                  <path
                    d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                  ></path>
                  <defs>
                    <linearGradient id="paint0_linear_1131_5935" x1="236" y1="1" x2="236" y2="149" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#233c48"></stop>
                      <stop offset="-5" stopColor="gray" stopOpacity="-10"></stop>
                    </linearGradient>
                  </defs>
                </svg>
                <div className="flex justify-around">
                  <p className="text-white text-[13px] font-bold leading-normal tracking-[0.015em]">Jan</p>
                  <p className="text-white text-[13px] font-bold leading-normal tracking-[0.015em]">Feb</p>
                  <p className="text-white text-[13px] font-bold leading-normal tracking-[0.015em]">Mar</p>
                  <p className="text-white text-[13px] font-bold leading-normal tracking-[0.015em]">Apr</p>
                  <p className="text-white text-[13px] font-bold leading-normal tracking-[0.015em]">May</p>
                  <p className="text-white text-[13px] font-bold leading-normal tracking-[0.015em]">Jun</p>
                  <p className="text-white text-[13px] font-bold leading-normal tracking-[0.015em]">Jul</p>
                </div>
              </div>

              <div className='text-white w-full text-center flex justify-center '>
                <div className='max-w-[540px]'>
                  Average coastal temperature over the last 12 months, showing a +2% rise compared to the previous year
                </div>
              </div>
            </div>


            <div className="glass-child flex flex-col gap-2 rounded-lg border border-white p-6">
              <p className="text-white text-base font-medium leading-normal">Average Humidity</p>
              <p className="text-white text-4xl font-bold truncate">75%</p>
              <div className="flex gap-1">
                <p className="text-[rgb(166,212,250)] text-base font-normal leading-normal">Last 12 Months</p>
                <p className="text-[#fc4518] text-base font-medium leading-normal">-5%</p>
              </div>
              <div className="grid min-h-[180px] grid-flow-col gap-6 grid-rows-[1fr_auto] items-end justify-items-center px-3">
                <div className=" bg-white border-t-2 w-full" style={{ height: '90%' }}></div>
                <p className="text-white text-[13px] font-bold leading-normal tracking-[0.015em]">Jan</p>
                <div className=" bg-white border-t-2 w-full" style={{ height: '40%' }}></div>
                <p className="text-whitetext-[13px] font-bold leading-normal tracking-[0.015em]">Feb</p>
                <div className=" bg-gray-200 border-t-2 w-full" style={{ height: '50%' }}></div>
                <p className="text-white text-[13px] font-bold leading-normal tracking-[0.015em]">Mar</p>
                <div className=" bg-white border-t-2 w-full" style={{ height: '20%' }}></div>
                <p className="text-white text-[13px] font-bold leading-normal tracking-[0.015em]">Apr</p>
                <div className=" bg-white border-t-2 w-full" style={{ height: '50%' }}></div>
                <p className="text-white text-[13px] font-bold leading-normal tracking-[0.015em]">May</p>
                <div className=" bg-white border-t-2 w-full" style={{ height: '40%' }}></div>
                <p className="text-white text-[13px] font-bold leading-normal tracking-[0.015em]">Jun</p>
                <div className=" bg-white border-t-2 w-full" style={{ height: '40%' }}></div>
                <p className="text-white text-[13px] font-bold leading-normal tracking-[0.015em]">Jul</p>
              </div>

              <div className='text-white w-full text-center flex justify-center mt-8 '>
                <div className='max-w-[540px]'>
                  Average coastal humidity over the last 12 months, showing a -5% drop compared to the previous year
                </div>
              </div>
            </div>

            <div className="glass-child flex flex-col gap-2 rounded-lg border border-white p-6">
              <p className="text-white text-base font-medium leading-normal">Average Wave Height</p>
              <p className="text-white text-4xl font-bold truncate">2.1m</p>
              <div className="flex gap-1">
                <p className="text-white text-base font-normal leading-normal">Last 12 Months</p>
                <p className="text-white text-base font-medium leading-normal">+8%</p>
              </div>
              <div className="flex min-h-[180px] flex-1 flex-col gap-8 py-4">
                <svg width="100%" height="148" viewBox="-3 0 478 150" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                  <path
                    d="M0 75C18.1538 75 18.1538 25 36.3077 25C54.4615 25 54.4615 85 72.6154 85C90.7692 85 90.7692 45 108.923 45C127.077 45 127.077 105 145.231 105C163.385 105 163.385 55 181.538 55C199.692 55 199.692 115 217.846 115C236 115 236 65 254.154 65C272.308 65 272.308 125 290.462 125C308.615 125 308.615 75 326.769 75C344.923 75 344.923 135 363.077 135C381.231 135 381.231 85 399.385 85C417.538 85 417.538 145 435.692 145C453.846 145 453.846 95 472 95"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                  ></path>
                </svg>
                <div className="flex justify-around">
                  <p className="text-white text-[13px] font-bold leading-normal tracking-[0.015em]">Jan</p>
                  <p className="text-white text-[13px] font-bold leading-normal tracking-[0.015em]">Feb</p>
                  <p className="text-white text-[13px] font-bold leading-normal tracking-[0.015em]">Mar</p>
                  <p className="text-white text-[13px] font-bold leading-normal tracking-[0.015em]">Apr</p>
                  <p className="text-white text-[13px] font-bold leading-normal tracking-[0.015em]">May</p>
                  <p className="text-white text-[13px] font-bold leading-normal tracking-[0.015em]">Jun</p>
                  <p className="text-white text-[13px] font-bold leading-normal tracking-[0.015em]">Jul</p>
                </div>
              </div>

              <div className='text-white w-full text-center flex justify-center mt-4 '>
                <div className='max-w-[540px]'>
                  Average coastal wave height over the last 12 months, showing a +8% increase compared to the previous year.
                </div>
              </div>
            </div>

            <div className="glass-child flex flex-col gap-2 rounded-lg border border-white p-6">
              <p className="text-white text-base font-medium leading-normal">Average Wind Speed</p>
              <p className="text-white text-4xl font-bold truncate">15 km/h</p>
              <div className="flex gap-1">
                <p className="text-white text-base font-normal leading-normal">Last 12 Months</p>
                <p className="text-white text-base font-medium leading-normal">-3%</p>
              </div>
              <div className="grid min-h-[180px] grid-flow-col gap-6 grid-rows-[1fr_auto] items-end justify-items-center px-3">
                <div className="bg-white border-t-2 w-full" style={{ height: '80%' }}></div>
                <p className="text-white text-[13px] font-bold leading-normal tracking-[0.015em]">Jan</p>
                <div className="bg-white border-t-2 w-full" style={{ height: '70%' }}></div>
                <p className="text-white text-[13px] font-bold leading-normal tracking-[0.015em]">Feb</p>
                <div className="bg-white border-t-2 w-full" style={{ height: '90%' }}></div>
                <p className="text-white text-[13px] font-bold leading-normal tracking-[0.015em]">Mar</p>
                <div className="bg-white border-t-2 w-full" style={{ height: '60%' }}></div>
                <p className="text-white text-[13px] font-bold leading-normal tracking-[0.015em]">Apr</p>
                <div className="bg-white border-t-2 w-full" style={{ height: '85%' }}></div>
                <p className="text-white text-[13px] font-bold leading-normal tracking-[0.015em]">May</p>
                <div className="bg-white border-t-2 w-full" style={{ height: '75%' }}></div>
                <p className="text-white text-[13px] font-bold leading-normal tracking-[0.015em]">Jun</p>
                <div className="bg-white border-t-2 w-full" style={{ height: '80%' }}></div>
                <p className="text-white text-[13px] font-bold leading-normal tracking-[0.015em]">Jul</p>
              </div>

              <div className='text-white w-full text-center flex justify-center mt-4'>
                <div className='max-w-[540px]'>
                  Average coastal wind speed over the last 12 months, showing a -3% decrease compared to the previous year
                </div>
              </div>
            </div>

            <div className="glass-child flex flex-col gap-2 rounded-lg border border-white p-6">
              <p className="text-white text-base font-medium leading-normal">Total Rainfall</p>
              <p className="text-white text-4xl font-bold truncate">1200mm</p>
              <div className="flex gap-1">
                <p className="text-white text-base font-normal leading-normal">Last 12 Months</p>
                <p className="text-white text-base font-medium leading-normal">+10%</p>
              </div>
              <div className="grid min-h-[180px] gap-x-4 gap-y-6 grid-cols-[auto_1fr] items-center py-3">
                <p className="text-white text-[13px] font-bold leading-normal tracking-[0.015em]">Jan</p>
                <div className="h-full flex-1">
                  <div className="border-white bg-white border-r-2 h-full" style={{ width: '70%' }}></div>
                </div>
                <p className="text-white text-[13px] font-bold leading-normal tracking-[0.015em]">Feb</p>
                <div className="h-full flex-1">
                  <div className="border-white bg-white border-r-2 h-full" style={{ width: '10%' }}></div>
                </div>
                <p className="text-white text-[13px] font-bold leading-normal tracking-[0.015em]">Mar</p>
                <div className="h-full flex-1">
                  <div className="border-white bg-white border-r-2 h-full" style={{ width: '70%' }}></div>
                </div>
                <p className="text-white text-[13px] font-bold leading-normal tracking-[0.015em]">Apr</p>
                <div className="h-full flex-1">
                  <div className="border-white bg-white border-r-2 h-full" style={{ width: '10%' }}></div>
                </div>
                <p className="text-white text-[13px] font-bold leading-normal tracking-[0.015em]">May</p>
                <div className="h-full flex-1">
                  <div className="border-white bg-white border-r-2 h-full" style={{ width: '50%' }}></div>
                </div>
                <p className="text-white text-[13px] font-bold leading-normal tracking-[0.015em]">Jun</p>
                <div className="h-full flex-1">
                  <div className="border-white bg-white border-r-2 h-full" style={{ width: '90%' }}></div>
                </div>
                <p className="text-white text-[13px] font-bold leading-normal tracking-[0.015em]">Jul</p>
                <div className="h-full flex-1">
                  <div className="border-white bg-white border-r-2 h-full" style={{ width: '40%' }}></div>
                </div>
              </div>

              <div className='text-white w-full text-center flex justify-center mt-4'>
                <div className='max-w-[540px]'>
                  Total coastal rainfall over the last 12 months, showing a +10% increase compared to the previous year
                </div>
              </div>
            </div>



            {/* <div className="flex flex-col gap-2 rounded-lg border border-[#325567] p-6">
              <p className="text-white text-base font-medium leading-normal">Earthquake Degrees</p>
              <p className="text-white text-4xl font-bold truncate">4.5</p>
              <div className="flex gap-1">
                <p className="text-[#92b7c9] text-base font-normal leading-normal">Last 12 Months</p>
                <p className="text-[#0bda57] text-base font-medium leading-normal">+10%</p>
              </div>
              <div className="grid min-h-[180px] grid-flow-col gap-6 grid-rows-[1fr_auto] items-end justify-items-center px-3">
                <div className="border-[#92b7c9] bg-[#233c48] border-t-2 w-full" style={{ height: '50%' }}></div>
                <p className="text-[#92b7c9] text-[13px] font-bold leading-normal tracking-[0.015em]">Jan</p>
                <div className="border-[#92b7c9] bg-[#233c48] border-t-2 w-full" style={{ height: '40%' }}></div>
                <p className="text-[#92b7c9] text-[13px] font-bold leading-normal tracking-[0.015em]">Feb</p>
                <div className="border-[#92b7c9] bg-[#233c48] border-t-2 w-full" style={{ height: '100%' }}></div>
                <p className="text-[#92b7c9] text-[13px] font-bold leading-normal tracking-[0.015em]">Mar</p>
                <div className="border-[#92b7c9] bg-[#233c48] border-t-2 w-full" style={{ height: '40%' }}></div>
                <p className="text-[#92b7c9] text-[13px] font-bold leading-normal tracking-[0.015em]">Apr</p>
                <div className="border-[#92b7c9] bg-[#233c48] border-t-2 w-full" style={{ height: '70%' }}></div>
                <p className="text-[#92b7c9] text-[13px] font-bold leading-normal tracking-[0.015em]">May</p>
                <div className="border-[#92b7c9] bg-[#233c48] border-t-2 w-full" style={{ height: '90%' }}></div>
                <p className="text-[#92b7c9] text-[13px] font-bold leading-normal tracking-[0.015em]">Jun</p>
                <div className="border-[#92b7c9] bg-[#233c48] border-t-2 w-full" style={{ height: '100%' }}></div>
                <p className="text-[#92b7c9] text-[13px] font-bold leading-normal tracking-[0.015em]">Jul</p>
              </div>
            </div> */}

          </div>

        </div>

        <h2 className="w-full mt-16 text-center text-white text-2xl font-bold tracking-[-0.015em] px-4 pb-3 pt-5">Daily Analysis (Last 10 Days)</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 py-6">

          <div className="glass-child flex flex-col gap-2 rounded-lg border border-white p-6">
            <p className="text-white text-base font-medium leading-normal">Temperature</p>
            <p className="text-white text-4xl font-bold truncate">{tenDayData.temp[9]}°C</p>
            <p className="text-white text-sm mt-1">Daily temperature trend over the last 10 days</p>
            <BarChart data={tenDayData.temp} color="white" />
            <div className="flex justify-between text-xs text-white mt-2">
              <span>Day -10</span>
              <span>Today</span>
            </div>
            <div className='text-white w-full text-center flex justify-center mt-4'>
              <div className='max-w-[540px]'>
                Coastal temperatures over the past 10 days, showing daily variations and recent trends
              </div>
            </div>
          </div>

          <div className="glass-child flex flex-col gap-2 rounded-lg border border-white p-6">
            <p className="text-white text-base font-medium leading-normal">Humidity</p>
            <p className="text-white text-4xl font-bold truncate">{tenDayData.humidity[9]}%</p>
            <p className="text-white text-sm mt-1">Daily humidity trend over the last 10 days</p>
            <BarChart data={tenDayData.humidity} color="white" />
            <div className="flex justify-between text-xs text-white mt-2">
              <span>Day -10</span>
              <span>Today</span>
            </div>
            <div className='text-white w-full text-center flex justify-center mt-4'>
              <div className='max-w-[540px]'>
                Coastal humidity over the past 10 days, highlighting daily fluctuations and trends
              </div>
            </div>
          </div>

          <div className="glass-child flex flex-col gap-2 rounded-lg border border-white p-6">
            <p className="text-white text-base font-medium leading-normal">Wave Height</p>
            <p className="text-white text-4xl font-bold truncate">{tenDayData.swell[9]}m</p>
            <p className="text-white text-sm mt-1">Daily wave height trend over the last 10 days</p>
            <BarChart data={tenDayData.swell} color="white" />
            <div className="flex justify-between text-xs text-white mt-2">
              <span>Day -10</span>
              <span>Today</span>
            </div>
            <div className='text-white w-full text-center flex justify-center mt-4'>
              <div className='max-w-[540px]'>
                Coastal wave heights over the past 10 days, showing daily fluctuations and recent trends
              </div>
            </div>
          </div>

          <div className="glass-child flex flex-col gap-2 rounded-lg border border-white p-6">
            <p className="text-white text-base font-medium leading-normal">Wind Speed</p>
            <p className="text-white text-4xl font-bold truncate">{tenDayData.wind[9]} km/h</p>
            <p className="text-white text-sm mt-1">Daily wind speed trend over the last 10 days</p>
            <BarChart data={tenDayData.wind} color="white" />
            <div className="flex justify-between text-xs text-white mt-2">
              <span>Day -10</span>
              <span>Today</span>
            </div>
            <div className='text-white w-full text-center flex justify-center mt-4'>
              <div className='max-w-[540px]'>
                Coastal wind speeds over the past 10 days, highlighting daily variations and trends
              </div>
            </div>
          </div>

          <div className="glass-child flex flex-col gap-2 rounded-lg border border-white p-6">
            <p className="text-white text-base font-medium leading-normal">Rainfall</p>
            <p className="text-white text-4xl font-bold truncate">{tenDayData.rainfall[9]}mm</p>
            <p className="text-white text-sm mt-1">Daily rainfall trend over the last 10 days</p>
            <BarChart data={tenDayData.rainfall} color="white" />
            <div className="flex justify-between text-xs text-white mt-2">
              <span>Day -10</span>
              <span>Today</span>
            </div>
            <div className='text-white w-full text-center flex justify-center mt-4'>
              <div className='max-w-[540px]'>
                Coastal rainfall over the past 10 days, showing daily variations and recent trends
              </div>
            </div>
          </div>

          {/* <div className="flex flex-col gap-2 rounded-lg border border-[#325567] p-6">
            <p className="text-white text-base font-medium leading-normal">Earthquake Degrees</p>
            <p className="text-white text-4xl font-bold truncate">{tenDayData.earthquake[9]}</p>
            <p className="text-gray-400 text-sm mt-1">Daily trend over the last 10 days</p>
            <BarChart data={tenDayData.earthquake} color="#fa5f38" />
            <div className="flex justify-between text-xs text-gray-400 mt-2">
              <span>Day -10</span>
              <span>Today</span>
            </div>
          </div> */}

        </div>
      </div>
    </div>
  );
};

export default Analysis;
