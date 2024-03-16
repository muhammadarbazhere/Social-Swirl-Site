import React, { useEffect, useRef, useState } from 'react';
import { RiArrowDropDownLine } from "react-icons/ri";
import Admin from '../../../assets/myImage.jpg'
import { IoSettingsOutline } from 'react-icons/io5';
import { MdAccountCircle } from 'react-icons/md';
import { CiDollar } from 'react-icons/ci';
import { FaPowerOff } from "react-icons/fa6";

function Avatar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const openDropdown = () => {
    setIsDropdownOpen(true);
  };
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <p
        id="dropdownHoverButton"
        onClick={openDropdown}
        className="text-gray-600 lg:text-white  cursor-pointer font-medium rounded-lg text-lg px-1 py-0 text-center inline-flex items-center gap-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        <div className='w-full h-full'>
        <img className='sm:w-10 w-16 sm:h-10 h-16 rounded-full' src={Admin} alt="Admin" />
        </div>

        <p className='flex items-center hover:text-gray-300  hover:transform  transition-all duration-300 ease-in-out'>
          {/* <h1 className=''>Muhammad</h1> */}
          {/* <span><RiArrowDropDownLine size={20}/></span>    */}
        </p>
       
      </p>

      {/* Dropdown menu */}
      <div
        id="dropdownHover"
        className={`absolute top-full -left-28 sm:right-0   z-10 ${isDropdownOpen ? '' : 'hidden'}  bg-white divide-y divide-gray-100 rounded-lg shadow w-56 lg:w-80 dark:bg-gray-700`}
      >
        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHoverButton">


        <li>
          
          <a href="#" className="flex gap-3 px-4 py-6  ">
            <span className='w-14 h-14 rounded-full'>
           <img className='w-full h-full rounded-full' src={Admin} alt="Admin" />
            </span>
            <span className=' flex text-md flex-col justify-center font-bold'>
            <h1 >Muhammad Arbaz</h1>
            <p className='text-sm text-gray-400'>muhammad@gmail</p>
            </span>
          </a>
        </li>
        <hr />






        <li>
            <a href="#" className="flex gap-3 px-4 py-4 mt-3 hover:bg-[#5F9BCE] hover:text-white">
              <span>
              <MdAccountCircle size={20}/>
              </span>
              <h1>Account</h1>
            </a>
          </li>
          <li>
            <a href="#" className="flex gap-3 px-4 py-4 hover:bg-[#5F9BCE] hover:text-white">
              <span><IoSettingsOutline size={20}/></span>
              <h1>Setting</h1>
            </a>
          </li>
          <li>
            <a href="#" className="flex gap-3 mb-1 px-4 py-4 pb-5 hover:bg-[#5F9BCE] hover:text-white">
              <span><CiDollar size={20}/></span>
              <h1>Billing</h1>
            </a>
          </li>
          <hr />
          <li>
            <a href="/" className="flex gap-3 px-4 py-4 hover:bg-[#4272D7]  hover:text-white">
             <span><FaPowerOff size={20}/></span>
              <h1>Sign out</h1>
              </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Avatar;
