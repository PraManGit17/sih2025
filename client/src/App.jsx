import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Landing from './pages/Landing'
import Map from './pages/Map'
import LiveFeed from './pages/LiveFeed'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/map' element={<Map />} />
      <Route path='/live-feed' element={<LiveFeed />} />
    </Routes>
  )
}

export default App