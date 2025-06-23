import { useEffect, useState } from 'react';
import logo from '../assets/logo.png';
import { MdOutlineDashboard,MdOutlineSettings } from 'react-icons/md';
import { FaRegUserCircle } from 'react-icons/fa';
import { GrGroup, GrTransaction, GrPerformance } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import { TbLogout2 } from 'react-icons/tb';
import { useAuth } from '../context/AuthContext';

const Sidebar = ({onMembersClick, onProfileClick,  onTransactionsClick, onDashboardClick, userRole, currentActiveTab }) => {
  const  [activeTab, setActiveTab] = useState(currentActiveTab || (userRole === 'user' ? 'profile': 'dashboard')); // Default active tab
  const { logout, isLoggedIn } = useAuth();

  useEffect(() => {
    setActiveTab(currentActiveTab)
  },[currentActiveTab])

  const handleItemClick = (tabName, callback) => {
    setActiveTab(tabName);
    if (callback) {
      callback();
    }
  };

  const commonClasses = 'flex items-center py-2 px-2 space-x-4 hover:rounded-lg hover:cursor-pointer hover:bg-amber-300 hover:text-white';
  const activeClasses = 'bg-gray-500 text-white rounded-lg'; // Stronger highlight for active tab

  return (
   <div className='fixed top-0 left-0 h-screen w-16 md:w-64 z-20 bg-slate-950/90'> 
      <div className='flex flex-col gap-3 w-full text-slate-300 h-full justify-between'>
        <div className='flex flex-col gap-2 px-4 mt-4'>
          <div className='flex items-center justify-center gap-2'>
            <div className='text-amber-300 text-xl md:text-4xl'>
              <Link to='/'>
                <img src={logo} className='h-10 w-10 md:h-12 md:w-12 mr-2' alt='Stanzar-SA Logo' />
              </Link>
            </div>
            <div className='hidden md:flex font-bold'>
              Living Memories
            </div>
          </div>
          <div className='flex flex-col gap-2 tex-md sm:textsm lg:text-lg'>
            {/* Conditionally render Dashboard link for admin only */}
            {userRole === 'admin' && (
              <div onClick={() => handleItemClick('dashboard', onDashboardClick)}
                className={`${commonClasses} ${activeTab === 'dashboard' ? activeClasses : ''} `}>
                <div>
                  <MdOutlineDashboard />
                </div>
                <div className='hidden sm:flex hover:text-slate-100 cursor-pointer'>
                  Dashboard
                </div>
              </div>
            )}
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
          {isLoggedIn && ( 
              <div onClick={logout} className={`${commonClasses} text-slate-200 hover:bg-amber-400 hover:text-white`}> {/* Added red styling for logout */}
                <div>
                  <TbLogout2 /> 
                </div>
                <div className='hidden sm:flex hover:text-slate-100 cursor-pointer'>
                  Logout
                </div>
              </div>
            )}
        </div>
      </div>
    </div>
  );
};


export default Sidebar;
