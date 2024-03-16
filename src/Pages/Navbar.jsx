import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { TiThMenu } from "react-icons/ti";
import logo from '../assets/logo.jpg'
import adminImg from '../assets/myImage.jpg'

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const CloseDropDown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  }

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <nav  className="bg-blue-100 sticky top-0 z-50 text-[#374151] border-gray-200 dark:bg-gray-900 ">
      <div className="w-full xl:px-24 flex flex-wrap flex-row md:flex-row md:items-center items-start justify-between text-[#374151] mx-0 lg:mx-0 px-2">
        <NavLink to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logo} className="h-16 w-16" alt="Social Swirl" />
        </NavLink> 
        <div className="hidden md:hidden lg:flex lg:items-center lg:space-x-3 lg:rtl:space-x-reverse font-[Chivo]">
          <NavLink onClick={closeDrawer} to="/" className="hover:underline">HOME</NavLink>
          <span className="px-2"></span>
          <NavLink onClick={closeDrawer} to="jobs" className="hover:underline">REMOTE JOBS</NavLink>
          <span className="px-2"></span>
          <NavLink onClick={closeDrawer} to="business" className="hover:underline">BUSINESS OUTSOURCING</NavLink> 
          <span className="px-2"></span>
          <NavLink onClick={closeDrawer} to="learning" className="hover:underline">E-LEARNING</NavLink>
          <span className="px-2"></span>
          <NavLink onClick={closeDrawer} to="about" className="hover:underline">ABOUT US</NavLink>
          <span className="px-2"></span>
          <NavLink onClick={closeDrawer} to="admin" className="hover:underline">ADMIN</NavLink>
          <span className="px-8"></span>
        </div>
        <div className="flex flex-row sm:flex-row md:flex-row items-center md:order-2 space-x-3 rtl:space-x-reverse">
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
            className="lg:hidden text-[#374151] m-2 p-1 rounded-md border-2 border-gray-400"
          > 
            <TiThMenu size={30} /> 
          </button>


          <div
            className={`z-50 ${isDropdownOpen ? 'block' : 'hidden'} my-0 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 absolute right-0 mt-36 xl:right-14 font-[Chivo] `}
            id="user-dropdown"
          >
            <NavLink to="/dashboard" className="block px-6 py-2 text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white" onClick={closeDrawer}>Dashboard</NavLink>
            <NavLink to="/logout" className="block px-6 py-2 text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white" onClick={closeDrawer}>Logout</NavLink>
          </div>
        </div>
      </div>
      <div className={`${isDrawerOpen ? 'block' : 'hidden'} block lg:hidden font-[Chivo] transition-all duration-1000 ease-in-out `}>
        <div className="px-1">
          <NavLink to="/" className="block bg-blue-600 px-4 py-3 mb-1 rounded-lg text-md text-white hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white" onClick={closeDrawer}>HOME</NavLink>
          <NavLink to="jobs" className="block bg-blue-600 px-4 py-3 mb-1 rounded-lg text-md text-white hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white" onClick={closeDrawer}>REMOTE JOBS</NavLink>
          <NavLink to="business" className="block bg-blue-600 px-4 py-3 mb-1 rounded-lg text-md text-white hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white" onClick={closeDrawer}>BUSINESS OUTSOURCING</NavLink>
          <NavLink to="learning" className="block bg-blue-600 px-4 py-3 mb-1 rounded-lg text-md text-white hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white" onClick={closeDrawer}>E-LEARNING</NavLink>
          <NavLink to="about" className="block bg-blue-600 px-4 py-3 mb-1 rounded-lg text-md text-white hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white" onClick={closeDrawer}>ABOUT US</NavLink>
          <NavLink to="admin" className="block bg-blue-600 px-4 py-3 mb-1 rounded-lg text-md text-white hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white" onClick={closeDrawer}>ADMIN</NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
