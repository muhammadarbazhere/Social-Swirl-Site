import React, { useState } from 'react';
import { AppBar, Toolbar,IconButton } from '@material-ui/core';
import { Dashboard as DashboardIcon, People as PeopleIcon, Map as MapIcon, InsertChart as InsertChartIcon, Menu as MenuIcon, Notifications as NotificationsIcon,  } from '@material-ui/icons';

import {  MdOutlineAdminPanelSettings } from "react-icons/md";
import { SiPowerpages } from "react-icons/si";
import { SiGooglemaps } from "react-icons/si";
import { FaUserCircle } from "react-icons/fa";
import { MdOutlineFeaturedPlayList } from "react-icons/md";

import SearchIcon from '@material-ui/icons/Search';

import { NavLink } from 'react-router-dom';
import myImg from '../../assets/myImage.jpg'

import ProgressCards from './Files/ProgressCards';
import Report from './Files/Report';
import TaskProgress from './Files/TaskProgress';
import UserData from './Files/UserData';
import OrderSummary from './Files/OrderSummary';




const Dashboard = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(true);

    const toggleDrawer = () => {
      setIsDrawerOpen(!isDrawerOpen);
    };
    const closeDrawer = () => {
        if (isDrawerOpen) {
          setIsDrawerOpen(false);
        }
      };
    
    
    return (
      <div  onClick={closeDrawer} className='p-0 m-0
      bg-blue-100 w-full'>     
      
        <AppBar position="fixed" className='bg-black' style={{ zIndex: 12 }}>
          <Toolbar className='bg-blue-500'>
            <div style={{ flexGrow: 1 }} />

            <IconButton
             color="inherit"
             edge="end">
                <SearchIcon/>
            </IconButton>

            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              edge="end"
              
            >
              <MenuIcon />
            </IconButton>
            <IconButton
              color="inherit"
              aria-label="notifications"
              edge="end"
            >
              <NotificationsIcon />
            </IconButton>
          </Toolbar>
        </AppBar>


        {isDrawerOpen && (
    <div className="fixed inset-0 bg-black opacity-0" 
    onClick={toggleDrawer}>
    </div>
      )}

      <div className={`fixed top-0 left-0 w-72 flex flex-col  z-50 bg-white h-full overflow-y-auto transition duration-300 transform ${isDrawerOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className=" bg-blue-600 h-16 items-center text-center justify-center flex">
          <h2 className="text-xl font-bold text-white">COOL ADMIN</h2>
        </div>
        <nav className="mt-6 font-[Chivo]">
            <div className='w-full   flex flex-col items-center font-[Comfortaa] justify-center'>
               <img className='w-28 rounded-full h-full' src={myImg} alt="admin" />
               <h1 className='mt-2 font-extrabold'>Muhammad</h1>
               <h1 className='text-xs mb-3'>Sign out</h1>
            </div>
            <hr className=''/>

          <NavLink to="/" className="items-center flex text-black py-3 px-6 text-sm  hover:bg-gray-300" activeClassName="bg-gray-800">
            <MdOutlineAdminPanelSettings className='text-black px-1' size={30}/>
            <h1 className='px-2'>Dashboard</h1>
            </NavLink>
<hr />
          <NavLink to="#" className="flex items-center py-3 px-6 text-sm  hover:bg-gray-300" activeClassName="bg-gray-800">
            <FaUserCircle size={30} className='text-black px-1'/>
            <h1 className='px-2'>User</h1>
            </NavLink>
          <hr />
          <NavLink to="#" className="flex items-center py-3 px-6 text-sm text-black hover:bg-gray-300" activeClassName="bg-gray-800">
           <MdOutlineFeaturedPlayList className='text-black px-1' size={30}/>
            <h1 className='px-2'>Features</h1></NavLink>
          <hr />
          <NavLink to="#" className=" py-3 px-6 flex items-center text-sm text-black hover:bg-gray-300" activeClassName="bg-gray-800">
            <SiPowerpages className='text-black px-1' size={30}/>
            <h1 className='px-2'>Pages</h1>
            </NavLink>
          <hr />
          <NavLink to="#" className=" py-3 flex items-center px-6 text-sm text-black hover:bg-gray-300" activeClassName="bg-gray-800">
            <SiGooglemaps className='text-black px-1' size={30}/>
            <h1 className='px-2'>Maps</h1>
            </NavLink>
          <hr />
        </nav>
      </div>

    
    );







      <div className='m-0 p-0 w-3/4 ml-80 h-auto bg-blue-100 '>
        
        <Toolbar />
        <OrderSummary/>
        <ProgressCards/>

<div className='flex gap-4'>
<Report/>
<TaskProgress/>
</div>
        <UserData/>
        {/* <MapComponent/> */}

      </div>

    </div>
  );
};

export default Dashboard;
