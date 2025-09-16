import React from 'react'
import commas from '/icons/commas.png';
import fisherman from '/icons/fisherman.png';
import officer from '/icons/officer.png';
import journalist from '/icons/journalist.png';

const VoicesSection = () => {
  return (
    <div
      className="h-screen bg-cover bg-center relative"
      style={{
        backgroundImage: "url('/images/coast.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 flex flex-col justify-center items-center h-full px-8">
        
        <div className="text-4xl md:text-5xl font-bold text-white text-center">
          Voices from the <span className="text-[#5992f6d8]">Coast</span>
        </div>

        <div className="mt-4 text-lg text-gray-200 opacity-90 font-medium text-center max-w-2xl">
          Real perspectives on how Frontwaves will empower communities, officials, and citizens along India's coastline.
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12 w-full mt-12">
          
          <div className="glass-parent px-6 py-8 flex flex-col gap-4 rounded-xl text-white max-w-xs">
            <img src={commas} className="h-[25px] w-[26px]" />
            <div className="text-md font-medium opacity-90">
              With Frontwaves, our boats will receive live alerts on high waves and sudden storms, keeping our livelihoods and lives safer at sea.
            </div>
            <div className="flex items-center gap-4 mt-4">
              <img src={fisherman} className="h-14 w-14 rounded-full object-cover" />
              <div>
                <div className="text-lg font-semibold">Ravi Kumar</div>
                <div className="text-sm opacity-80">Fisherman, Chennai</div>
              </div>
            </div>
          </div>

          <div className="glass-parent px-6 py-8 flex flex-col gap-4 rounded-xl text-white max-w-xs">
            <img src={commas} className="h-[25px] w-[26px]" />
            <div className="text-md font-medium opacity-90">
              By using crowdsourced reports and real-time data, we'll be able to coordinate faster evacuations and reduce coastal risk during emergencies.
            </div>
            <div className="flex items-center gap-4 mt-4">
              <img src={officer} className="h-14 w-14 rounded-full object-cover" />
              <div>
                <div className="text-lg font-semibold">Dr. Priya Sharma</div>
                <div className="text-sm opacity-80">Disaster Management Officer</div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="glass-parent px-6 py-8 flex flex-col gap-4 rounded-xl text-white max-w-xs">
            <img src={commas} className="h-[25px] w-[26px]" />
            <div className="text-md font-medium opacity-90">
              As a coastal resident, I will feel safer knowing I'll instantly get hazard alerts and guidelines to protect my family and community.
            </div>
            <div className="flex items-center gap-4 mt-4">
              <img src={journalist} className="h-14 w-14 rounded-full object-cover" />
              <div>
                <div className="text-lg font-semibold">Arjun Shivale</div>
                <div className="text-sm opacity-80">Citizen Reporter, Mumbai</div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default VoicesSection
