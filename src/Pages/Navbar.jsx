import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu'; 
import logo from '../assets/logo.jpg'
import adminImg from '../assets/admin-image.jpg'

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <nav className="bg-white text-[#374151] border-gray-200 dark:bg-gray-900 ">
      <div className="max-w-screen-xl flex flex-wrap flex-col md:flex-row md:items-center  items-start justify-between text-[#374151] mx-0 lg:mx-0 xl:mx-28 md:mx sm:mx-0 p-2">
        <NavLink to="https://flowbite.com/" className="flex items-center space-x-3  rtl:space-x-reverse">
          <img src={logo} className="h-16 w-16" alt="Social Swirl" />
        </NavLink> 
        <div className="hidden md:hidden lg:flex lg:items-center lg:space-x-3 lg:rtl:space-x-reverse font-[Chivo]">

    <NavLink to="/" className=" hover:underline">HOME</NavLink>
    <span className="px-2"></span>
    <NavLink to="jobs" className=" hover:underline">REMOTE JOBS</NavLink>
    <span className="px-2"></span>
    <NavLink to="business" className="hover:underline">BUSINESS OUTSOURCING
    </NavLink> <span className="px-2"></span>
          <NavLink to="learning" className="hover:underline">E-LEARNING
          </NavLink><span className="px-2"></span>

      <NavLink to="about" className=" hover:underline">ABOUT US</NavLink><span className="px-2"></span>
  <NavLink to="admin" className=" hover:underline">ADMIN</NavLink><span className="px-8"></span>
        </div>
        <div className="flex flex-col sm:flex-col md:flex-row items-center md:order-2 space-x-0 md:space-x-4 rtl:space-x-reverse">
         
          <button
            type="button"
            onClick={toggleDropdown}
            className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
            id="user-menu-button"
            aria-expanded={isDropdownOpen ? "true" : "false"}
            aria-controls="user-dropdown"
          >
            <img className="h-12 w-12 rounded-full" src={adminImg} alt="user photo" />
          </button>

          <button
            type="button"
            onClick={toggleDrawer}
            className="lg:hidden text-[#374151] m-2 p-2 border-2 border-gray-500 hover:text-gray-900"
          > 
            <MenuIcon /> {/* Replaced text with MenuIcon */}
          </button>

          <div
            className={`z-50 ${isDropdownOpen ? 'block' : 'hidden'} my-0 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 md:absolute  md:right-0 md:mt-36   xl:mt-0 font-[Chivo] `}
            id="user-dropdown"
          >
            <NavLink to="/dashboard" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</NavLink>
            <NavLink to="/logout" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Logout</NavLink>
          </div>
        </div>
      </div>
      <div className={`${isDrawerOpen ? 'block' : 'hidden'} block lg:hidden   font-[Chivo]`}>
        <div className="p-4">
          <NavLink to="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">HOME</NavLink>
          <NavLink to="jobs" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">REMOTE JOBS</NavLink>
          <NavLink to="business" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">BUSINESS OUTSOURCING</NavLink>
          <NavLink to="learning" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">E-LEARNING</NavLink>
          <NavLink to="about" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">ABOUT US</NavLink>
          <NavLink to="admin" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">ADMIN</NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
