import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar.jsx'
import Home from './Components/Home/Home.jsx'
import Starter from './Components/Starter/Starter.jsx'
import Exam from './Components/Exam/Exam.jsx'
import Explination from './Components/Explination/Explination.jsx'
import Ending from './Components/Ending/Ending.jsx'

const App = () => {
  return (
    <div className="pt-16">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/starter" element={<Starter />} />
        <Route path="/exam" element={<Exam />} />
        <Route path="/explination" element={<Explination />} />
        <Route path="/ending" element={<Ending />} />
      </Routes>
    </div>
  )
}

export default App
