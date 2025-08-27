import React from 'react'
import Home from './components/Home.jsx'
import Calendly from './components/Calendly.jsx'
import Booking from "./components/Booking.jsx";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/calendly" element={<Calendly />} />
      </Routes>
    </>
  )
}

export default App
