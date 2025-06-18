import { useState } from 'react';
import logo from '../assets/logo.png';
import { MdOutlineDashboard,MdOutlineSettings } from 'react-icons/md';
import { FaRegUserCircle } from 'react-icons/fa';
import { GrGroup, GrTransaction, GrPerformance } from 'react-icons/gr';
import { Link } from 'react-router-dom';

const Sidebar = ({onMembersClick, onProfileClick, onSettingsClick, onTransactionsClick, onDashboardClick, }) => {
  const [activeTab, setActiveTab] = useState('dashboard'); // Default active tab

  const handleItemClick = (tabName, callback) => {
    setActiveTab(tabName);
    if (callback) {
      callback();
    }
  };

  const commonClasses = 'flex items-center py-3 px-2 space-x-4 hover:rounded-lg hover:cursor-pointer hover:bg-amber-300 hover:text-white';
  const activeClasses = 'bg-gray-500 text-white rounded-lg'; // Stronger highlight for active tab

  return (
   <div className='h-screen bg-slate-950/90'> 
      <div className='flex flex-col gap-3 w-full text-slate-300 h-full justify-between'>
        <div className='flex flex-col gap-2 px-4 mt-4'>
          <div className='flex items-center justify-center gap-2'>
            <div className='text-amber-300 text-xl md:text-4xl'>
              <img src={logo} className='h-10 w-10 md:h-12 md:w-12 mr-2' alt='Stanzar-SA Logo' />
            </div>
            <div className='hidden md:flex font-bold'>
              Living Memories
            </div>
          </div>
          <div className='flex flex-col gap-2 tex-md sm:textsm lg:text-lg'>
            <div onClick={() => handleItemClick('dashboard', onDashboardClick)}
          className={`${commonClasses} ${activeTab === 'dashboard' ? activeClasses : ''} `}>
              <div>
                <MdOutlineDashboard/>
              </div>
              <div className='hidden sm:flex hover:text-slate-100 cursor-pointer'>
                Dashboard
              </div>
            </div>
             <div onClick={() => handleItemClick('profile', onProfileClick)}
                className={`${commonClasses} ${activeTab === 'profile' ? activeClasses : ''} `}>
              <div>
                <FaRegUserCircle/>
              </div>
              <div className='hidden sm:flex hover:text-slate-100 cursor-pointer'>
                Profile
              </div>
            </div>
             <div onClick={() => handleItemClick('members', onMembersClick)}
          className={`${commonClasses} ${activeTab === 'members' ? activeClasses : ''} `}>
              <div>
                <GrGroup/>
              </div>
              <div className='hidden sm:flex hover:text-slate-100 cursor-pointer'>
                Beneficiary
              </div>
            </div>
              <div onClick={() => handleItemClick('transactions', onTransactionsClick)}
                  className={`${commonClasses} ${activeTab === 'transactions' ? activeClasses : ''} `}>
                <GrTransaction/>
              <div className='hidden sm:flex hover:text-slate-100 cursor-pointer'>
                Transanctions
              </div>
          </div>
          </div>
        </div>
        <div className='border-t text-md sm:text-xs md:text-sm lg:text-lg border-amber-300 py-3 px-4'>
          <div className='flex gap-2 items-center'>
              <div onClick={() => handleItemClick('settings', onSettingsClick)}
          className={`${commonClasses} ${activeTab === 'settings' ? activeClasses : ''} `}>
                <MdOutlineSettings/>
              </div>
              <div className='hidden sm:flex hover:text-slate-100 cursor-pointer'>
                Settings
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};


export default Sidebar;
