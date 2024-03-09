import React from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';

import About from './Pages/About';
import Home from './Pages/Home/Home';
import Learning from './Pages/E-Learning/learning';
import EnrollNow from './Pages/Enroll/EnrollNow';
import Enrollmentform from './Pages/Enroll/Enrollmentform';
import Navbar from './Pages/Navbar';
import Footer from './Pages/Footer/Footer'

import DashboardMain from './Dashboard/MainDashboard/DashboardMain'

function App() {
  return (
    <>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </>
  );
}

// Define a separate component for routes
function AppRoutes() {
  const location = useLocation();

  const isDashboardRoute = () => {
    return location.pathname === '/dashboard';
  };

  return (
    <>
    
      {isDashboardRoute() ? <DashboardMain /> : <Navbar />}

      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/learning" element={<Learning />} />
        <Route path="/enroll" element={<EnrollNow />} />
        <Route path="/form" element={<Enrollmentform />} />
      </Routes>

      {!isDashboardRoute() && <Footer />}
    </>
  );
}

export default App;
