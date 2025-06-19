import React, { useEffect, useState } from 'react';
import Sidebar from '../views/Sidebar';
import Members from '../views/Members';
import Transactions from '../views/Transactions';
import Profile from '../views/Profile';
import Settings from '../views/Settings';
import Main from '../views/Main';
import { useAuth } from '../context/AuthContext';
const Dashboard = () => {
  const { userRole, loading: authLoading} = useAuth(); 
  const [view, setView] = useState('dashboard'); // default view

  useEffect(() =>{
    if(!authLoading){
      if(userRole === 'user'){
        setView('profile')
      }else{
        setView('dashboard')
      }
    }
  },[userRole, authLoading]);

  const showProfile = () => setView('profile');
  const showTransactions = () => setView('transactions');
  const showMembers = () => setView('members')
  const showSettings = () => setView('settings');
  const showDashboard = () => setView('dashboard')

  if (authLoading) {
    return (
      <div className='flex justify-center items-center min-h-screen bg-slate-900 text-white'>
        Loading Dashboard...
      </div>
    );
  }
 
  return (
    <div className='flex bg-slate-900 min-h-screen'>
      <Sidebar onDashboardClick={showDashboard} 
        onProfileClick={showProfile} 
        onTransactionsClick={showTransactions} 
        onMembersClick={showMembers} 
        onSettingsClick={showSettings}
        userRole={userRole}
        currentActiveTab={view}
      />
      <div className='flex-1 ml-16 md:ml-64 overflow-y-auto'>
        <div className='w-full'>
          {view === 'dashboard' && <Main/>}
          {view === 'profile' && <Profile />}
          {view === 'transactions' && <Transactions />}
          {view === 'members' && <Members/>}
          {view === 'settings' && <Settings/>}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
