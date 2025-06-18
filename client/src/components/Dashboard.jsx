import React, { useState } from 'react';
import Sidebar from '../views/Sidebar';
import Members from '../views/Members';
import Transactions from '../views/Transactions';
import Profile from '../views/Profile';
import Settings from '../views/Settings';
import Main from '../views/Main';
const Dashboard = () => {
  const [view, setView] = useState('profile'); // default view

  const showProfile = () => setView('profile');
  const showTransactions = () => setView('transactions');
  const showMembers = () => setView('members')
  const showSettings = () => setView('settings');
  const showDashboard = () => setView('dashboard')

  return (
    <div className='flex bg-slate-900'>
      <Sidebar onDashboardClick={showDashboard} onProfileClick={showProfile} onTransactionsClick={showTransactions} onMembersClick={showMembers} onSettingsClick={showSettings}/>
      <div className='grow'>
        <div className=''>
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
