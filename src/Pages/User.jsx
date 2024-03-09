import React, { useState } from 'react';
import { MdDashboardCustomize, MdPerson } from 'react-icons/md';

function User() {
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
        className="text-white  cursor-pointer font-medium rounded-lg text-lg px-1 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
         <MdPerson size={20} />
        <h1>User</h1>
    
      </p>

      {/* Dropdown menu */}
      <div
        id="dropdownHover"
        onMouseEnter={openDropdown}
        onMouseLeave={closeDropdown}
        className={`absolute top-full left-0 z-10 ${isDropdownOpen ? '' : 'hidden'}  bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}
      >
        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHoverButton">
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default User;
