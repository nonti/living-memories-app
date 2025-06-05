import React, { useState } from 'react';
import Dashboard from '../components/Dashboard';
import Profile from './Profile';
import Settings from './Settings';
import Transactions from './Transactions';
import Members from './Members';
import Sidebar from './Sidebar';


const AppLayout = () => {
  const [activeView, setActiveView] = useState('dashboard');

  const renderView = () => {
    switch (activeView) {
      case 'dashboard':
        return <Dashboard />;
      case 'profile':
        return <Profile />;
      case 'members':
        return <Members />;
      case 'transactions':
        return <Transactions />;
      case 'settings':
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex">
      <Sidebar setActiveView={setActiveView} />
      <main className="ml-16 md:ml-64 p-6 w-full">{renderView()}</main>
    </div>
  );
};

export default AppLayout;
