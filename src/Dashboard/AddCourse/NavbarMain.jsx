import React, { useState } from "react";
import { MdNotifications, MdSettings } from "react-icons/md";
import Dashboard from "../Dashboard";

import Career from "./CareerPage/Career";
import ELearning from "./Files/ELearning";
import User from "../../Pages/User";
import Header from "./Files/Header";

function NavbarMain() {
  const [dashboardDropdownOpen, setDashboardDropdownOpen] = useState(false);
  const [settingsDropdownOpen, setSettingsDropdownOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [avatarDropdownOpen, setAvatarDropdownOpen] = useState(false);

  const toggleDashboardDropdown = () => {
    setDashboardDropdownOpen(!dashboardDropdownOpen);
  };

  const toggleSettingsDropdown = () => {
    setSettingsDropdownOpen(!settingsDropdownOpen);
  };

  const toggleUserDropdown = () => {
    setUserDropdownOpen(!userDropdownOpen);
  };

  const toggleAvatarDropdown = () => {
    setAvatarDropdownOpen(!avatarDropdownOpen);
  };

  const closeDropdowns = () => {
    setDashboardDropdownOpen(false);
    setSettingsDropdownOpen(false);
    setUserDropdownOpen(false);
    setAvatarDropdownOpen(false);
  };

  return (
    <div className="bg-blue-500 text-white h-16 flex  justify-around items-center mx-auto">
      <div>
        <h1>Social Swirl</h1>
      </div>
      <div className="flex space-x-10 items-center">
        {/* Dashboard */}
        <Dashboard />

        {/* Services */}
        <Career />

        {/* E-learning */}
        <ELearning />

        {/* User */}
        <User />
      </div>
      <div className="flex space-x-6 items-center">
        {/* Notifications */}
        <MdNotifications size={25} />
        {/* Settings */}
        <div onClick={toggleSettingsDropdown} className="relative">
          <MdSettings size={20} />
          {settingsDropdownOpen && (
            <div className="absolute top-10 right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-10">
              <ul className="text-black">
                <li>Setting 1</li>
                <li>Setting 2</li>
                <li>Setting 3</li>
              </ul>
            </div>
          )}
        </div>

        {/* User Avatar */}
        <Header />
        <div onClick={toggleAvatarDropdown} className="relative">
          <img src="avatar.jpg" alt="Avatar" className="w-8 h-8 rounded-full" />
          {avatarDropdownOpen && (
            <div className="absolute top-10 right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-10">
              <ul className="text-black">
                <li>Avatar Option 1</li>
                <li>Avatar Option 2</li>
                <li>Avatar Option 3</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default NavbarMain;
