import React, { useState } from 'react';
import Sidebar from '../views/Sidebar';
import HeaderNav from '../views/HeaderNav'
import Members from '../views/Members';
import Transactions from '../views/Transactions';
import Profile from '../views/Profile';
import Settings from '../views/Settings';
const Dashboard = () => {
  const [view, setView] = useState('profile'); // default view

  const showProfile = () => setView('profile');
  const showTransactions = () => setView('transactions');
  const showMembers = () => setView('members')
  const showSettings = () => setView('settings');
  const showDashboard = () => setView('dashboard')

  return (
    <div className='flex'>
      <Sidebar onDashboardClick={showDashboard} onProfileClick={showProfile} onTransactionsClick={showTransactions} onMembersClick={showMembers} onSettingsClick={showSettings}/>
      <div className='grow ml-16 md:ml-64'>
        <HeaderNav />
        <div className='px-8'>
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
