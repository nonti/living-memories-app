import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import profile from "../assets/profile.png";
import { HiOutlineHome } from "react-icons/hi";
import { GrPlan } from "react-icons/gr";
import { RiContactsLine } from "react-icons/ri";
import { TfiGallery } from "react-icons/tfi";
import { FcAbout } from "react-icons/fc";
import { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

  return (
  <>
     
     <nav className="fixed top-0  left-0 w-full z-50 h-16 flex items-center justify-between px-4 bg-black/15  backdrop-blur-sm md:top-10 md:left-1/2 md:-translate-x-1/2 md:max-w-7xl md:w-11/12 md:rounded-full shadow-lg shadow-amber-300/50">
  {/* Logo (Always visible) */}
  <div className="flex items-center">
    <Link to="/" className="flex items-center">
      <img src={logo} className="h-10 w-10 md:h-12 md:w-12 mr-2" alt="Stanzar-SA Logo" />
    </Link>
  </div>

  {/* Nav Links (Visible on md and up) */}
  <ul className="hidden md:flex md:space-x-8 md:items-center font-medium">
    <li>
      <Link
        to="/"
        className="text-blue-700 dark:text-yellow-500 hover:underline"
      >
        Home
      </Link>
    </li>
    <li>
      <Link
        to="/shops"
        className="text-gray-900 dark:text-yellow-500 hover:text-blue-700"
      >
        About
      </Link>
    </li>
    <li>
      <Link
        to="/stanzar"
        className="text-gray-900 dark:text-yellow-500 hover:text-blue-700"
      >
        Plans
      </Link>
    </li>
    <li>
      <Link
        to="/tokens"
        className="text-gray-900 dark:text-yellow-500 hover:text-blue-700"
      >
        Gallery
      </Link>
    </li>
    <li>
      <Link
        to="/tokens"
        className="text-gray-900 dark:text-yellow-500 hover:text-blue-700"
      >
        Contacts
      </Link>
    </li>
  </ul>

  {/* Profile Button (Always visible) */}
  <div className="relative">
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
      id="user-menu-button"
    >
      <span className="sr-only">Open user menu</span>
      <img className="w-8 h-8 rounded-full" src={profile} alt="User" />
    </button>

    {/* Dropdown menu */}
    {isOpen && (
      <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow dark:bg-gray-700">
        <div className="px-4 py-3 border-b border-gray-600">
          <span className="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
          <span className="block text-sm text-gray-500 dark:text-gray-400 truncate">name@mail.com</span>
        </div>
        <ul className="py-2">
          <li><Link to="/profile" className="block px-4 py-2 text-white text-sm hover:bg-gray-100 dark:hover:bg-gray-600">Profile</Link></li>
          <li><Link to="/settings" className="block px-4 py-2 text-white text-sm hover:bg-gray-100 dark:hover:bg-gray-600">Settings</Link></li>
          <li><Link to="/contacts" className="block px-4 py-2 text-white text-sm hover:bg-gray-100 dark:hover:bg-gray-600">Members</Link></li>
          <li><Link to="/login" className="block px-4 py-2 text-white text-sm hover:bg-gray-100 dark:hover:bg-gray-600">Sign out</Link></li>
        </ul>
      </div>
    )}
  </div>
</nav>

{/* Bottom Navigation (Mobile only) */}
<div className="fixed bottom-0 left-0 w-full h-16 bg-background/95 backdrop-blur-md rounded-full border border-amber-200 text-white flex justify-around items-center md:hidden">
  <Link to="/shops" className="flex flex-col items-center gap-2">
    <HiOutlineHome className="text-xl" />
    <span className="text-xs text-amber-300">Home</span>
  </Link>
  <Link to="/tokens" className="flex flex-col items-center gap-2">
    <GrPlan className="text-xl" />
    <span className="text-xs text-amber-300">Plans</span>
  </Link>
   <Link to="/tokens" className="flex flex-col items-center gap-2">
    <TfiGallery className="text-xl" />
    <span className="text-xs text-amber-300">Gallery</span>
  </Link>
   <Link to="/tokens" className="flex flex-col items-center gap-2">
    <RiContactsLine className="text-xl" />
    <span className="text-xs text-amber-300">Contacts</span>
  </Link>
</div>

    </>
  );
};
  
  

export default Navbar