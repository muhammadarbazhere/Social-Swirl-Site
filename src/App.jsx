import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Pages/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';

function App() {

  return (
    <>
    
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<About />} />
       
        {/* careers */}
        {/* <Route path="/internship" element={<Internship />} /> */}
        {/* <Route path="/jobs"       element={<RemoteJobs />} /> */}
         {/*  */}

         {/* <Route path="/business" element={<Business />} /> */}
        {/* <Route path="/learning" element={<Learning />} /> */}
      </Routes>

      {/* <Footer/> */}
    </BrowserRouter>




    </>
  )
}

export default App
