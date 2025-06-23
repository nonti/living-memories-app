import React, { useState } from 'react';
import { MdOutlineCalendarMonth, MdNotificationsNone, MdMailOutline } from 'react-icons/md';
import profile from '../assets/profile.png'; 
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

const DashboardHeader = () => {
  const { authUser, userRole,  } = useAuth();
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const handleProfileButtonClick = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  // Only render this header if the user is an admin
  if (userRole !== 'admin') {
    return null; // Don't render anything if not admin
  }

  return (
    <div className='flex gap-4 items-center justify-end px-4 py-4 text-amber-400'>
      <MdOutlineCalendarMonth className='text-xl cursor-pointer hover:text-amber-300' />
      <MdNotificationsNone className='text-xl cursor-pointer hover:text-amber-300' />
      <MdMailOutline className='text-xl cursor-pointer hover:text-amber-300' />
      <div className='relative'>
        <button onClick={handleProfileButtonClick} className='flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600' id='user-menu-button'>
          <span className='sr-only'>Open user menu</span>
          <img className='w-8 h-8 rounded-full' src={profile} alt='User Profile' />
        </button>

        {/* Dropdown menu */}
        {isProfileDropdownOpen && (
          <div className='absolute right-0 mt-2 w-48 bg-white rounded-lg shadow dark:bg-gray-700'>
            <div className='px-4 py-3 border-b border-gray-600'>
              <span className='block text-sm text-gray-900 dark:text-white'>{authUser?.name || 'Admin'}</span>
              <span className='block text-sm text-gray-500 dark:text-gray-400 truncate'>{authUser?.email || 'admin@example.com'}</span>
            </div>
            <ul className='py-2'>
              <li><Link to='/admin/dashboard' onClick={() => setIsProfileDropdownOpen(false)} className='block px-4 py-2 text-white text-sm hover:bg-gray-100 dark:hover:bg-gray-600'>Dashboard</Link></li>
              <li><Link to='/settings' onClick={() => setIsProfileDropdownOpen(false)} className='block px-4 py-2 text-white text-sm hover:bg-gray-100 dark:hover:bg-gray-600'>Settings</Link></li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardHeader;