import React, { useState } from 'react';
import { MdComputer } from 'react-icons/md';

function ELearning() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const openDropdown = () => {
    setIsDropdownOpen(true);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div className="relative">
      <p
        id="dropdownHoverButton"
        onMouseEnter={openDropdown}
        onMouseLeave={closeDropdown}
        className="text-gray-800  cursor-pointer font-medium rounded-lg gap-2  font-[Chivo] text-md px-1  py-0 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800  hover:transform hover:-translate-y-1 transition-all duration-300 ease-in-out"
        type="button"
      >
         <MdComputer size={20} />
        <h1 className=''>E-Learning</h1>
    
      </p>

      {/* Dropdown menu */}
      <div
        id="dropdownHover"
        onMouseEnter={openDropdown}
        onMouseLeave={closeDropdown}
        className={`absolute top-full left-0 z-10 ${isDropdownOpen ? '' : 'hidden'}  bg-white divide-y divide-gray-100 rounded-lg shadow w-60 dark:bg-gray-700`}
      >
        <ul className="py-1 text-md text-gray-700 font-[Chivo] dark:text-gray-200" aria-labelledby="dropdownHoverButton">
          <li>
            <a href="/MyFrontend" className="block px-4 py-2 hover:bg-blue-400 hover:text-white hover:transform hover:-translate-y-1 transition-all duration-300 ease-in-out">Front-End Development</a>
          </li>
          <hr />
          <li>
            <a href="/MyBackend" className="block px-4 py-2 hover:bg-blue-400 hover:text-white hover:transform hover:-translate-y-1 transition-all duration-300 ease-in-out">Back-End Development</a>
          </li>
          <hr />
          <li>
            <a href="/MyGraphic" className="block px-4 py-2 hover:bg-blue-400 hover:text-white hover:transform hover:-translate-y-1 transition-all duration-300 ease-in-out">Graphic Designing</a>
          </li>
          <hr />
          <li>
            <a href="/MySocial" className="block px-4 py-2 hover:bg-blue-400 hover:text-white hover:transform hover:-translate-y-1 transition-all duration-300 ease-in-out">Social Media Marketing</a>
          </li>
          <hr />
          <li>
            <a href="MySeo" className="block px-4 py-2 hover:bg-blue-400 hover:text-white hover:transform hover:-translate-y-1 transition-all duration-300 ease-in-out">Seo</a>
          </li>
          <hr />
          <li>
            <a href="/MyHR" className="block px-4 py-2 hover:bg-blue-400 hover:text-white hover:transform hover:-translate-y-1 transition-all duration-300 ease-in-out">Human Resource</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ELearning;
