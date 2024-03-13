import React from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';

import About from './Pages/About';
import Home from './Pages/Home/Home';
import Learning from './Pages/E-Learning/learning';
import EnrollNow from './Pages/Enroll/EnrollNow';
import Enrollmentform from './Pages/Enroll/Enrollmentform';

import Navbar from './Pages/Navbar';
import DashboardMain from './Dashboard/MainDashboard/DashboardMain';
import SecondNavbar from './Dashboard/MainNavbar/SecondNavbar';
import CourseList from './Dashboard/MainNavbar/Files/DashboardParts/Course/CourseList';
import AddCourse from './Dashboard/MainNavbar/Files/DashboardParts/Course/AddCourse';
import AddJobs from './Dashboard/MainNavbar/Files/DashboardParts/Job/AddJobs';
import JobsList from './Dashboard/MainNavbar/Files/DashboardParts/Job/JobsList';
import MySecondHome from './Dashboard/MainNavbar/MySecondHome';
import Frontend from './Dashboard/MainNavbar/Files/ELearningParts/Categories/Frontend';
import Backend from './Dashboard/MainNavbar/Files/ELearningParts/Categories/Backend';
import Graphic from './Dashboard/MainNavbar/Files/ELearningParts/Categories/Graphic';
import SocialMedia from './Dashboard/MainNavbar/Files/ELearningParts/Categories/SocialMedia';
import Seo from './Dashboard/MainNavbar/Files/ELearningParts/Categories/Seo';
import HumanResource from './Dashboard/MainNavbar/Files/ELearningParts/Categories/HumanResource';
import Jobs from './Dashboard/MainNavbar/Files/CareerParts/Jobs';
import Internship from './Dashboard/MainNavbar/Files/CareerParts/Internship';

import FooterDashboard from './Dashboard/MainNavbar/Files/FooterDashboard';
import Footer from './Pages/Footer/Footer'
import Login from './Dashboard/MainNavbar/Files/UserParts/Files/Login';
import Register from './Dashboard/MainNavbar/Files/UserParts/Files/Register';
import Forget from './Dashboard/MainNavbar/Files/UserParts/Files/Forget';

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

function AppRoutes() {
  const location = useLocation();

  const isDashboardRoute = () => {
    return location.pathname === '/dashboard';
  };

  const isMyRoute = () => {
    return location.pathname.startsWith('/My');
  };

  return (
    <>
      {isDashboardRoute() ? <DashboardMain/> : isMyRoute() ? <SecondNavbar /> : <Navbar />}

      <Routes>
        {/* APP ROUTES */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/learning" element={<Learning />} />
        <Route path="/enroll" element={<EnrollNow />} />
        <Route path="/form" element={<Enrollmentform />} />

        {/* ROUTES FOR SECOND NAVBAR */}
        <Route path="/MySecondHome" element={<MySecondHome />} /> 
        <Route path="/MyAddCourse" element={<AddCourse />} />
        <Route path="/MyCourseList" element={<CourseList />} />
        <Route path="/MyAddJobs" element={<AddJobs />} />
        <Route path="/MyJobsList" element={<JobsList />} />

        {/* E-LEARNING ROUTES FROM SECOND NAVBAR */}
        <Route path="/MyFrontend" element={<Frontend />} />
        <Route path="/MyBackend" element={<Backend />} />
        <Route path="/MyGraphic" element={<Graphic />} />
        <Route path="/MySocial" element={<SocialMedia />} />
        <Route path="/MySeo" element={<Seo />} />
        <Route path="/MyHR" element={<HumanResource />} />

        {/* CAREER ROUTES FROM SECOND NAVBAR */}
        <Route path="/MyJobs" element={<Jobs />} />
        <Route path="/MyInternships" element={<Internship />} />

         {/* USER ROUTES FROM SECOND NAVBAR */}
         <Route path="/MyLogin" element={<Login />} />
         <Route path="/MyRegister" element={<Register />} />
         <Route path="/MyForgetPassword" element={<Forget />} />

      </Routes>

      {isDashboardRoute() ? null : isMyRoute() ? <FooterDashboard /> :  <Footer />}


    </>
  );
}

export default App;























