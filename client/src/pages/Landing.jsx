import React from 'react'
import Herosection from '../components/Landing Components/Herosection'
import PortInfo from '../components/Landing Components/PortInfo'
import Role from '../components/Landing Components/Role'
import VoicesSection from '../components/Landing Components/VoicesSection'

const Landing = () => {
  return (
    <div>
      <Herosection />
      <PortInfo />
      <Role />
      <VoicesSection />
    </div>
  )
}

export default Landing
