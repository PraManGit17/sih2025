import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Landing from './pages/Landing'
import Map from './pages/Map'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/map' element={<Map />} />
    </Routes>
  )
}

export default App