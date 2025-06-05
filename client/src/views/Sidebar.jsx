import React from 'react';
import { MdOutlineDashboard } from 'react-icons/md';
import { FaRegUserCircle } from 'react-icons/fa';
import { GrGroup, GrTransaction, GrPerformance } from 'react-icons/gr';

const Sidebar = ({setActiveView}) => {
  return (
    <div className='bg-slate-800 text-white px-4 fixed h-screen w-16 md:w-64 border-r border-gray-300'>
      {/* Show title only on md and up */}
      <h1 className='text-2xl font-bold hidden md:block mt-4 italic text-center'>
        Living Memories
      </h1>

      <ul className='flex flex-col mt-5 text-xl'>
        <li onClick={() => setActiveView('dashboard')} className='flex items-center py-3 px-2 space-x-4 hover:rounded-b-2xl hover:cursor-pointer hover:bg-amber-300 hover:text-white'>
          <div>
          <MdOutlineDashboard />
          </div>
          <span className='hidden md:inline'>Dashboard</span>
        </li>
        <li onClick={() => setActiveView('profile')}className='flex items-center py-3 px-2 space-x-4 hover:rounded-t-2xl hover:cursor-pointer hover:bg-amber-300 hover:text-white'>
          <div>
          <FaRegUserCircle />
          </div>
          <span className='hidden md:inline'>Profile</span>
        </li>
        <li onClick={() => setActiveView('members')} className='flex items-center py-3 px-2 space-x-4 hover:rounded-b-2xl hover:cursor-pointer hover:bg-amber-300 hover:text-white'>
          <div>
          <GrGroup />
          </div>
          <span className='hidden md:inline'>Members</span>
        </li>
        <li onClick={() => setActiveView('transanctions')} className='flex items-center py-3 px-2 space-x-4 hover:rounded-t-2xl hover:cursor-pointer hover:bg-amber-300 hover:text-white'>
          <div>
          <GrTransaction />
          </div>
          <span className='hidden md:inline'>Transactions</span>
        </li>
        <li onClick={() => setActiveView('settings')}className='flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:bg-amber-300 hover:text-white'>
          <div>
          <GrPerformance />
          </div>
          <span className='hidden md:inline'>Settings</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
