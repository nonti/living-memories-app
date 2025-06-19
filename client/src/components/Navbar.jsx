import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import profile from '../assets/profile.png';
import { HiOutlineHome } from 'react-icons/hi';
import { GrPlan } from 'react-icons/gr';
import { RiContactsLine } from 'react-icons/ri';
import { TfiGallery } from 'react-icons/tfi';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { FiLogIn } from 'react-icons/fi';

import { useEffect, useState,  } from 'react';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const [isPlansDropdownOpen, setIsPlansDropdownOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const { isLoggedIn, authUser, logout, authLoading } = useAuth();
 
 
  useEffect(()=> {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll')
  },[])

  const handlePlansMouseEnter = () => {
    setIsPlansDropdownOpen(true);
  };

  const handlePlansMouseLeave = () => {
    setIsPlansDropdownOpen(false);
  };

  const handleProfileButtonClick = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const handleLogout = () => {
    logout(); 
    setIsProfileDropdownOpen(false); 
  };


  return (
     <>
      <nav className={`fixed top-0 left-0 w-full z-50 h-16 flex items-center justify-between px-4
    ${isScrolled ? 'bg-gray-500' : 'bg-black/15'}
    backdrop-blur-sm shadow-lg shadow-amber-300/50
    md:top-10 md:left-1/2 md:-translate-x-1/2 md:max-w-7xl md:w-11/12 md:rounded-full`}>
        {/* Logo (Always visible) */}
        <div className='flex items-center'>
          <Link to='/' className='flex items-center'>
            <img src={logo} className='h-10 w-10 md:h-12 md:w-12 mr-2' alt='Stanzar-SA Logo' />
          </Link>
        </div>

        {/* Nav Links (Visible on md and up) */}
        <ul className='hidden md:flex md:space-x-8 md:items-center font-medium'>
          <li>
            {/* It's better to use Link directly instead of nesting <a> inside Link if you're using React Router */}
            <Link to='/' className='text-blue-700 dark:text-yellow-500 hover:underline'> Home</Link>
          </li>
          <li>
            <a href='#about' className='text-gray-900 dark:text-yellow-500 hover:text-blue-700'>About</a>
          </li>
          <li className='relative'>
            <button onMouseEnter={handlePlansMouseEnter} onMouseLeave={handlePlansMouseLeave} className='flex gap-2 items-center justify-between w-full py-2 px-3 text-amber-300 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-amber-300 md:p-0 md:w-auto  md:dark:hover:text-amber-300 dark:focus:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent'>Plans
              <MdKeyboardArrowDown className='text-amber-300'/>
            </button>
              {isPlansDropdownOpen && (
                <div className='absolute top-full left-0 z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 dark:divide-gray-600' onMouseEnter={handlePlansMouseEnter}onMouseLeave={handlePlansMouseLeave}>
                  <ul className='py-2 text-sm text-gray-700 dark:text-gray-200' aria-labelledby='dropdownLargeButton'>
                    <li>
                      <a href='#plans' className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-amber-300'>Premium</a>
                    </li>
                    <li>
                      <a href='#plans' className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-amber-300'>Standard</a>
                    </li>
                  </ul>
                </div>
                )}
          </li>
          <li>
            <a href='#gallery' className='text-gray-900 dark:text-yellow-500 hover:text-blue-700'>Gallery</a>
          </li>
          <li>
            <a href='#contacts' className='text-gray-900 dark:text-yellow-500 hover:text-blue-700'>Contacts</a>
          </li>
           <li>
            <a  href='#team' className='text-gray-900 dark:text-yellow-500 hover:text-blue-700'>Team</a>
          </li>
           <li>
            <a href='#testimonial' className='text-gray-900 dark:text-yellow-500 hover:text-blue-700'>Testimonial</a>
          </li>
        </ul>

        {/* Profile/Login Button (Always visible) */}
          <div className='relative'>
            <button onClick={handleProfileButtonClick} className='flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600' id='user-menu-button'>
              <span className='sr-only'>Open user menu</span>
              {/* Show profile image if logged in, otherwise login icon */}
              {isLoggedIn ? (
                <img className='w-8 h-8 rounded-full' src={profile} alt='User Profile' />
              ) : (
                <FiLogIn className='w-8 h-8 p-1 rounded-full text-white' />
              )}
            </button>

            {/* Dropdown menu */}
            {isProfileDropdownOpen && ( !authLoading && // Only show dropdown if not loading auth state
              <div className='absolute right-0 mt-2 w-48 bg-white rounded-lg shadow dark:bg-gray-700'>
                {isLoggedIn ? (
                  <>
                    <div className='px-4 py-3 border-b border-gray-600'>
                      <span className='block text-sm text-gray-900 dark:text-white'>{authUser?.name || 'User'}</span> {/* Use authUser data */}
                      <span className='block text-sm text-gray-500 dark:text-gray-400 truncate'>{authUser?.email || 'email@example.com'}</span> {/* Use authUser data */}
                    </div>
                    <ul className='py-2'>
                      {authUser?.role === 'user' && ( // Link to profile for regular user
                        <li><Link to='/user/profile' className='block px-4 py-2 text-white text-sm hover:bg-gray-100 dark:hover:bg-gray-600'>Profile</Link></li>
                      )}
                      {authUser?.role === 'admin' && ( // Link to dashboard for admin
                        <li><Link to='/admin/dashboard' className='block px-4 py-2 text-white text-sm hover:bg-gray-100 dark:hover:bg-gray-600'>Dashboard</Link></li>
                      )}
                      <li><Link to='/settings' className='block px-4 py-2 text-white text-sm hover:bg-gray-100 dark:hover:bg-gray-600'>Settings</Link></li>
                      <li><Link to='/members' className='block px-4 py-2 text-white text-sm hover:bg-gray-100 dark:hover:bg-gray-600'>Members</Link></li>
                      {/* Change handleAuthToggle to handleLogout */}
                      <li><button onClick={handleLogout} className='block w-full text-left px-4 py-2 text-white text-sm hover:bg-gray-100 dark:hover:bg-gray-600'>Sign out</button></li>
                    </ul>
                  </>
                ) : (
                  <ul className='py-2'>
                    {/* Ensure this Link correctly points to your login route */}
                    <li><Link to='/login' className='block px-4 py-2 text-white text-sm hover:bg-gray-100 dark:hover:bg-gray-600'>Log In</Link></li>
                  </ul>
                )}
              </div>
            )}
          </div>
        </nav>

        {/* Bottom Navigation (Mobile only) */}
          <div className='fixed bottom-0 left-0 w-full h-16 bg-background/95 backdrop-blur-md rounded-full border border-amber-200 text-white flex justify-around items-center md:hidden'>
            <Link to='/' className='flex flex-col items-center gap-2'>
              <HiOutlineHome className='text-xl' />
              <span className='text-xs text-amber-300'>Home</span>
            </Link>
            <Link to='/plans' className='flex flex-col items-center gap-2'>
              <GrPlan className='text-xl' />
              <span className='text-xs text-amber-300'>Plans</span>
            </Link>
            <Link to='/gallery' className='flex flex-col items-center gap-2'>
              <TfiGallery className='text-xl' />
              <span className='text-xs text-amber-300'>Gallery</span>
            </Link>
            <Link to='/contacts' className='flex flex-col items-center gap-2'>
              <RiContactsLine className='text-xl' />
              <span className='text-xs text-amber-300'>Contacts</span>
            </Link>
          </div>
    </>
  );
};
  
  

export default Navbar